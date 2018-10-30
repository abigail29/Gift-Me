class GiftsController < ApplicationController
  def index
    @gifts = Gift.all
  end

  def show
    @gift = Gift.find(params[:id])
  end

  private

  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :username, :birthday, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:first_name, :last_name, :username, :birthday, :email, :password, :password_confirmation)
  end
end
