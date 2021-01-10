require "net/http"
require "uri"
require "json"

class PostsGenerator::Group::OnRubyFeed < PostsGenerator::Group
  private

  def events
    @events ||= source_data.collect { |event_data|
      Event.new(
        title: event_data["name"],
        datetime: Time.parse(event_data["date"]),
        url: "#{@group["url"]}events/#{event_data["name"].parameterize}-#{event_data["id"]}",
        name: name
      )
    }
  end

  def source_data
    @source_data ||= begin
      json = Net::HTTP.get(URI.parse((@group["feed_url"]).to_s))
      JSON.parse(json)
    end
  end
end
