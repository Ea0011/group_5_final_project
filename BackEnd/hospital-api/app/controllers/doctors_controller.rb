class DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show, :update, :destroy]

  
  def index
    @doctors = Doctor.all

    render json: @doctors
  end

  
  def show
    render json: @doctor
  end

  
  def create
    @doctor = Doctor.new(doctor_params)

    if @doctor.save
      render json: @doctor, status: :created, location: @doctor
    else
      render json: @doctor.errors, status: :unprocessable_entity
    end
  end

  
  def update
    if @doctor.update(doctor_params)
      render json: @doctor
    else
      render json: @doctor.errors, status: :unprocessable_entity
    end
  end

  
  def destroy
    @doctor.destroy
  end

  private
    
    def set_doctor
      @doctor = Doctor.find(params[:id])
    end

    
    def doctor_params
      params.require(:doctor).permit(:fname, :lname, :specialization)
    end
end
