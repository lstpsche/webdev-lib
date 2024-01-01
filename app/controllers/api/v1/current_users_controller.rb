module Api
  module V1
    class CurrentUsersController < Api::V1::ApplicationController
      before_action :authenticate_user!, only: :update

      def show
        if current_user.present?
          render json: { signed_in: true, user: current_user.json }, status: :ok
        else
          render json: { signed_in: false }, status: :ok
        end
      end

      def update
        if update_current_user
          bypass_sign_in(current_user)

          render json: { updated: true }, status: :ok
        else
          render json: { updated: false }, status: :unprocessable_entity
        end
      end

      private

      def update_current_user
        if permitted_params[:password].present?
          current_user.update_with_password(permitted_params)
        else
          current_user.update_without_password(
            permitted_params.except(:current_password, :password, :password_confirmation)
          )
        end
      end

      def permitted_params
        params.require(:current_user).permit(:email, :current_password, :password, :password_confirmation).to_h
      end
    end
  end
end
