Rails.application.routes.draw do
  root to: "tweets#index"
  resources :tweets
  resources :contacts, only: [:index, :create]
end