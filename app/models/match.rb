class Match < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: "User", dependent: :destroy
end
