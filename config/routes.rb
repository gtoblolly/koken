Rails.application.routes.draw do
  resources :examples
  devise_for :users
  root to: "tweets#index"
  resources :tweets
  resources :contacts, only: [:new, :create]
end