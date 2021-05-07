import React from "react"
import { DateTime } from "luxon"
import CalendarEvent from "./calendar-event"


export const CalendarDay = ({ events, day, currentMonth }) => {
  
  function date() {
    return DateTime.fromISO(day)
  }
  
  function dayInCurrentMonth() {
    return date().toFormat('y-MM') == DateTime.fromISO(currentMonth).toFormat('y-MM')
  }
  
  function dayHasPast() {
    return date() < DateTime.local() && !dayIsToday();
  }

  function dayHasEvents() {
    return eventsOnDay().length > 0;
  }

  function dayIsToday() {
    return date().toLocaleString(DateTime.DATE_SHORT) == DateTime.local().toLocaleString(DateTime.DATE_SHORT);
  }

  function eventsOnDay() {
    return events.filter(event => DateTime.fromISO(event.datetime).toLocaleString(DateTime.DATE_SHORT) == date().toLocaleString(DateTime.DATE_SHORT));
  }

  function classNames() {
    const classes = ['calendar-day calendar-day--body']

    if ( dayHasEvents() ) { classes.push('calendar-day--with-events') }
    if ( !dayInCurrentMonth() ) { classes.push('calendar-day--not-in-current-month') }
    if ( dayHasPast() ) { classes.push('calendar-day--past') }
    if ( dayIsToday() ) { classes.push('calendar-day--today') }
    
    return classes.join(' ');
  }

  function renderEvents() {
    return dayHasEvents() ? (
      <ul>
        { eventsOnDay().map((event) => <CalendarEvent key={event.title + event.datetime} event={ event } />) }
      </ul>
    ) : null
  }
  

  return (
    <div className={ classNames() }>
      <div className="calendar-day__date">
        <span className="calendar-day__day_of_week">{ date().toFormat('cccc') }&nbsp;</span>
        { date().toFormat('d') }
      </div>

      { renderEvents() }
    </div>
  );
  
}


export default CalendarDay