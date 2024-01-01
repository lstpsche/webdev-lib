module Api
  module V1
    module DeviseCustom
      class RegistrationsController < Devise::RegistrationsController
        respond_to :json

        rescue_from Authentication::PasswordNotValid, with: :render_password_not_valid
        rescue_from Authentication::EmailNotUnique, with: :render_email_not_unique

        # rubocop:disable Rails/LexicallyScopedActionFilter
        before_action :check_email_uniqueness!, only: :create
        before_action :verify_password!, only: :update
        # rubocop:enable Rails/LexicallyScopedActionFilter

        private

        def verify_password!
          password = params.dig(:registration, :user, :current_password)
          return true if current_user.valid_password?(password)

          raise Authentication::PasswordNotValid
        end

        def check_email_uniqueness!
          email = params.dig(:registration, :user, :email)
          return true if User.where('lower(email) = ?', email.downcase).blank?

          raise Authentication::EmailNotUnique
        end

        def render_password_not_valid
          render json: { error: I18n.t('errors.password_not_valid') }
        end

        def render_email_not_unique
          render json: { error: I18n.t('errors.email_not_unique') }
        end

        # needed to render json as response
        def respond_with(resource, _opt = {})
          render json: { user: resource.json }.to_json
        end
      end
    end
  end
end
