class Api::V1::GiftsController < ApplicationController

  # protect_from_forgery unless: -> {request.format.json?}


  # render json: Gifts.find(params[:id])
    def show
      # person_id = params[:id]
      @person = Person.find(params[:id])
      @gifts = @person.gifts
      render json: @gifts

    end

  def index
    # binding.pry
    # person_id = params[:person_id]
    # @person = Person.find(person_id)
    @gifts = Gift.all

    render json: @gifts
  end



  def create
    # binding.pry
    @gift = Gift.new(gift_params)
    # @person = Person.find(gift_params["person_id"])
    # @gift.person = @person
    # @gift.user = current_user
    # @person.gifts << @gift
    # binding.pry
    if @gift.save
      render json: @gift
    else
      render json: @gift.errors.full_messages.join(" . ")
    end
  end

  def destroy
    @gift = Gift.find(params[:id])
    @gift.destroy
    render json: { message: "Review deleted successfully" }
  end

  private

  def gift_params
    params.permit(:gift, :price, :reason, :person_id)
  end

end
