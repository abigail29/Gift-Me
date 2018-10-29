class Registration < ApplicationRecord

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :birthday, presence: true
  validates :username, presence: true

end
