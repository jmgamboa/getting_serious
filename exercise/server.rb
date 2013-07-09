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

get '/complete' do
  @doc = fake_db
  haml :complete
end


get '/doc' do
  sleep 1
  json fake_db
end

put '/doc' do
  # pretend it's taking a long time to save
  sleep 1
  fake_db.merge!(params)
  json fake_db
end
