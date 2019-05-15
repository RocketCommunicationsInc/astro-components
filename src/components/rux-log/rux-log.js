
import { LitElement, html } from 'lit-element';
import RuxUtils from '../rux-utils/datetime.js';
/* eslint-disable no-unused-vars */
import { RuxStatus } from '../rux-status/rux-status.js';
/* eslint-enable no-unused-vars */

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxLog extends LitElement {
  static get properties() {
    return {
      data: {
        type: Array,
      },
      timezone: {
        type: String,
      },
      _filterValue: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this._filterValue = '';
    this.data = [];
    this.timezone = 'UTC';

    if (this.data.length < 1) {
      this.data = [{
        timestamp: new Date(),
        status: '',
        message: 'Log initialized with no data…',
      }];
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _filter(filterValue) {
    // return every item if no filter is set
    if (!filterValue) {
      return () => {
        return true;
      };
    }

    // returns the item if the message property includes the search term
    // NOTE: using String.prototype.includes which is unavailable
    // in IE11
    return (item) => {
      return item.message.toLowerCase().includes(filterValue.toLowerCase())
        ? true
        : false;
    };
  }

  get filteredLog() {
    return this.data.filter(this._filter(this._filterValue));
  }

  get visibleItems() {
    if (this.data.length && this.filteredLog.length > -1) {
      return this._visibleItems = this.data.length - this.filteredLog.length;
    }
    return this.data.length;
  }
  filterChanged(event) {
    const newFilterValue = event.target.value;

    if (this._filterValue === newFilterValue && this._filterValue !== event.target.value) {
      event.target.value = this._filterValue;
    } else {
      this._filterValue = newFilterValue;
    }
  }


  render() {
    return html`

    <style>

      :host {
        display: block;
        font-size: 0.875rem;
        color: var(--fontColor, rgb(255,255,255));
        background-color: var(--logBackgroundColor,  rgb(32, 50, 70));
      }

      *[hidden] {
        display: none !important;
      }
      
      .rux-log-header {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        justify-content: space-between;
        background-color: var(--logHeaderBackgroundColor, rgb(24, 38, 53));
        padding: 0.5rem;
        
      }
      
      .rux-log-header-title {
        margin: 0 0 1rem 0;
        display: none;
      
        font-size: 1.25rem;
        font-weight: 300;
      }
      
      .rux-log__header-labels {
        display: flex;
        width: 100%;
        color: var(--logHeaderTextColor, rgb(255, 255, 255));
      }
      
      .rux-log__header-labels,
      .rux-log__events {
        padding: 0;
        margin: 0;
        list-style: none;
      }
      
      .rux-log__header-labels,
      .rux-log__log-event {
        display: flex;
        align-content: flex-start;
      }
      
      .rux-log__events {
        height: 100%;
        overflow-y: auto;
        background-color: var(--logBackgroundColor,  rgb(32, 50, 70));
      }
      
      .log-event__timestamp {
        flex-shrink: 0;
        text-align: right;
        width: 5rem;
      }
            
      .rux-log__log-event {
        display: flex;
        flex-shrink: 0;
        align-items: flex-start;
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--logBorderColor, rgb(40, 63, 88));
      }
      
      .rux-log__log-event:last-child {
        border-bottom: none;
      }
      
      .rux-log__header-labels li:not(:first-child),
      .rux-log__log-event > * {
        margin: 0 0.5rem;
      }
      
      .rux-log__header-labels li:first-child {
        margin: 0 0.5rem 0 0;
      }
      
      .rux-log__log-event .log-event__timestamp {
        font-family: var(--fontFamilyMono, "Roboto Mono", monospace);
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
      
      /* ol li:nth-child(even) {
        background-color: #283f58;
      } */
      
      .rux-log__filter-enabled {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        left: 0;
      
        align-content: center;
      
        color: var(--logFilterTextColor, rgb(0, 0, 0));
        background-color: var(--logFilterBackgroundColor, rgb(192, 240, 255));
        padding: 0.5rem;
      }

      
      /* input[type="search"] {
        border: none;
        border-radius: 3px;
        font-size: 1rem;
        background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg'/><path d='M6.33 5.67l1 1-3.66 3.66-1-1'/></g></svg>");
      } */

      .rux-form-field--small input {
        box-sizing: border-box;
        -webkit-order: 2;
                order: 2;

        height: 1.25rem;
        width: 100%;
        padding: 0.3rem;

        border: 1px solid transparent;

        border: 1px solid var(--inputBorderColor, transparent);
        border-radius: 3px;

        font-size: 0.75rem;
        font-size: var(--fontSizeSM, 0.75rem);

        color: rgb(0, 0, 0);
        color: var(--inputTextColor, rgb(0, 0, 0));
      }
    
  </style>

  <header class="rux-log-header">
    <h1 class="rux-log-header-title">Event Logs</h1>
    <ul class="rux-log__header-labels rux-row">
      <li class="log-event__timestamp">Time</li>
      <li class="log-event__status"></li>
      <li class="log-event__message log-header__message">Event</li>
      <li>
        <div class="rux-form-field rux-form-field--small">
          <input class="rux-input" placeholder="Filter Log…" type="search" 
            .value="${this._filterValue}" @input="${this.filterChanged}">
        </div>
      </li>
    </ul>
  </header>

  <ol class="rux-log__events">
    <li class="rux-log__filter-enabled" ?hidden=${!this._filterValue}>
      A filter with&nbsp;"<b>${this._filterValue}</b>"&nbsp;is enabled. 
      ${this.visibleItems} of ${this.data.length} records are currently hidden.
    </li>

    ${this.filteredLog.map((item) => html`
      <li class="rux-log__log-event">
        <div class="log-event__timestamp">
          <time datetime=${RuxUtils.formatMachineTimeUTC(item.timestamp, this.timezone)}>
            ${RuxUtils.formatClockTimeUTC(item.timestamp, this.timezone, true)}
          </time>
        </div>
        <div class="log-event__status">
          <rux-status status=${item.status}></rux-status>
        </div>
        <div class="log-event__message">
          <div>${item.message}</div>
        </div>
      </li>
    `)} 

   </ol>
  `;
  }
}
customElements.define('rux-log', RuxLog);
