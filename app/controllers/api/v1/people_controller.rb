class Api::V1::PeopleController < ApplicationController

  protect_from_forgery unless: -> {request.format.json?}

  def index

    @people = Person.all
    render json: @people
  end

  def show
    render json: Person.find(params[:id])
  end

  def create
    puts person_params
    @person = Person.new(person_params)

    if @person.save
      render json: @person
    else
      render json: @person.errors.full_messages.join(" . ")
    end
  end

  def delete
    binding.pry
  end

  private

  def person_params
    params.require(:person).permit(:name, :birthday, :description).merge(user_id: current_user.id)
  end
end
