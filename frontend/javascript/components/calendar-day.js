import React from "react"
import ReactDOM from "react-dom"
import { format, parse } from 'date-fns'
import CalendarEvent from "./calendar-event"

export default class CalendarDay extends React.Component {
  _date = () => {
    return parse(this.props.day, 'yyyy-MM-dd', new Date());
  }

  _dayInCurrentMonth() {
    return format(this._date(), 'yyyy-MM') != format(new Date(), 'yyyy-MM')
  }

  _dayHasPast() {
    return this._date() <= new Date()
  }

  _dayHasEvents() {
    return this._eventsOnDay().length > 0;
  }

  _eventsOnDay = () => {
    return this.props.events.filter(event => {
      //var dateTime = parse(event.datetime, 'yyyy-MM-dd hh:mm:ss xx', new Date());
      var dateTime = new Date();
      format(dateTime, 'yyyy-mm') == this._date()
    });
  }

  _classNames() {
    var classes = ['calendar-day md:min-h-28']

    if ( this._dayHasEvents() ) { classes.push('calendar-day--with-events') }
    if ( !this._dayInCurrentMonth() ) { classes.push('calendar-day--not-in-current-month') }
    if ( this._dayHasPast() ) { classes.push('calendar-day--past') }
    
    return classes.join(' ');
  }

  _renderEvents() {
    if(!this._dayHasEvents()) { return; }

    return (
      <ul>
        { this._eventsOnDay.map((event) => <CalendarEvent key={event.title + event.datetime} event={ event } />) }
      </ul>
    )
  }


  render() {
    return (
      <div className={ this._classNames() }>
        <div className="inline-flex w-6 h-6 leading-none">
          <span className="inline-block md:hidden">{ format(this._date(), 'eeee') }&nbsp;</span>
          { format(this._date(), 'dd') }
        </div>

        { this._renderEvents() }
      </div>
    );
  }
}
