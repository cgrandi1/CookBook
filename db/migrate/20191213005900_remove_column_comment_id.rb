class RemoveColumnCommentId < ActiveRecord::Migration[5.2]
  def change
    remove_column :recipes, :comment_id
  end
end
