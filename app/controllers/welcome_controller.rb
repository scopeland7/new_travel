class WelcomeController < ApplicationController
  def index
  	@homeland = "California"

  	@countries = ["Tajikistan", "Lithuania", "Philippines"]

  	@travel_pics = {"Lego ATL" => "lego-atl.jpg", "Midtown" => "midtown-atl.jpg", "Centennial Park" => "atl-centennial.jpg", "Nighty night, ATL" => "atl-at-night.jpg"}
  end

  def about
  	@color = params[:color]
  	@size = params[:size].to_i
  end
end
