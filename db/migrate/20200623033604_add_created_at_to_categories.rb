class AddCreatedAtToCategories < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :created_at, :datetime
  end
end
