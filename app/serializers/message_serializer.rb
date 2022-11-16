class MessageSerializer < ActiveModel::Serializer
  attributes :id, :message, :friend, :user
  has_one :user
end
