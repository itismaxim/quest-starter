class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :user_id, null: false, index: true
      t.string :summary, null: false, index: true
      t.text :description, null: false
      t.string :image_url, null: false
      t.string :status, null: false, index: true
      t.integer :interested_players, null: false
      t.string :confirmed_players, null: false

      t.timestamps null: false
    end
  end
end
