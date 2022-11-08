class PostSerializer < ActiveModel::Serializer
  attributes :id, :post, :saves, :comments, :likes
  has_one :user
  has_one :group
end
