Rails.application.routes.draw do
  root 'gifts#index'
  devise_for :users

  resources :gifts

  resources :users do
    resources :gifts
    resources :people, only: [:index, :show, :new]
  end

  namespace :api do
    namespace :v1 do
      resources :current_user
      resources :people 
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
