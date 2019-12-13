class User < ApplicationRecord
    has_many :cateogires
    has_many :recipes
    has_many :cateogires, :through => :recipes
    has_many :comments, :through => :recipes

    has_secure_password 

    validates :first_name, :last_name, presence: true

    validates :username, uniqueness: true


end
