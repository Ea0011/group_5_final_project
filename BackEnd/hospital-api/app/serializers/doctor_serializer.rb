class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :fname, :lname, :specialization

  has_many :appointments
end
