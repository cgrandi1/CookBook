class ChangeCooktimeToTime < ActiveRecord::Migration[5.2]
  def change
    rename_column :recipes, :cook_time, :time
  end
end
