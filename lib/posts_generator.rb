require "yaml"

class PostsGenerator
  def call
    groups.select { |group| group["source"].present? }.each do |group|
      Group.const_get(group["source"]).new(group).call
    end
  end

  private

  def groups
    @groups ||= YAML.safe_load(File.open("src/_data/groups.yml"))
  end
end

require "./lib/posts_generator/group"
