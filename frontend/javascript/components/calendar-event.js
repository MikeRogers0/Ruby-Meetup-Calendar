import React from "react"
import ReactDOM from "react-dom"
import { DateTime } from "luxon"

export default class CalendarEvent extends React.Component {
  _formatted_datetime() {
    DateTime.fromISO(this.props.event.datetime).toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)
  }

  render() {
    return (
      <li className="calendar-events__item">
        <a href={ this.props.event.external_url } target="_blank">
          { this.props.event.name }
          <span> - </span>
          <time
            data-format="%l:%M%P"
            data-local="time"
            datetime={ this.props.event.datetime }
          >{ this.props.event.datetime }</time>
        </a>
      </li>
    );
  }
}
