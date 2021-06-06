require "yaml"

module Events
  # This clears all future events, as sometimes they get cancelled / moved.
  class FutureClearer
    EVENTS_PATH = "src/_events/*.md"

    def call
      events.each do |event_path|
        event_data = YAML.safe_load(File.open(event_path))
        File.delete(event_path) if Time.parse(event_data["datetime"]) >= 1.day.from_now
      end
    end

    private

    def events
      @events ||= Dir[EVENTS_PATH]
    end
  end
end
