class PostSerializer < ActiveModel::Serializer
  attributes :id, :post, :saves, :comments, :likes, :created_at, :group, :user
  has_one :user
  has_one :group
end
