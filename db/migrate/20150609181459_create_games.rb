class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :author_id, null: false, index: true
      t.string :author_name, null: false
      t.string :title, null: false, index: true
      t.string :summary, null: false
      t.text :description, null: false
      t.string :image_url, null: false
      t.boolean :active, null: false, default: :false #, index: true

      t.timestamps null: false
    end
  end
end
