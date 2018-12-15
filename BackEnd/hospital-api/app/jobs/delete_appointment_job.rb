class DeleteAppointmentJob < ApplicationJob
  def perform(app_id)
    if Appointment.find_by(id: app_id)
      Appointment.find_by(id: app_id).destroy
    end
  end
end