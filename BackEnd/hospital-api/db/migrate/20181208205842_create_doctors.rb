class CreateDoctors < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors do |t|
      t.string :fname
      t.string :lname
      t.string :specialization

      t.timestamps
    end
  end
end
