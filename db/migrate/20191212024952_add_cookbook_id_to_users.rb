class AddCookbookIdToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :cookbook_id, :integer
  end
end
