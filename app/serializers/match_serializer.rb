class MatchSerializer < ActiveModel::Serializer
  attributes :id, :user, :friend
  has_one :user
  has_one :friend
end
