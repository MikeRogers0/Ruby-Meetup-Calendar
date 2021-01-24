import React from "react"
import ReactDOM from "react-dom"

class CalenderDay extends React.Component {
  render() {
    return (
      <div class="calender-day
        calender-day--with-events 
        calender-day--not-in-current-month
        calender-day--past

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
