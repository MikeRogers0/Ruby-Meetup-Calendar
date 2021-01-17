require "yaml"

class GroupsSorter
  GROUP_FILE_PATH = "src/_data/groups.yml"

  def call
    return unless groups_sorted_yaml.present?

    File.open(GROUP_FILE_PATH, (File::CREAT | File::TRUNC | File::WRONLY)) do |file|
      file.write(groups_sorted_yaml)
    end
  end

  private

  def groups
    @groups ||= YAML.safe_load(File.open(GROUP_FILE_PATH))
  end

  def groups_sorted_yaml
    @groups_sorted_yaml ||= YAML.dump(groups.sort_by { |group| group["name"] }).gsub("\n-", "\n\n-")
  end
end
