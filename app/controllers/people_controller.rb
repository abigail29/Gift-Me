class PeopleController < ApplicationController
  def index
    @peoples = People.all
  end

  def show
    @people = Person.find(params[:id])
  end

  def new
    render "homes/index"
  end

  def create
    @people = People.new(people_params)

    if @people.save
      flash[:notice] = "Loved One Added Successfuly"

    else
      flash[:notice] = @people.errors.full_messages.join(" . ")
    end
  end

  private

  def people_params
    params.require(:people).permit(:name, :birthday, :description)
  end

end
