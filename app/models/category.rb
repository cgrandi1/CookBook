class Category < ApplicationRecord
    has_many :recipes
    has_many :comments, :through => :recipes
    belongs_to :user
end
