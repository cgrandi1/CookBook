class AddCommentsToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :comment_id, :integer
  end
end
