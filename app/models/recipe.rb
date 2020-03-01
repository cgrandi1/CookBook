class Recipe < ApplicationRecord
    # has_many :ingredients
    # has_many :comments
    belongs_to :categories
    # belongs_to :users
end
