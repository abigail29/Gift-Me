class Api::V1::CategoriesController < ApplicationController

  def index
    @categories = EtsyParser.categories
    category_names = []
    @categories["results"].each do |category|
      category_names << category["name"]
    end

    render json: category_names
  end

  def create
    if Rails.env.test?
      category = Category.new(category: params[:category], gift: params[:gift], person_id: params[:person_id], price: params[:price], reason: params[:reason])
    else
      category = Category.new(category_params)
    end

    if category.save
      render json: category
    else
      render json: category.errors.full_messages
    end
  end

  def search
    @category = EtsyParser.search(params[:id])

    render json: @category
  end

  def category_params
    params.require(:category).permit(:name, :birthday, :description, :category).merge(user_id: current_user.id)
  end
end
