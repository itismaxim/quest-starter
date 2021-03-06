Rails.application.routes.draw do
  root to: 'static_pages#root'
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
  namespace :api, defaults: {format: :json} do
    resources :comments
    get 'games/search', to: "games#search"
    resources :games
    resources :updates
    resources :users
    resources :follows
  end
end
