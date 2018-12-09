class CreateProcedures < ActiveRecord::Migration[5.2]
  def change
    create_table :procedures do |t|
      t.string :name
      t.integer :duration
      t.string :specialist

      t.timestamps
    end
  end
end
