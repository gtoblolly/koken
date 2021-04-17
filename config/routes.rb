Rails.application.routes.draw do
  root to: "tweets#index"
  resources :tweets, only: [:index, :new, :show]
  resources :contacts, only: [:index, :create]
end