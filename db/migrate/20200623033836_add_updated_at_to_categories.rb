class AddUpdatedAtToCategories < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :updated_at, :datetime
  end
end
