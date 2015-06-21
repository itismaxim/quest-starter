class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :session_token, null: false
      t.string :pass_hash, null: false

      t.timestamps null: false
    end

    add_index(:users, :name, unique: true)
    add_index(:users, :session_token, unique: true)
  end
end