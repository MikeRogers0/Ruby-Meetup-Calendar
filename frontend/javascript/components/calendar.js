import React from "react"
import ReactDOM from "react-dom"
import CalendarDay from "./calendar-day"

class ReactCalendarDays extends React.Component {
  render() {
    return (
      <div className="calendar-days">{this.listCalendarDays()}</div>
    );
  }

  listCalendarDays() {
    return this.props.dateRange.map((day) => <CalendarDay key={day} day={ day } events={ this.props.events }/>);
  }
}

class CalendarDays extends HTMLElement {
  connectedCallback() {
    const data = JSON.parse(this.querySelector('[type="application/json"]').innerHTML)

    ReactDOM.render(<ReactCalendarDays
      dateRange={ data['date_range'] }
      events={ data['events'] }
      />, this)
  }
}

window.customElements.define("calendar-days", CalendarDays)
