Rails.application.routes.draw do
  resources :matches
  resources :messages
  resources :friends
  resources :posts
  resources :subscriptions
  resources :users
  resources :groups

  post '/login', to: 'sessions#login'
  delete '/logout', to: "sessions#destroy"
  get '/me', to: 'users#show'

end
