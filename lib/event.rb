class Event
  def initialize(title:, datetime:, url:, name:)
    @title = title
    @datetime = datetime
    @url = url
    @name = name
  end

  def save
    return unless valid?

    File.open(file_path, (File::CREAT|File::TRUNC|File::WRONLY)) do |file|
      file.write(YAML.dump({
        'layout' => 'post',
        'title' => "#{@name} - #{date}",
        'datetime' => @datetime,
        'name' => @name,
        'external_url' => @url
      }) )
      file.write('---')
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
    @file_path ||= File.join(File.dirname(__FILE__), '../src/_posts/', "#{date}-#{slug}.md")
  end
end
