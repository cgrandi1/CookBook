class Ingredient < ApplicationRecord
    belongs_to :recipe
    belongs_to :user
    belongs_to :category
end
