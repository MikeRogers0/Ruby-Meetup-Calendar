import React from "react"
import ReactDOM from "react-dom"

class Calender extends React.Component {
  render() {
    return (
      <div>Hello {this.props.dateRange}</div>
    );
  }
}

class MyCalender extends HTMLElement {
  connectedCallback() {
    let data = JSON.parse(this.innerText)

    ReactDOM.render(<Calender
      dateRange={ data['date_range'] }
      events={ data['events'] }
      />, this)
  }
}

window.customElements.define("my-calender", MyCalender)
