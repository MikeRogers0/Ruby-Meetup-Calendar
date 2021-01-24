require "yaml"
require "active_support"
require "active_support/core_ext"
require "./lib/event"

class EventsReformatter
  EVENTS_PATH = "src/_events/*.md"

  def call
    events.each do |event_path|
      event_data = YAML.safe_load(File.open(event_path))
      Event.new(
        title: event_data["title"],
        datetime: Time.parse(event_data["datetime"]),
        url: event_data["external_url"],
        name: event_data["name"],
        online_event: event_data["online_event"]
      ).save
    end
  end

  private

  def events
    @events ||= Dir[EVENTS_PATH]
  end
end
