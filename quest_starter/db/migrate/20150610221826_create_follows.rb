class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false, index: true
      t.integer :game_id, null: false, index: true

      t.timestamps null: false
    end

    add_index :follows, [:user_id, :game_id], unique: true; 
  end
end
