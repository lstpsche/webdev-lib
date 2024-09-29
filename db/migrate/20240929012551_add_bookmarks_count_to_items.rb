class AddBookmarksCountToItems < ActiveRecord::Migration[7.1]
  def change
    add_column :items, :bookmarks_count, :integer, null: false, default: 0
  end
end
