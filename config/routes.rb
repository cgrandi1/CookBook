Rails.application.routes.draw do
  root 'session#new'

  resources :users
  resources :categories
  resources :recipes

  get '/signin' => 'sessions#new'
  post '/signin' => 'sessions#create'
  post '/logout' => 'sessions#destroy' 

  resources :users do
    resources :categories do
      resources :recipes
    end 
  end 



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
