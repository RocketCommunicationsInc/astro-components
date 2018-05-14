import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";
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
        type: Number,
        value: 10
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
        background-color: #1d2f41;
      }

      *[hidden] {
        display: none !important;
      }

      header {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        justify-content: space-between;
        background-color: #1d2f41;
        padding: 0.5rem;
      }

      h1 {
        margin: 0 0 1rem 0;
        display: none;

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
        height: 100%;
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
      }

      .rux-log__header-labels li:first-child {
        margin: 0 0.5rem 0 0;
      }

      

      .rux-log__log-event .log-event__timestamp {
        font-family: var(--font-family-mono);
      }

      .log-event__timestamp {
        
    
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

      .log-header__message {
        display: flex;
        justify-content: space-between;
      }

      ol li:nth-child(even) {
        
        background-color: #283f58;
      }

      .rux-log__filter-enabled {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        left: 0;

        align-content: center;
        
        
        color: rgb(62, 57, 7);
        background-color: rgb(223, 247, 255) /* rgb(253, 248, 198) */;
        padding: 0.5rem;
      }

      .rux-log__filter-enabled rux-icon {
        margin-right: 0.5rem;
      }


      .test {
        margin-left: auto;
        margin-right: 0.5rem;
      }

      input[type=search] {
        border: none;
        border-radius: 3px;
        font-size: 1rem;
        background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg'/><path d='M6.33 5.67l1 1-3.66 3.66-1-1'/></g></svg>");
        
      }

    </style>

  
	<header class="rux-log-header">
    <h1 class="rux-log-header-title">Event Logs</h1>
    <ul class="rux-log__header-labels rux-row">
      <li class="log-event__timestamp">Time</li>
      <li class="log-event__status"></li>
      <li class="log-event__message log-header__message">Event <input type="search" value={{_filterValue::input}}></li>
    </ul>
	</header>

  <!-- 
  Renable when a proper method for determing height/width can be determined
  <ol style$="max-height: [[_height]]px"> 
  //-->
  <ol>
    
    <li class="rux-log__filter-enabled" hidden=[[!_filterValue]]>
    A filter with&nbsp;<b>[[_filterValue]]</b>&nbsp;is enabled. [[_visibleItems]] of [[_log.length]] records are currently hidden.
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
    // don't run the filter if there is no search param
    if (!filterValue) return null;

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
      this._visibleItems = this._log.length - this.renderedItemCount;
    }
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
    /* TODO - Add support for a log dump of multiple items */
    this.unshift("_log", this.data);
  }
}
customElements.define("rux-log", RuxLog);
