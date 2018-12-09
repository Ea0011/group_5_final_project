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

ActiveRecord::Schema.define(version: 2018_12_09_222848) do

  create_table "admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fname"
    t.string "lname"
    t.string "authentication_token", limit: 30
    t.boolean "super_user", default: true
    t.index ["authentication_token"], name: "index_admins_on_authentication_token", unique: true
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "appointments", force: :cascade do |t|
    t.datetime "start_date"
    t.datetime "end_date"
    t.integer "doctor_id"
    t.integer "patient_id"
    t.integer "procedure_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["doctor_id"], name: "index_appointments_on_doctor_id"
    t.index ["patient_id"], name: "index_appointments_on_patient_id"
    t.index ["procedure_id"], name: "index_appointments_on_procedure_id"
  end

  create_table "doctors", force: :cascade do |t|
    t.string "fname"
    t.string "lname"
    t.string "specialization"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "patients", force: :cascade do |t|
    t.string "fname"
    t.string "lname"
    t.string "email"
    t.integer "pnumber"
    t.integer "age"
    t.string "gender"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "procedures", force: :cascade do |t|
    t.string "name"
    t.integer "duration"
    t.string "specialist"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
