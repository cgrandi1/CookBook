class Recipe < ApplicationRecord
    has_many :ingredients
    has_many :comments
    belongs_to :categories
    has_many :users
end
