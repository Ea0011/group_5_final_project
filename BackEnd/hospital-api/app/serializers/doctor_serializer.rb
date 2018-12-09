class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :fname, :lname, :specialization
end
