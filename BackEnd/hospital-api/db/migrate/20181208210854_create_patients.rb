class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :fname
      t.string :lname
      t.string :email
      t.integer :pnumber
      t.integer :age
      t.string :gender

      t.timestamps
    end
  end
end
