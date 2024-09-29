class CreateItems < ActiveRecord::Migration[7.1]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.index :name, unique: true

      t.string :link, null: false
      t.index :link, unique: true

      t.string :description

      t.integer :item_type, null: false, default: 0

      t.timestamps
    end
  end
end
