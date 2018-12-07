Rails.application.routes.draw do
    # resources :admins, only: [:create, :destroy]
    post '/login', to: 'sessions#login'
    delete '/logout', to: 'sessions#logout'
end
