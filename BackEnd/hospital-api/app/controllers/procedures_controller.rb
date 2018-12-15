class ProceduresController < ApplicationController
  before_action :set_procedure, only: [:show, :update, :destroy]

  
  def index
    @procedures = Procedure.all

    render json: @procedures
  end

  
  def show
    render json: @procedure
  end

  
  def create
    @procedure = Procedure.new(procedure_params)

    if @procedure.save
      render json: @procedure, status: :created, location: @procedure
    else
      render json: @procedure.errors, status: :unprocessable_entity
    end
  end

  
  def update
    if @procedure.update(procedure_params)
      render json: @procedure
    else
      render json: @procedure.errors, status: :unprocessable_entity
    end
  end

  
  def destroy
    @procedure.destroy
  end

  private
    
    def set_procedure
      @procedure = Procedure.find(params[:id])
    end

    
    def procedure_params
      params.permit(:name, :duration, :specialist)
    end
end
