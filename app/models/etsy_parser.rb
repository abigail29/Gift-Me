require 'httparty'

class EtsyParser
  attr_reader :data

  def initialize

  end


  def self.search(query)
    response = HTTParty.get("https://openapi.etsy.com/v2/users/etsystore?api_key=9xlgrevoja6r6rejly5g4nz0")

    # Find URL for searching for items
    # change `response` to aforementioned URL, interpolating `query` into URL
    # Make sure `response` gives you what you want (check in pry)
    # Dance!
    # Then you're ready to start thinking about where and when to pass this to the frontend
  end

end
