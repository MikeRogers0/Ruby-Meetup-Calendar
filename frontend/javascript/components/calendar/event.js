import React from "react"

const CalendarEvent = ({event}) => (
  <li className="calendar-events__item">
    <a href={ event.external_url } target="_blank">
      { event.name } 
      <span> - </span> 
      <time
        data-format="%l:%M%P"
        data-local="time"
        datetime={ event.datetime }
      >{ event.datetime }</time>
    </a>
  </li>
);

export default CalendarEvent
