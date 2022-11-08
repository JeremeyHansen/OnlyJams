class Group < ApplicationRecord
    has_many :posts
    has_many :subscriptions
    has_many :users, through: :subscriptions
    
end
