require 'httparty'
require 'etsy'


class EtsyParser
  attr_reader :data

  def initialize
  end

# go to httparty to retrieve info from etsy api - the categories
  def self.search(query)
    response = HTTParty.get("https://openapi.etsy.com/v2/taxonomy/categories/#{query}?api_key=#{ENV["ETSY_API"]}")

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
