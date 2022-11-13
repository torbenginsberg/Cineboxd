Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do # renders JSON formatted responses by default
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :films, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
    resources :likes, only: [:create, :index, :destroy]
    resources :logs, only: [:create, :index, :destroy]
    resources :reviews, only: [:create, :update, :show, :destroy]
  end

  root to: "static_pages#root"
end
