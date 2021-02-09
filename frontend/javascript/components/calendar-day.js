import React from "react"
import ReactDOM from "react-dom"
import { DateTime } from "luxon"
import CalendarEvent from "./calendar-event"

export default class CalendarDay extends React.Component {
  _date = () => {
    return DateTime.fromISO(this.props.day)
  }

  _dayInCurrentMonth() {
    return this._date().toFormat('y-MM') == DateTime.fromISO(this.props.currentMonth).toFormat('y-MM')
  }

  _dayHasPast() {
    return this._date() < DateTime.local() && !this._dayIsToday();
  }

  _dayHasEvents() {
    return this._eventsOnDay().length > 0;
  }

  _dayIsToday() {
    return this._date().toLocaleString(DateTime.DATE_SHORT) == DateTime.local().toLocaleString(DateTime.DATE_SHORT);
  }

  _eventsOnDay = () => {
    return this.props.events.filter(event => DateTime.fromISO(event.datetime).toLocaleString(DateTime.DATE_SHORT) == this._date().toLocaleString(DateTime.DATE_SHORT));
  }

  _classNames() {
    var classes = ['calendar-day calendar-day--body']

    if ( this._dayHasEvents() ) { classes.push('calendar-day--with-events') }
    if ( !this._dayInCurrentMonth() ) { classes.push('calendar-day--not-in-current-month') }
    if ( this._dayHasPast() ) { classes.push('calendar-day--past') }
    if ( this._dayIsToday() ) { classes.push('calendar-day--today') }
    
    return classes.join(' ');
  }

  _renderEvents() {
    if(!this._dayHasEvents()) { return; }

    return (
      <ul>
        { this._eventsOnDay().map((event) => <CalendarEvent key={event.title + event.datetime} event={ event } />) }
      </ul>
    )
  }


  render() {
    return (
      <div className={ this._classNames() }>
        <div className="calendar-day__date">
          <span className="calendar-day__day_of_week">{ this._date().toFormat('cccc') }&nbsp;</span>
          { this._date().toFormat('d') }
        </div>

        { this._renderEvents() }
      </div>
    );
  }
}
