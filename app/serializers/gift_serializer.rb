class GiftSerializer < ActiveModel::Serializer

  #fetching from api v1 this tells controllers what to give to front end 
  attributes :id, :gift, :price, :reason, :person_id, :category

  belongs_to :person
end
