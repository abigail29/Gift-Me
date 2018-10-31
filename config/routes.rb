Rails.application.routes.draw do
  root 'gifts#index'
  devise_for :users

  resources :gifts

  resources :users do
    resources :peoples
  end


  namespace :api do
    namespace :v1 do
      resources :current_user
      resources :peoples
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
