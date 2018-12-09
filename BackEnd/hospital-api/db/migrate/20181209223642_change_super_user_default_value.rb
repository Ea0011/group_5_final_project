class ChangeSuperUserDefaultValue < ActiveRecord::Migration[5.2]
  def change
    change_column :admins, :super_user, :boolean, default: false
  end
end
