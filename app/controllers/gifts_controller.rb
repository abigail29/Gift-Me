class GiftsController < ApplicationController
  def index
    @gifts = Gift.all
  end

  def show
    @gift = Gift.find(params[:id])
  end

  def edit
  @gift = Gift.find(params[:id])
  end

  def create
    if Rails.env.test?
      gift = Gift.new(gift: params[:gift], person_id: params[:person_id], price: params[:price], reason: params[:reason])
    else
      gift = Gift.new(gift_params)
    end

    if gift.save
      render json: gift
    else
      render json: gift.errors.full_messages
    end
  end


  def destroy
    @gift = Gift.find(params[:id])
    @gift.destroy
    render json: @gift
  end


  def update
    @gift = Gift.find(params[:id])
    @gift.update(gift_params)
    redirect_to "/people/#{@gift.person.id}"
  end

  private

  def gift_params
    params.require(:gift).permit(:gift, :price, :reason)
  end

end
