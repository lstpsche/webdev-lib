# == Schema Information
#
# Table name: items
#
#  id              :bigint           not null, primary key
#  bookmarks_count :integer          default(0), not null
#  children_count  :integer          default(0), not null
#  description     :string
#  item_type       :integer          default("project"), not null
#  link            :string
#  name            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  parent_id       :bigint
#
# Indexes
#
#  index_items_on_link       (link) UNIQUE
#  index_items_on_name       (name) UNIQUE
#  index_items_on_parent_id  (parent_id)
#
class Item < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  validates :link, presence: true, if: :project?
  validates :link, uniqueness: true, allow_nil: true

  validate :parent_is_category, if: :parent
  validate :project_cannot_have_children, if: :children

  has_many :bookmarks, dependent: :destroy, counter_cache: :bookmarks_count
  has_many :bookmarked_by, through: :bookmarks, source: :user, counter_cache: :bookmarks_count

  belongs_to :parent, class_name: name.to_s, optional: true, inverse_of: :children, counter_cache: :children_count
  has_many :children, class_name: name.to_s, foreign_key: 'parent_id', dependent: :nullify, inverse_of: :parent,
                      counter_cache: :children_count

  has_many :project_children, -> { where(item_type: ITEM_TYPES[:project]) },
           class_name: name.to_s,
           foreign_key: 'parent_id', dependent: :nullify, inverse_of: false

  scope :projects, -> { where(item_type: ITEM_TYPES[:project]) }
  scope :categories, -> { where(item_type: ITEM_TYPES[:category]) }

  ITEM_TYPES = {
    project: 'project',
    category: 'category'
  }.freeze

  # :project?, :category? -- :project!, :category!
  enum item_type: { ITEM_TYPES[:project] => 0, ITEM_TYPES[:category] => 1 }

  after_save :update_ancestors_counter_cache, if: :saved_change_to_parent_id?

  class << self
    def create_project(**args)
      create(item_type: ITEM_TYPES[:project], **args)
    end

    def create_category(**args)
      create(item_type: ITEM_TYPES[:category], **args)
    end
  end

  def bookmark_for(user)
    if !project?
      errors.add(:bookmarks, 'only projects can be bookmarked')
    else
      bookmarks.find_or_create_by(user: user)
    end

    self
  end

  def unbookmark_for(user)
    if !project?
      errors.add(:bookmarks, 'only projects can be bookmarked')
    else
      bookmarks.find_by(user: user)&.destroy
    end

    self
  end

  ##
  # @param [Item] sub_item Item record
  #
  def add_sub_item(sub_item)
    children << sub_item
  end

  ##
  # @param [Item/Integer] sub_item either Item record or Item record ID
  #
  def remove_sub_item(sub_item)
    sub_item_id = sub_item.is_a?(Item) ? sub_item.id : sub_item

    children.find_by(id: sub_item_id)&.update(parent_id: nil)

    self
  end

  private

  # updates children_count counter cache for ALL ancestors
  def update_ancestors_counter_cache
    return unless project?

    # loop through all ancestors and update their children_count
    current_item = parent
    while current_item
      Item.reset_counters(current_item.id, :project_children)
      current_item = current_item.parent
    end
  end

  def parent_is_category
    return if parent.category?

    errors.add(:parent, 'must be a category')
  end

  def project_cannot_have_children
    return unless project? && children.exists?

    errors.add(:children, 'cannot have children because this is a project')
  end
end
