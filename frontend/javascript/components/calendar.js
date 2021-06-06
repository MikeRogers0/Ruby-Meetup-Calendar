import React from "react"
import ReactDOM from "react-dom"
import CalendarDay from "./calendar/day"
import useOnlineEventsOnlyState from "persisted-states/online-events-only";

const ReactCalendarDays = ({dateRange, currentMonth, events}) => {
  const [onlineEventsOnly, setOnlineEventsOnly] = useOnlineEventsOnlyState();

  function filteredEvents() {
    return events.filter(event => (onlineEventsOnly !== true || onlineEventsOnly && event.online_event));
  }

  function listCalendarDays() {
    return dateRange.map((day) => (
      <CalendarDay
        key={ day }
        day={ day }
        currentMonth={ currentMonth }
        events={ filteredEvents() } />
      )
    );
  }

  return (
    <div className="calendar-days">{listCalendarDays()}</div>
  );
}


class CalendarDays extends HTMLElement {
  connectedCallback() {
    if (this.querySelector('[type="application/json"]') === null ) { return; }

    const data = JSON.parse(this.querySelector('[type="application/json"]').innerHTML)

    ReactDOM.render(<ReactCalendarDays
      dateRange={ data['date_range'] }
      currentMonth={ data['current_month'] }
      events={ data['events'] }
      />, this)
  }
}

window.customElements.define("calendar-days", CalendarDays)
