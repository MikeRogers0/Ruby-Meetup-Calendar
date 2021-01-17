class PostsGenerator::Group::Eventbrite < PostsGenerator::Group
  private

  def events
    @events ||= source_data.collect { |id, event_data|
      Event.new(
        title: event_data["name"],
        datetime: Time.parse(event_data["start_date"] + " " + event_data["start_time"] + " " + event_data["timezone"]),
        url: event_data["url"],
        name: name
      )
    }
  end

  # This is the primary_organizer_id field on Meetup
  def eventbrite_id
    @group["eventbrite_id"]
  end

  def source_data
    @source_data ||= begin
      json = Net::HTTP.get(URI.parse("https://www.eventbrite.com/api/v3/destination/organizers/#{eventbrite_id}/events/?order_by=created_desc"))
      JSON.parse(json)["events"]
    end
  end
end
