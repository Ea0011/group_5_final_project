class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient
  belongs_to :procedure


  validates_associated :doctor, :patient, :procedure
  validate :check_availabilty, :check_hours

  def specialization
    self.doctor.specialization
  end

  def check_availabilty
    res = Appointment.where("doctor_id = ? AND start_date <= ? AND end_date >= ?", doctor_id, end_date, start_date)
    if res.first != nil
      errors.add(:start_date, "Cannot overlap")
    end
  end 

  def check_hours
    errors.add(:start_date, "Cannot be earlier than 9 AM") if start_date.strftime("%H").to_i < 5
    errors.add(:end_date, "Cannot be later than 6 PM") if end_date.strftime("%H").to_i >= 22
  end

  def self.time_zone_aware_attributes
    false
  end

end
