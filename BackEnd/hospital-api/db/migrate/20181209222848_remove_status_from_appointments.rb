class RemoveStatusFromAppointments < ActiveRecord::Migration[5.2]
  def change
    remove_column :appointments, :status
  end
end
