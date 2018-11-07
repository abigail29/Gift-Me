class GiftSerializer < ActiveModel::Serializer
  attributes :id, :gift, :price, :reason, :person_id, :category

  belongs_to :person
end
