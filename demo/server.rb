require 'sinatra'
require 'multi_json'
require 'sinatra/json'

fake_db = {
  'name' => 'Aidan Feldman'
}

get '/' do
  @profile = fake_db
  haml :index
end

get '/profile' do
  json fake_db
end

put '/profile' do
  sleep 1
  fake_db.merge!(params)
  json fake_db
end
