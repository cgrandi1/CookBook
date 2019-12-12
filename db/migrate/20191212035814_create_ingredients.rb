class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :items
      t.string :name
      t.string :recipe_id

      t.timestamps
    end
  end
end
