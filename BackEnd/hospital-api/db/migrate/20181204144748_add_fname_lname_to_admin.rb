class AddFnameLnameToAdmin < ActiveRecord::Migration[5.2]
  def change
    add_column :admins, :fname, :string
    add_column :admins, :lname, :string
  end
end
