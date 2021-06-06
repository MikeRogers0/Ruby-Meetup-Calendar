import React from "react"
import ReactDOM from "react-dom"
import useOnlineEventsOnlyState from "persisted-states/online-events-only";

const ReactFilterForm = () => {
  const [onlineEventsOnly, setOnlineEventsOnly] = useOnlineEventsOnlyState("false");

  function handleChangeEvent(event){
    console.log("handleChangeEvent", event.target.checked)
    setOnlineEventsOnly(event.target.checked ? "true" : "false");
  };

  return (
    <ul className="list-inline">
      <li>
        <label>
          <input type="checkbox" name="online_events_only" onChange={handleChangeEvent} checked={onlineEventsOnly === "true"} />
          Show Online Events Only
        </label>
      </li>
    </ul>
  );
}

class FilterForm extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<ReactFilterForm />, this)
  }
}

window.customElements.define("filter-form", FilterForm)
