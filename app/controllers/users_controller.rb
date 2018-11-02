class UsersController < ApplicationController

  before_action :authenticate_user!

  def index
  end

  def show
    render "homes/index"
  end

  private

    def sign_up_params
      params.require(:user).permit(:first_name, :last_name, :username, :birthday, :email, :password, :password_confirmation)
    end

    def account_update_params
      params.require(:user).permit(:first_name, :last_name, :username, :birthday, :email, :password, :password_confirmation)
    end


end
