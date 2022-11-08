class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password, :email, :phone_number, :profile_picture, :birthday, :pronouns

  has_many :friends
  has_many :groups
  has_many :messages
  has_many :posts
end
