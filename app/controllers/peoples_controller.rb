class PeoplesController < ApplicationController
  def index
    @peoples = People.all
  end

  def show
    @people = People.find(params[:id])
  end

  def new
    @people = People.new
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
    params.require(:people).permit(:name, :birthday, :interest)
  end 

end
