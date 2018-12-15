Rails.application.routes.draw do
  resources :appointments
  resources :procedures
  resources :patients
  resources :doctors
  resources :admins
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/current', to: 'sessions#current'
end
