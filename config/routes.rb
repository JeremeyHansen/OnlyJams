Rails.application.routes.draw do
  resources :matches, only: [:create, :destroy, :index, :show]
  resources :messages,  only: [:create, :destroy, :index]
  resources :friends, only: [:create, :destroy]
  resources :posts, only: [:create, :destroy, :index, :update, :show]
  resources :subscriptions
  resources :users, only: [:create, :destroy, :index, :show, :update]
  resources :groups

  post '/login', to: 'sessions#login'
  delete '/logout', to: "sessions#destroy"
  get '/me', to: 'users#show' 

end
