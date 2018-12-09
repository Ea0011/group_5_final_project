class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date
  has_one :doctor
  has_one :patient
  has_one :procedure
end
