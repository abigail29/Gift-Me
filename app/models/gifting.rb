class Gifting < ApplicationRecord
  belongs_to :user
  belongs_to :person
  belongs_to :gift
end
