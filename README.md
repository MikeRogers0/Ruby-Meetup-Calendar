<div align="center">

# [Ruby Meetups Calendar](https://ruby-meetup-calendar.mikerogers.io/)

</div>

This pulls a list of Ruby Events which are currently happening & displays them on a calendar.

## How it works

Every few days, a [GitHub Action](https://github.com/MikeRogers0/Ruby-World/blob/main/.github/workflows/pull-latest-events.yml) runs the command:

```bash
$ bundle exec rake update_data:all
```

This opens the RSS/JSON feeds for known events, and adds them to the site as posts.

## Running locally

The project is build on top of [Bridgetown](https://www.bridgetownrb.com/). Clone down the repo & run:

```bash
$ bundle && yarn
$ yarn start
```

## TODO (Please open PRs if you'd like to help with this)

### Adding groups

Currently the events are stored in the [`src/_data/groups.yml`](https://github.com/MikeRogers0/Ruby-World/blob/main/src/_data/groups.yml) file. I want to add as many active communities as I can.

## Contributing

Bug reports and pull requests are welcome on GitHub at [MikeRogers0/Ruby-World](https://github.com/MikeRogers0/Ruby-World). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Licence

[MIT](https://opensource.org/licenses/MIT)
