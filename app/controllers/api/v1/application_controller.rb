module Api
  module V1
    class ApplicationController < ::ApplicationController
      respond_to :json

      before_action :configure_permitted_parameters, if: :devise_controller?

      rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found

      private

      def render_record_not_found
        render json: { error: I18n.t('errors.record_not_found') }, status: :bad_request
      end

      def render_not_permitted
        render json: { error: I18n.t('errors.not_permitted') }, status: :bad_request
      end

      def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: %i[email password password_confirmation remember_me])
        devise_parameter_sanitizer.permit(:sign_in, keys: %i[email password remember_me])
        devise_parameter_sanitizer.permit(
          :account_update,
          keys: %i[first_name last_name email password password_confirmation]
        )
      end
    end
  end
end
