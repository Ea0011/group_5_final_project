class Patient < ApplicationRecord
    has_many :appointments, dependent: :destroy
    has_many :doctors, through: :appointments
    has_many :procedures, through: :appointments

    validates :fname, :lname, :age, :gender, :pnumber, presence: true
end
