class GiftSerializer < ActiveModel::Serializer
  attributes :id, :gift, :price, :reason, :person_id

  belongs_to :person
end
