Rails.application.routes.draw do
  root 'gifts#index'
  devise_for :users

  resources :gifts

  resources :people

  resources :users do
    resources :gifts
    resources :people
    resources :categories
  end

  namespace :api do
    namespace :v1 do
      resources :current_user
      resources :users
      resources :people
      resources :gifts
        resources :categories do
          get 'search', :on => :member
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
