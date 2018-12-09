class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.date :start_date
      t.date :end_date
      t.string :status
      t.references :doctor, foreign_key: true
      t.references :patient, foreign_key: true
      t.references :procedure, foreign_key: true

      t.timestamps
    end
  end
end
