class AddCreateAtToRecipe < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :created_at, :datetime
  end
end
