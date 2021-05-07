import React from "react"
import ReactDOM from "react-dom"
import CalendarDay from "./calendar-day"


const ReactCalendarDays = ({dateRange, currentMonth, events}) => {

  function listCalendarDays() {
    return dateRange.map((day) => (
      <CalendarDay 
        key={ day } 
        day={ day } 
        currentMonth={ currentMonth } 
        events={ events } />
      )
    );
  }
  
  return (
    <div className="calendar-days">{listCalendarDays()}</div>
  );
}


class CalendarDays extends HTMLElement {
  connectedCallback() {
    const data = JSON.parse(this.querySelector('[type="application/json"]').innerHTML)

    ReactDOM.render(<ReactCalendarDays
      dateRange={ data['date_range'] }
      currentMonth={ data['current_month'] }
      events={ data['events'] }
      />, this)
  }
}

window.customElements.define("calendar-days", CalendarDays)
