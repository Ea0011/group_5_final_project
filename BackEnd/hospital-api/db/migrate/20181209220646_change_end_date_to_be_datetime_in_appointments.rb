class ChangeEndDateToBeDatetimeInAppointments < ActiveRecord::Migration[5.2]
  def change
    change_column :appointments, :end_date, :datetime
  end
end
