class CreateBookmarks < ActiveRecord::Migration[7.1]
  def change
    create_table :bookmarks do |t|
      t.belongs_to :user
      t.belongs_to :item

      t.timestamps
    end
  end
end
