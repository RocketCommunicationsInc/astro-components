import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import { afterNextRender } from "/node_modules/@polymer/polymer/lib/utils/render-status.js";
import { RuxStatus } from "../rux-status/rux-status.js";
// import rux-status
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxLog extends PolymerElement {
  static get properties() {
    return {
      data: {
        type: Object,
        observer: "_updateLog"
      },
      formatting: {
        type: Object
      },
      maxLines: {
        type: Number
      },
      timezone: {
        type: String,
        value: "UTC"
      },
      _height: {
        type: Number
      },
      _log: {
        type: Array,
        value: []
      }
    };
  }

  static get template() {
    return html`

    <style>

      :host {
        display: block;
        font-size: 0.875rem;
      }

      header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: rgba(255, 255, 255, 0.0980392);
        padding: 0.5rem;
      }

      h1 {
        outline: 1px solid red;
        margin: 0;

        font-size: 1.25rem;
        font-weight: 300;
      }

      .rux-log__header-labels {
        display: flex;
        width: 100%;
      }

      .rux-log__header-labels, ol {
        
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .rux-log__header-labels, ol li {
        display: flex;
        align-content: flex-start;
      }

      ol {
        overflow-y: scroll;
      }

      .rux-log__log-event {
        display: flex;
        flex-shrink: 0;
        align-items: flex-start;
        padding: 0.5rem 0;
      }

      

      .rux-log__header-labels > *,
      .rux-log__log-event > * {
        outline: 1px solid green;
        margin: 0 0.5rem;
      }

      .log-event__timestamp {
        font-family: var(--font-family-mono);
        
        flex-shrink: 1;
	      
	      text-align: center;
      }

      .log-event__status {
        
      }

      .log-event__message {
        flex-grow: 1;
	      text-align: left;
      }

      ol li:nth-child(even) {
        background-color: rgba(255,255,255,0.05);
      }


    </style>

  
	<header class="rux-log-header">
    <h1 class="rux-log-header-title">Event Logs</h1>
    <input type="search" value={{_filterValue::input}}>
    <ul class="rux-log__header-labels rux-row">
      <template is="dom-repeat" id="rux-log-data" items=[[formatting.labels]]>
      <li>[[item.label]]</li>
      </template>
    </ul>
	</header>


  <ol style$="max-height: [[_height]]px">
    <template is="dom-repeat" id="rux-log-data" items={{_log}} filter="{{_filter(_filterValue)}}">
      <li class="rux-log__log-event">
        <div class="log-event__timestamp">
          <time datetime$=[[_formatMachineTime(item.timestamp)]]>[[_formatReadableTime(item.timestamp)]]</time>
        </div>
        <div class="log-event__status">
          <rux-status status=[[item.status]]></rux-status>
        </div>
        <div class="log-event__message">
          <div>[[item.entry]]</div>
        </div>
      </li>
    </template>
  </ol>
  `;
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this.data = {
      timestamp: new Date(),
      status: "",
      entry: "Logging inited …"
    };

    // set the max height for the
    afterNextRender(this, () => {
      const logLine = this.shadowRoot.querySelector(".rux-log__log-event");
      this._height = logLine.offsetHeight * this.maxLines;
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _filter(filterValue) {
    if (!filterValue || filterValue.length < 3) return null;

    return _log.entry.toLowerCase().includes(filterValue.toLowerCase())
      ? true
      : false;
  }

  // return an HTML5 datetime string
  _formatMachineTime(time) {
    const utc = `${time.getUTCFullYear()}-${time.getUTCMonth()}-${time.getUTCDate()} ${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}:${time.getUTCMilliseconds()}`;
    const local = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}`;

    return this.timezone.toLowerCase() === "utc" ? utc : local;
  }

  _formatReadableTime(time) {
    return new Date(time).toLocaleTimeString(this.locale, {
      hour12: false,
      timeZone: this.timezone
    });
  }

  _updateLog() {
    this.unshift("_log", this.data);
  }
}
customElements.define("rux-log", RuxLog);
