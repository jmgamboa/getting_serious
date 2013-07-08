require 'sinatra'
require 'multi_json'
require 'sinatra/json'

fake_db = {
  'title' => 'The Title',
  'body' => 'The body.'
}

get '/' do
  @doc = fake_db
  haml :index
end

get '/doc' do
  json fake_db
end

put '/doc' do
  sleep 1
  fake_db.merge!(params)
  json fake_db
end
