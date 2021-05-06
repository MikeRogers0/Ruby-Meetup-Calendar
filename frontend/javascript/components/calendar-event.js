import React from "react"

const CalendarEvent = ({event}) => (
  <li className="text-xs mb-1 list-disc list-inside">
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