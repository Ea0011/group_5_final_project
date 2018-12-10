class Patient < ApplicationRecord
    has_many :appointments
    has_many :doctors, through: :appointments
    has_many :procedures, through: :appointments

    validates :fname, :lname, :age, :gender, :pnumber, presence: true
end
