# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151112034020) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "game_id",     null: false
    t.integer  "user_id",     null: false
    t.string   "poster_name", null: false
    t.text     "text",        null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "comments", ["game_id"], name: "index_comments_on_game_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "follows", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "game_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "follows", ["game_id"], name: "index_follows_on_game_id", using: :btree
  add_index "follows", ["user_id", "game_id"], name: "index_follows_on_user_id_and_game_id", unique: true, using: :btree
  add_index "follows", ["user_id"], name: "index_follows_on_user_id", using: :btree

  create_table "games", force: :cascade do |t|
    t.integer  "author_id",                                                                                                                                                                                                                                  null: false
    t.string   "author_name",                                                                                                                                                                                                                                null: false
    t.string   "title",       default: "My Cool Game",                                                                                                                                                                                                       null: false
    t.string   "summary",     default: "Summarize your game here. Make is short but sweet!",                                                                                                                                                                 null: false
    t.text     "description", default: "Describe your game here. This is where you can get in depth and describe what system you want to run, what the setting will be, and what kind of characters the players will have. Feel free to add anything else!", null: false
    t.string   "image_url",   default: "http://res.cloudinary.com/dar1oti2e/image/upload/w_700,h_500,c_fill/v1447300087/kpzpw79z8k4lq6e7a52o.jpg",                                                                                                           null: false
    t.boolean  "active",      default: false,                                                                                                                                                                                                                null: false
    t.datetime "created_at",                                                                                                                                                                                                                                 null: false
    t.datetime "updated_at",                                                                                                                                                                                                                                 null: false
  end

  add_index "games", ["author_id"], name: "index_games_on_author_id", using: :btree
  add_index "games", ["title"], name: "index_games_on_title", using: :btree

  create_table "updates", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "game_id",    null: false
    t.string   "title",      null: false
    t.text     "text",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "updates", ["game_id"], name: "index_updates_on_game_id", using: :btree
  add_index "updates", ["user_id"], name: "index_updates_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name",          null: false
    t.string   "session_token", null: false
    t.string   "pass_hash",     null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "users", ["name"], name: "index_users_on_name", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
