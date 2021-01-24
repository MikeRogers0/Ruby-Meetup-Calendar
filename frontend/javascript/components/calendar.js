import React from "react"
import ReactDOM from "react-dom"

class Calendar extends React.Component {
  render() {
    const listItems = 

    return (
      <div class="calendar-days">{this.listDays}</div>
    );
  }

  listDays() {
    return this.props.dateRange.map((day) => <CalendarDay>{number}</li>);
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
