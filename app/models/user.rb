class User < ApplicationRecord
    has_secure_password
    has_many :matches
    has_many :friends, through: :matches
    has_many :messages
    has_many :posts 
    has_many :subscriptions
    has_many :groups, through: :subscriptions
end
