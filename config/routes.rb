Rails.application.routes.draw do
  devise_for :users
  root to: "tweets#index"
  resources :tweets
  resources :contacts, only: [:new, :create]
end