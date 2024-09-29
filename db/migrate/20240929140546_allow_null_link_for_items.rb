class AllowNullLinkForItems < ActiveRecord::Migration[7.1]
  def up
    change_column :items, :link, :string, null: true
  end

  def down
    change_column :items, :link, :string, null: false
  end
end
