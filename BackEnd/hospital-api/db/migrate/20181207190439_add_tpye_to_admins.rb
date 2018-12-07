class AddTpyeToAdmins < ActiveRecord::Migration[5.2]
  def change
    add_column :admins, :super_user, :boolean, default: true
  end
end
