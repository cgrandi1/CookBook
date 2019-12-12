class DropRecipiesNow < ActiveRecord::Migration[5.2]
  def change
    drop_table :recipies
  end
end
