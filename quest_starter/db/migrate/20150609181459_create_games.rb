class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :user_id, null: false, index: true
      t.string :summary
      t.text :description
      t.string :image_url
      t.boolean :active, null: false, default: :false #, index: true
      t.integer :interested_players, null: false, default: 0

      t.timestamps null: false
    end
  end
end
