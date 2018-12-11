class ProcedureSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :specialist

  has_many :appointments
end
