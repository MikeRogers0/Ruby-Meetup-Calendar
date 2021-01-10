# Ruby Meetups Events Calender

This pulls a list of Ruby Events which are currently happening & displays them on a calender.

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

## TODO (Please help with this!)

### Adding groups

Currently the events are stored in the [`src/_data/groups.yml`](https://github.com/MikeRogers0/Ruby-World/blob/main/src/_data/groups.yml) file. I want to add as many active communities as I can.

### Parsers

Not all groups use the same platform, so I'm writing parsers to collect data from the main platforms.

1. [X] Meetup
2. [X] OnRuby
3. [] EventBrite - I need an API key, but it can be parsed from https://www.eventbriteapi.com/v3/organizations/28936506513/events/ :)

### Localising Event times

Right now I'm using `local_time` to display the times of the events local to the current user, though if something is right on midnight it might display on the wrong day in the calender. I'd love a fix for that.

## Contributing

Bug reports and pull requests are welcome on GitHub at [MikeRogers0/Ruby-World](https://github.com/MikeRogers0/Ruby-World). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Licence

[MIT](https://opensource.org/licenses/MIT)
