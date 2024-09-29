class AddBookmarksCountToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :bookmarks_count, :integer, null: false, default: 0
  end
end
