class EtsyController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def search
    topic = params[:topic_query]
    etsy_parser = EtsyParser.new
    etsy_parser.search(topic)
    render json: { data: etsy_parser.data }
  end

end
