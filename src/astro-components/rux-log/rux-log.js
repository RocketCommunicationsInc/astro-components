import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import { afterNextRender } from "/node_modules/@polymer/polymer/lib/utils/render-status.js";
import { RuxStatus } from "../rux-status/rux-status.js";
import { RuxIcon } from "../rux-icon/rux-icon.js";
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
      renderedItemCount: {
        type: Number,
        observer: "_getVisibleItems"
      },
      _visibleItems: {
        type: Number
      },
      _filterValue: {
        type: String,
        value: null
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

      *[hidden] {
        display: none !important;
      }

      header {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        justify-content: space-between;
        background-color: rgba(255, 255, 255, 0.0980392);
        padding: 0.5rem;
      }

      h1 {
        margin: 0;

        font-size: 1.25rem;
        font-weight: 300;
      }

      .rux-log__header-labels {
        display: flex;
        width: 100%;
        color: #989898;
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

      

      .rux-log__header-labels li:not(:first-child),
      .rux-log__log-event > *{
        margin: 0 0.5rem;
        outline: 1px solid red;
      }

      .rux-log__header-labels li:first-child {
        margin: 0 0.5rem 0 0;
      }

      

      .log-event__timestamp {
        font-family: var(--font-family-mono);
        
        flex-shrink: 0;
	      
        text-align: right;
        width: 5rem;
      }

      .log-event__status {
        flex-grow: 0;
        flex-shrink: 0;
        text-align: center;
        width: 1rem;
        overflow: hidden;
      }

      .log-event__message {
        flex-grow: 1;
	      text-align: left;
      }

      ol li:nth-child(even) {
        background-color: rgba(255,255,255,0.05);
      }

      .rux-log__filter-enabled {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        left: 0;
        
        color: rgb(62, 57, 7);
        background-color: rgb(253, 248, 198);
        padding: 0.5rem;
      }

      .rux-log__filter-enabled rux-icon {
        margin-right: 0.5rem;
      }


      .test {
        margin-left: auto;
        margin-right: 0.5rem;
      }

    </style>

  
	<header class="rux-log-header">
    <h1 class="rux-log-header-title">Event Logs</h1>
    <rux-icon class="test" icon="default:caution" color="#f8e71d" size="18" hidden=[[!_filterValue]]></rux-icon><input type="search" value={{_filterValue::input}}>
    <ul class="rux-log__header-labels rux-row">
      <li class="log-event__timestamp">Time</li>
      <li class="log-event__status"></li>
      <li>Event</li>
    </ul>
	</header>


  <ol style$="max-height: [[_height]]px">
    
    <li class="rux-log__filter-enabled" hidden=[[!_filterValue]]>
    <rux-icon icon="default:caution" color="rgb(62, 57, 7)" size="20"></rux-icon>A filter with&nbsp;<b>[[_filterValue]]</b>&nbsp;is enabled. [[_visibleItems]] of [[_log.length]] records are currently hidden.
    </li>
    
    <template is="dom-repeat" id="rux-log-data" items={{_log}} filter="{{_filter(_filterValue)}}" rendered-item-count="{{renderedItemCount::dom-change}}" notify-dom-change>
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
      entry: "Logging inited dol …"
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
    // don't run the filter if there is no search param or if
    // the search param is less than 3 chars long
    if (!filterValue || filterValue.length < 3) return null;

    // returns the log entry if it includes the search term
    // NOTE: using String.prototype.includes which is unavailable
    // in IE11
    return _log => {
      return _log.entry.toLowerCase().includes(filterValue.toLowerCase())
        ? true
        : false;
    };
  }

  _getVisibleItems() {
    if (this._log.length && this.renderedItemCount) {
      console.log(this._log.length);
      console.log(this.renderedItemCount);
      console.log(this._log.length - this.renderedItemCount);
      this._visibleItems = this._log.length - this.renderedItemCount;
    }
    // console.log(this._log.length);
    // console.log(this.renderedItemCount);
    // console.log();
    // return 20;
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
