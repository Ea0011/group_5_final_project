class PatientSerializer < ActiveModel::Serializer
  attributes :id, :fname, :lname, :email, :pnumber, :age, :gender

  has_many :appointments
end
