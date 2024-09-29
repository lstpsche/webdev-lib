class AddChildrenCountToItems < ActiveRecord::Migration[7.1]
  def change
    add_column :items, :children_count, :integer, default: 0, null: false
  end
end
