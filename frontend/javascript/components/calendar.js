import React from "react"
import ReactDOM from "react-dom"
import CalendarDay from "./calendar-day"

class Calendar extends React.Component {
  render() {
    return (
      <div className="calendar-days">{this.listCalendarDays()}</div>
    );
  }

  listCalendarDays() {
    return [this.props.dateRange[1]].map((day) => <CalendarDay key={day} day={ day } events={ this.props.events }/>);
  }
}

class MyCalendar extends HTMLElement {
  connectedCallback() {
    const data = JSON.parse(this.innerText)

    ReactDOM.render(<Calendar
      dateRange={ data['date_range'] }
      events={ data['events'] }
      />, this)
  }
}

window.customElements.define("my-calendar", MyCalendar)
