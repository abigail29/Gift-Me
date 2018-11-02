class ApplicationController < ActionController::Base
      # Prevent CSRF attacks by raising an exception.
      # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  # before_action :set_time_zone, if: :user_signed_in?
  #
  #   private
  #     def set_time_zone
  #       Time.zone = current_user.time_zone
  #     end

  protect_from_forgery unless: -> {request.format.json?}

  # before_action :authenticate_user!

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:profile_photo])
  end

      def after_sign_in_path_for(resource)
        user_path(resource)
      end
end
