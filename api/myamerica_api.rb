require 'sinatra'
require 'mongoid'
Mongoid.load!("/Users/rezadehganpour/mongoid.yml", :development)



class Place
	attr_reader :type, :id

	def initialize(t,i)
		@type, @id = t ,i
	end


	def mongoize
		[type, id]
	end
		
	class << self

	def demongoize(object)
      	Place.new(object[0], object[1])
    end

    def mongoize(object)
      	case object
      		when Place then object.mongoize
      		when Hash then Place.new(object[:type], object[:id]).mongoize
      		else object
      	end
    end

    def evolve(object)
      	case object
      		when Place then object.mongoize
      		else object
     	end
    end
	end
end

class Citizen

	include Mongoid::Document
	field :name, type: String
	field :interests, type: Array
	field :saved_places, type: Place
	#field :age , type: Integer
	#field :length, type: String
	#field :lat , type: Integer
	#field :lng , type: Integer
end


get '/user' do
	name = params[:name]
	interest = params[:interests]
	type = params[:type]
	id = params[:id]
	age = params[:age]
	length = params[:length]
	lat = params[:lat]
	lng = params[:lng]
	puts "yellow"
	p = Place.new(type,id)
	c = Citizen.new({name: name, interests: ["d","e"], saved_places: p})
	c.save
end