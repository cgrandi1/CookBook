class RemoveColumnCategoryId < ActiveRecord::Migration[5.2]
  def change
    remove_column :recipes, :category_id
  end
end
