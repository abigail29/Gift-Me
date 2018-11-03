Rails.application.routes.draw do
  root 'gifts#index'
  devise_for :users

  resources :gifts

  resources :people

  resources :users do
    resources :gifts
    resources :people, only: [:index, :show, :new]
  end

  namespace :api do
    namespace :v1 do
      resources :current_user
      resources :users
      resources :people
      resources :gifts 
      # resources :giftings
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
