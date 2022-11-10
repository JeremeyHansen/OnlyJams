Rails.application.routes.draw do
  resources :matches, only: [:create, :destroy, :index, :show]
  resources :messages,  only: [:create, :destroy, :index]
  resources :friends, only: [:create, :destroy]
  resources :posts, only: [:create, :destroy, :index, :update]
  resources :subscriptions
  resources :users
  resources :groups

  post '/login', to: 'sessions#login'
  delete '/logout', to: "sessions#destroy"
  get '/me', to: 'users#show' 

end
