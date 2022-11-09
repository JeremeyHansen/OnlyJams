class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :genre, :profile_picture, :posts

  has_many :posts
end
