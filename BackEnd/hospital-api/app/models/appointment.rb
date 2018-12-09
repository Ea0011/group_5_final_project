class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient
  belongs_to :procedure

  def specialization
    self.doctor.specialization
  end
end
