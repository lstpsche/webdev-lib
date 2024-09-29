class ItemSerializer
  include JSONAPI::Serializer

  attributes :id, :name, :link, :description, :item_type, :parent_id, :children_count

  attribute :is_project, &:project?
  attribute :is_category, &:category?

  attribute :has_children do |item|
    item.children_count.positive?
  end
end
