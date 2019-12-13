class DropCookbookNames < ActiveRecord::Migration[5.2]
  def change
    drop_table :cookbook_names
  end
end
