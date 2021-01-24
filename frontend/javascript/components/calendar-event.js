import React from "react"
import ReactDOM from "react-dom"

export default class CalendarEvent extends React.Component {

  render() {
    return (
      <li className="text-xs mb-1 list-disc list-inside">
        <a href="https://www.madridrb.com/events/terracismo-virtual-646">
          Madrid.rb
        </a>
      </li>
    );
  }
}
