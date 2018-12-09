class ChangeStartDateToBeDatetimeInAppointments < ActiveRecord::Migration[5.2]
  def change
    change_column :appointments, :start_date, :datetime
  end
end
