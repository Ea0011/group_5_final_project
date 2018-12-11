class ChangePnumberToBeStringInPatients < ActiveRecord::Migration[5.2]
  def change
    change_column :patients, :pnumber, :string
  end
end
