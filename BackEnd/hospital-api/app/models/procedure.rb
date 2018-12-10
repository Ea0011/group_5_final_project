class Procedure < ApplicationRecord
    has_many :appointments
    has_many :doctors, through: :appointments
    has_many :patients, through: :appointments

    validates :name, :specialist, :duration, presence: true
end
