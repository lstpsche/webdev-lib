class AddNestingToItems < ActiveRecord::Migration[7.1]
  def change
    add_column :items, :parent_id, :bigint
    add_index :items, :parent_id
  end
end
