task :environment do
  require "rubygems"
  require "bundler"
  require "bundler/setup"

  require "active_support"
  require "active_support/core_ext"

  require "dotenv/load"

  require "./lib/event"
  require "./lib/groups_sorter"
  require "./lib/posts_generator"
end

namespace :update_data do
  desc "Updates the current know events & converts them into posts"
  task all: :environment do
    PostsGenerator.new.call
  end

  desc "Sorts the src/_data/groups.yml file by group name"
  task sort: :environment do
    GroupsSorter.new.call
  end
end
