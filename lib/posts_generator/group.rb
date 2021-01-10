class PostsGenerator::Group
  def initialize(group)
    @group = group
  end

  def call
    events.collect(&:save)
  end

  private

  def name
    @group["name"]
  end
end

require "./lib/posts_generator/group/meetup"
require "./lib/posts_generator/group/eventbrite"
require "./lib/posts_generator/group/on_ruby_feed"
