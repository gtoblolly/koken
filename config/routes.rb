Rails.application.routes.draw do
  root to: "tweets#index"
  resources :tweets, only: :index
  resources :contacts, only: [:index, :new]
end  