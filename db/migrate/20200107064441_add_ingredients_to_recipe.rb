class AddIngredientsToRecipe < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :ingredients, :string
  end
end