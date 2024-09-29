module Api
  module V1
    class ItemsController < Api::V1::ApplicationController
      def index
        render json: { items: Item.all.map(&:json) }, status: :ok
      end
    end
  end
end
