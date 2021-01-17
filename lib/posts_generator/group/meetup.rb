require "net/http"
require "uri"
require "json"

class PostsGenerator::Group::Meetup < PostsGenerator::Group
  private

  def events
    @events ||= source_data.collect { |event_data|
      Event.new(
        title: event_data["title"],
        datetime: Time.parse(event_data["servertime"]),
        url: event_data["event_url"],
        online_event: event_data["venue_name"] == "Online event",
        name: name
      )
    }
  end

  def meetup_id
    @group["meetup_id"]
  end

  def source_data
    @source_data ||= begin
      json = Net::HTTP.get(URI.parse("https://www.meetup.com/#{meetup_id}/events/json/"))
      JSON.parse(json)
    end
  end
end
