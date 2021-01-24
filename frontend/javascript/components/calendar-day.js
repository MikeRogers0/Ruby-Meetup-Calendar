import React from "react"
import ReactDOM from "react-dom"

class CalendarDay extends React.Component {
  render() {
    return (
      <div class="calendar-day
        calendar-day--with-events 
        calendar-day--not-in-current-month
        calendar-day--past

        md:min-h-28
        ">
        <div class="inline-flex w-6 h-6 leading-none">
          <span class="inline-block md:hidden">Wednesday&nbsp;</span>
          30
        </div>

        <ul>
          <li class="text-xs mb-1 list-disc list-inside">
            <a href="https://www.madridrb.com/events/terracismo-virtual-646">
              Madrid.rb
              <time
                data-format="%l:%M%P"
                data-local="time"
                datetime="2020-12-30T19:30:00+01:00"
              >19:30 +0100</time>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
