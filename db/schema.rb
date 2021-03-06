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

ActiveRecord::Schema.define(version: 2018_11_06_210718) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "gifts", force: :cascade do |t|
    t.string "gift", null: false
    t.string "price", null: false
    t.string "reason", null: false
    t.bigint "person_id"
    t.integer "user_id"
    t.string "category"
    t.index ["person_id"], name: "index_gifts_on_person_id"
  end

  create_table "holidays", force: :cascade do |t|
    t.string "christmas", null: false
    t.string "valentines", null: false
    t.string "easter", null: false
    t.string "new_years", null: false
    t.string "hanukkah", null: false
    t.string "mothers_day", null: false
    t.string "fathers_day", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lovedones", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "person_id", null: false
    t.index ["person_id"], name: "index_lovedones_on_person_id"
    t.index ["user_id"], name: "index_lovedones_on_user_id"
  end

  create_table "people", force: :cascade do |t|
    t.string "name", null: false
    t.string "birthday", null: false
    t.string "description"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_people_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_photo"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
