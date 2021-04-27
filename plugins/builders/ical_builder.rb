require "icalendar"

class IcalBuilder < SiteBuilder
  def build
    hook :site, :post_write do
      generate(site)
    end
  end

  private

  # Main plugin action, called by Bridgetown-core
  def generate(site)
    @site = site
    return if file_exists?(file_path)
    make_ical_file
  end

  def make_ical_file
    File.write(file_path, ical_output)
  end

  def file_path
    File.join(site.dest, "ical.ical")
  end

  # Checks if a file already exists in the site source
  def file_exists?(file_path)
    File.exist? @site.in_source_dir(file_path)
  end

  def ical_output
    cal = Icalendar::Calendar.new
    cal.prodid = "-//Ruby Meetup Calendar//Calendar 1.0//EN"
    cal.append_custom_property("X-WR-CALNAME", "Ruby Meetup Calendar")
    cal.append_custom_property("X-WR-TIMEZONE", "Etc/UTC")
    cal.append_custom_property("X-PUBLISHED-TTL", "PT24H")
    cal.append_custom_property("X-WR-CALDESC", "Find Ruby Meetup Events")

    @site.collections.events.docs.each do |event|
      ical_event = Icalendar::Event.new
      ical_event.uid = event.url
      ical_event.dtstart = Icalendar::Values::DateTime.new(event[:datetime].to_datetime.utc, tzid: "UTC")
      ical_event.summary = event[:title]
      ical_event.description = event[:external_url]
      ical_event.url = event[:external_url]
      ical_event.status = "CONFIRMED"
      ical_event.transp = "OPAQUE"
      ical_event.sequence = 0
      cal.add_event(ical_event)
    end

    cal.publish
    cal.to_ical
  end
end
