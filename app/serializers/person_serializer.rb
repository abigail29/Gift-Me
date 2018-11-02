class PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_user_id, :birthday, :description

  def current_user_id
   if scope
     scope.id
   else
     nil
   end
 end
end
