class Api::V1::GiftsController < ApplicationController

  protect_from_forgery unless: -> {request.format.json?}

  def index
    @gifts = Gift.all
    render json: @gifts
  end

  def show
    render json: @gift
    # render json: Gifts.find(params[:id])
  end

  def create
    @gift = Gift.new(gift_params)
    @person = Person.find(gift_params["person_id"])
    @gift.person = @person
    @gift.user = current_user
    @person.gifts << @gift

    if @gift.save
      render json: @gift
    else
      render json: @gift.errors.full_messages.join(" . ")
    end
  end

  private

  def gift_params
    params.require(:gift).permit(:gift, :price, :reason, :person_id)
  end

end
