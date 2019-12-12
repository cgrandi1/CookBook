class RenameColomn < ActiveRecord::Migration[5.2]
  def change
    rename_column :recipes, :ingredients_id, :ingredient_id
  end
end
