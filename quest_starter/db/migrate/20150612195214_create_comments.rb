class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :game_id, null: false, index: true
      t.integer :user_id, index: true
      t.string :poster_name, null: false
      t.text :text, null: false

      t.timestamps null: false
    end
  end
end
