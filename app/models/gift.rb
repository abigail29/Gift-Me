class Gift < ApplicationRecord

  validates :gift, presence: true
  validates :price, presence: true
  validates :reason, presence: true

  belongs_to :person
  has_many :giftings
end
