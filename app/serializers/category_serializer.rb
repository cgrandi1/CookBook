class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :recipe_id
end
