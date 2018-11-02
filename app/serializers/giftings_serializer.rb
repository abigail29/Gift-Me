class GiftingsSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :person_id, :gift_id, :price, :reason

  belongs_to :person
  belongs_to :user
  belongs_to :gift
end
