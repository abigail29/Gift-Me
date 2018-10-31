class Gift < ApplicationRecord

  validates :name, presence: true
  validates :date, presence: true
  validates :person_id, presence: true

end
