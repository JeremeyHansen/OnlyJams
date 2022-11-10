class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password, :email, :phone_number, :profile_picture, :birthday, :pronouns, :posts, :messages

  has_many :friends
  has_many :groups
end
