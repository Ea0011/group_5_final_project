class PatientSerializer < ActiveModel::Serializer
  attributes :id, :fname, :lname, :email, :pnumber, :age, :gender
end
