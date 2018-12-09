class AdminsController < ApplicationController
  skip_before_action :authenticate_user
  before_action :authenticate_super_user
  before_action :set_admin, only: [:show, :update, :destroy]

  def index
    json_response(Admin.all)
  end

  def create
    @admin = Admin.create!(admin_params)
    json_response(@admin)
  end

  def show
    json_response(@admin)
  end

  def destroy
    @admin.destroy
    head(:no_content)
  end

  def update
    @admin.update(admin_params)
    head(:no_content)
  end

  private

  def admin_params
    params.require(:admin).permit(:fname, :lname, :email, :password)
  end

  def set_admin
    @admin = Admin.find_by(id: params[:id])
  end
end
