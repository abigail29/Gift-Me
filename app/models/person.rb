class Person < ApplicationRecord

  validates :name, presence: true
  validates :birthday, presence: true

  belongs_to :user

end
