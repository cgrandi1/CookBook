class CreateRecipies < ActiveRecord::Migration[5.2]
  def change
    create_table :recipies do |t|
      t.string :name
      t.string :ingredients
      t.integer :cookbook_name_id

      t.timestamps
    end
  end
end
