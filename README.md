<h1 align="center">
  <a href="https://ruby-meetup-calendar.mikerogers.io/">Ruby Meetups Calendar</a>
</h1>


<p align="center">
  <a target="_blank" href="https://twitter.com/MikeRogers0">
    <img src="https://img.shields.io/twitter/follow/MikeRogers0?label=Follow%20%40MikeRogers0%20For%20Updates&style=social" alt="Follow @MikeRogers on Twitter" style="max-width:100%;">
  </a>
  <a target="_blank" href="https://github.com/MikeRogers0/Ruby-Meetup-Calendar/actions/workflows/lighthouse.yml">
    <img src="https://github.com/MikeRogers0/Ruby-Meetup-Calendar/actions/workflows/lighthouse.yml/badge.svg" alt="Lighthouse CI" style="max-width:100%;">
  </a>
  <a target="_blank" href="https://github.com/MikeRogers0/Ruby-Meetup-Calendar/actions/workflows/standard.yml">
    <img src="https://github.com/MikeRogers0/Ruby-Meetup-Calendar/actions/workflows/standard.yml/badge.svg" alt="Standard">
  </a>
  <a target="_blank" href="https://github.com/MikeRogers0/Ruby-Meetup-Calendar/actions/workflows/pull-latest-events.yml">
    <img src="https://github.com/MikeRogers0/Ruby-Meetup-Calendar/actions/workflows/pull-latest-events.yml/badge.svg" alt="Pull Latest Events">
  </a>
</p>

This pulls a list of Ruby Events which are currently happening & displays them on a calendar.

## How it works

Every few days, a [GitHub Action](https://github.com/MikeRogers0/Ruby-Meetup-Calendar/blob/main/.github/workflows/pull-latest-events.yml) runs the command:

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

Currently the events are stored in the [`src/_data/groups.yml`](https://github.com/MikeRogers0/Ruby-Meetup-Calendar/blob/main/src/_data/groups.yml) file. I want to add as many active communities as I can.

## Contributing

Bug reports and pull requests are welcome on GitHub at [MikeRogers0/Ruby-Meetup-Calendar](https://github.com/MikeRogers0/Ruby-Meetup-Calendar). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Licence

[MIT](https://opensource.org/licenses/MIT)
