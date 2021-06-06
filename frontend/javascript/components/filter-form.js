import React from "react"
import ReactDOM from "react-dom"
import useOnlineEventsOnlyState from "persisted-states/online-events-only";

const ReactFilterForm = () => {
  const [onlineEventsOnly, setOnlineEventsOnly] = useOnlineEventsOnlyState();

  function handleChangeEvent(event){
    setOnlineEventsOnly(event.target.checked);
  };

  return (
    <ul className="list-inline">
      <li>
        <label>
          <input type="checkbox" name="online_events_only" onChange={handleChangeEvent} checked={onlineEventsOnly} />
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
