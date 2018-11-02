class GiftingsController < ApplicationController

  def index
    @giftings = Giftings.all
  end

  def show
    @gifting = Gifting.find(params[:id])
  end

  def create
    binding.pry

    @gifting = Gifting.new(user_id: current_user.id,
                           person_id: params["gift"]["person_id"]
                           gift_id: params["gift"]["id"],
                           price: params["gift"]["price"],
                           reason: params["gift"]["reason"])

    if @gifting.save
      render json: @gifting
    else
      render json: @gifting.errors.full_messages.join(" . ")
    end
  end

  private

  def gifting_params
    params.require(:gifting).permit(:user_id, :person_id, :gift_id)
  end

end
