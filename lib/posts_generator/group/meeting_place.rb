require "net/http"
require "uri"
require "json"

class PostsGenerator::Group::MeetingPlace < PostsGenerator::Group
  private

  def events
    @events ||= source_data.collect { |event_data|
      Event.new(
        title: event_data["name"],
        datetime: Time.parse(event_data["start_time"]),
        url: event_data["url"],
        online_event: event_data["location"] == "Online Event",
        name: name
      )
    }
  end

  def meeting_place_id
    @group["meeting_place_id"]
  end

  def source_data
    @source_data ||= begin
      json = Net::HTTP.get(URI.parse("https://meetingplace.io/api/v1/group/#{meeting_place_id}/events"))
      JSON.parse(json)
    end
  end
end
