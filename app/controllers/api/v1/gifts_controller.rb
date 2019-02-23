class Api::V1::GiftsController < ApplicationController

  protect_from_forgery unless: -> {request.format.json?}

  def show
    @person = Person.find(params[:id])
    @gifts = @person.gifts
    render json: @gifts
  end

  def index
    @gifts = Gift.all

    render json: @gifts
  end

  def edit
    @gift = Gift.find(params[:id])
  end

  def create
    if Rails.env.test?
      gift = Gift.new(gift: params[:gift], person_id: params[:person_id], price: params[:price], reason: params[:reason], category: params[:category])
    else
      gift = Gift.new(gift_params)
    end

    if gift.save!
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

  private

  def gift_params
    params.permit(:gift, :price, :reason, :person_id, :user_id, :gift_id, :category)
  end

end
