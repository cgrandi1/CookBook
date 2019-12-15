class RemoveIngredientId < ActiveRecord::Migration[5.2]
  def change
    remove_column :recipes, :ingredient_id
  end
end
