# == Schema Information
#
# Table name: bookmarks
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  item_id    :bigint
#  user_id    :bigint
#
# Indexes
#
#  index_bookmarks_on_item_id  (item_id)
#  index_bookmarks_on_user_id  (user_id)
#
class Bookmark < ApplicationRecord
  belongs_to :user, counter_cache: :bookmarks_count
  belongs_to :item, counter_cache: :bookmarks_count
end
