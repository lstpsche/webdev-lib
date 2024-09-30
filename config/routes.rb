Rails.application.routes.draw do
  root to: 'home#index'

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  devise_for :users, only: %i[sessions registrations],
                     controllers: {
                       registrations: 'api/v1/devise_custom/registrations',
                       sessions: 'api/v1/devise_custom/sessions'
                     },
                     path_names: { sign_in: 'sign_in', sign_up: 'sign_up', sign_out: 'sign_out' }

  namespace :api do
    namespace :v1 do
      resource :current_user, only: %i[show update]
      resources :items, only: %i[index]
    end
  end

  # should always be the LAST
  get '/*path' => 'home#index'
end
