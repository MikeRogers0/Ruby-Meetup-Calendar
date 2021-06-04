import React from "react"
import ReactDOM from "react-dom"
import createPersistedState from 'use-persisted-state';

// https://www.npmjs.com/package/use-persisted-state
const onlineEventOnlyState = createPersistedState('online_event_only');

const ReactFilterForm = () => {
  const [onlineEventOnly, setOnlineEventOnly] = onlineEventOnlyState(false);

  function handleChangeEvent(event){
    setOnlineEventOnly(event.target.checked);
  };

  return (
    <ul className="filter-form list-inline">
      <li>
        <label><input type="checkbox" name="online_event_only" onChange={handleChangeEvent} checked={onlineEventOnly} /> Show Only Online Events</label>
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
