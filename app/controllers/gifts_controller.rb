class GiftsController < ApplicationController
  def index
    @gifts = Gift.all
  end

  def show
    @gift = Gift.find(params[:id])
  end
  def create
    @gifts = Gift.new(gift_params)

    if @gift.save
      render json: @gift
    else
      render json: @gift.errors.full_messages.join(" . ")
    end
  end

  private

  def gift_params
    params.require(:gift).permit(:gift, :price, :reason)
  end

end
