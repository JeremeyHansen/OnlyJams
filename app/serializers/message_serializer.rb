class MessageSerializer < ActiveModel::Serializer
  attributes :id, :message, :friend
  has_one :user
  has_one :friend
end
