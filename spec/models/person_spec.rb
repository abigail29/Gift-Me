# require 'rails_helper'
#
# RSpec.describe Person, type: :model do
#   amelia_person = Person.new( name: 'Amelia', birthday: '1997-07-07', description: 'loves dogs', id: 1, user_id: 1)
#   no_name = Person.new( birthday: '1997-07-07', description: 'loves dogs', id: 1, user_id: 1 )
#   no_birthday = Person.new( name: 'Amelia', description: 'loves dogs', id: 1, user_id: 1 )
#   no_description = Person.new( name: 'Amelia', birthday: '1997-07-07', id: 1, user_id: 1 )
#   no_id = Person.new(name: 'Amelia', birthday: '1997-07-07', description: 'loves dogs', user_id: 1)
#   no_user_id = Person.new(name: 'Amelia', birthday: '1997-07-07', description: 'loves dogs', id: 1)
#
#   it "Is valid with attributes" do
#     expect(amelia_person).to be_valid
#   end
#
#   it "Is not valid without attributes" do
#     expect(no_name).to_not be_valid
#     expect(no_birthday).to_not be_valid
#     expect(no_description).to_not be_valid
#     expect(no_id).to_not be_valid
#     expect(no_user_id).to_not be_valid
#   end
# end
