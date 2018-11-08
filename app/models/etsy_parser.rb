require 'httparty'
require 'etsy'


class EtsyParser
  attr_reader :data

  def initialize
  end


  def self.search(query)

    # response = HTTParty.get("https://openapi.etsy.com/v2/users/etsystore?api_key=9xlgrevoja6r6rejly5g4nz0")
    # response = HTTParty.get("https://openapi.etsy.com/v2/users/etsystore?api_key=#{ENV["ETSY_KEY"]}&topic=mats")
    # response = HTTParty.get("https://openapi.etsy.com/v2/users/etsystore?api_key=#{ENV["ETSY_KEY"]}&topic=#{query}")
    # response = HTTParty.get("https://openapi.etsy.com/v2/users/etsystore?api_key=#{ENV["ETSY_KEY"]}")
    # response = HTTParty.get("https://openapi.etsy.com/v2/taxonomy/categories/#{query}/?api_key=#{ENV["ETSY_KEY"]}")
    response = HTTParty.get("https://openapi.etsy.com/v2/taxonomy/categories/#{query}?api_key=#{ENV["ETSY_API"]}")


    # etsy_data = response["result"][0]
    # new_hash = {
    #   link: etsy_data["link"]
    # }
    result_arr = []
    response["results"].each do |result|
      result_arr << result
    end
    etsy_data = {
    count: response["count"],
    results: result_arr
    }
    @data = []
    @data << etsy_data
  end

   def self.categories
     response = HTTParty.get("https://openapi.etsy.com/v2/taxonomy/categories/?api_key=#{ENV["ETSY_API"]}")
     response
   end
end
