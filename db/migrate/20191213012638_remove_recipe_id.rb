class RemoveRecipeId < ActiveRecord::Migration[5.2]
  def change
    remove_column :categories, :recipe_id
  end
end
