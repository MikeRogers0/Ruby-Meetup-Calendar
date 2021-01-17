class Event
  def initialize(title:, datetime:, url:, name:, online_event: false)
    @title = title
    @datetime = datetime
    @url = url
    @name = name
    @online_event = online_event
  end

  def save
    return unless valid?

    File.open(file_path, (File::CREAT | File::TRUNC | File::WRONLY)) do |file|
      file.write(YAML.dump({
        "layout" => "post",
        "title" => "#{@name} - #{date}",
        "datetime" => @datetime.to_s,
        "name" => @name,
        "external_url" => @url,
        "online_event" => @online_event,
        "year_month" => @datetime.strftime("%Y-%m")
      }))
      file.write("---")
    end
  end

  private

  def valid?
    @datetime >= (Time.now - 1.months) && @datetime <= (Time.now + 3.months)
  end

  def slug
    @name.parameterize
  end

  def date
    @datetime.to_date
  end

  def file_path
    @file_path ||= File.join(File.dirname(__FILE__), "../src/_events/", "#{date}-#{slug}.md")
  end
end
