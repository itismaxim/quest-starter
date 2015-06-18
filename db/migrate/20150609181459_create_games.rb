class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :author_id, null: false, index: true
      t.string :author_name, null: false
      t.string :title, null: false, index: true
      t.string :summary
      t.text :description
      t.string :image_url
      t.boolean :active, null: false, default: :false #, index: true

      t.timestamps null: false
    end
  end
end
