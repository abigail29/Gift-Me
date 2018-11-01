class Gift < ApplicationRecord

  validates :name, presence: true
  validates :price, presence: true

  belongs_to :person
end
