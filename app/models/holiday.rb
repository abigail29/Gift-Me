class Holiday < ApplicationRecord

#when you create a model you need to validate that the model has correct parameters 
  validates :chrstimas, presence: true
  validates :valentines, presence: true
  validates :new_years, presence: true
  validates :mothers_day, presence: true
  validates :fathers_day, presence: true
  validates :easter, presence: true
  validates :hanukkah, presence: true

end
