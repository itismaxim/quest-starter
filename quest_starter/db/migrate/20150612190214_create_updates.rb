class CreateUpdates < ActiveRecord::Migration
  def change
    create_table :updates do |t|
      t.integer :game_id, null: false, index:true
      t.string :title, null: false
      t.text :text, null: false

      t.timestamps null: false
    end
  end
end
