class Doctor < ApplicationRecord
    has_many :appointments
    has_many :procedures, through: :appointments
    has_many :patients, through: :appointments

    validates :fname, :lname, :specialization, presence: true
end
