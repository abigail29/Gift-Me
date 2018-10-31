class Relationship < ApplicationRecord
  validates :firstName, presence: true
  validates :lastName, presence: true

  has_many :gifts

end
