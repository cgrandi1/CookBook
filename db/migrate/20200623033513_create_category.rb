class CreateCategory < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.integer :recipe_id
      t.string :name
    end
  end
end
