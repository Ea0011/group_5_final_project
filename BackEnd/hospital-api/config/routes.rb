Rails.application.routes.draw do
  resources :appointments
  resources :procedures
  resources :patients
  resources :doctors
    # resources :admins, only: [:create, :destroy]
    post '/login', to: 'sessions#login'
    delete '/logout', to: 'sessions#logout'
end
