class Api::V1::GiftingsController < ApplicationController

  protect_from_forgery unless: -> {request.format.json?}

  def index
    @giftings = Gifting.all
    render json: @giftings
  end

  def show
    @gifting = Gifting.find(params[:id])
    render json: @gifting
    # render json: Gifts.find(params[:id])
  end

  def create
    binding.pry
    giftObject = Gift.find_by(gift: params["gift"])
    @gift = params["gift"]
    @gifting = Gifting.new(user_id: current_user.id,
                           person_id: giftObject.person_id,
                           gift_id: giftObject.id,
                           price: params["gift"]["price"],
                           reason: params["gift"]["reason"])
    if @gifting.save!
      render json: @gifting
    else
      render json: @gifting.errors.full_messages.join(" . ")
    end
  end

  private

  def gifting_params
    params.require(:gifting).permit(:gift, :price, :reason, :user_id, :person_id, :gift_id)
  end

end
