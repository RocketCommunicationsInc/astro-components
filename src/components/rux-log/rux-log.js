import { LitElement, html } from 'lit-element'
import RuxUtils from '../rux-utils/datetime.js'
/* eslint-disable no-unused-vars */
import { RuxStatus } from '../rux-status/rux-status.js'
/* eslint-enable no-unused-vars */

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
        }
    }

    constructor() {
        super()
        this._filterValue = ''
        this.data = []
        this.timezone = 'UTC'

        if (this.data.length < 1) {
            this.data = [
                {
                    timestamp: new Date(),
                    status: '',
                    message: 'Log initialized with no data…',
                },
            ]
        }
    }

    _filter(filterValue) {
        // return every item if no filter is set
        if (!filterValue) {
            return () => {
                return true
            }
        }

        // returns the item if the message property includes the search term
        // NOTE: using String.prototype.includes which is unavailable
        // in IE11
        return (item) => {
            return item.message
                .toLowerCase()
                .includes(filterValue.toLowerCase())
                ? true
                : false
        }
    }

    get filteredLog() {
        return this.data.filter(this._filter(this._filterValue))
    }

    get visibleItems() {
        if (this.data.length && this.filteredLog.length > -1) {
            return (this._visibleItems =
                this.data.length - this.filteredLog.length)
        }
        return this.data.length
    }
    filterChanged(event) {
        const newFilterValue = event.target.value

        if (
            this._filterValue === newFilterValue &&
            this._filterValue !== event.target.value
        ) {
            event.target.value = this._filterValue
        } else {
            this._filterValue = newFilterValue
        }
    }

    render() {
        return html`
            <style>
                :host {
                    display: block;
                    font-size: 1rem;
                    color: var(--fontColor, rgb(255, 255, 255));
                    background-color: var(--logBackgroundColor);
                }

                *[hidden] {
                    display: none !important;
                }

                .rux-log-header {
                    display: flex;
                    flex-wrap: wrap;
                    position: relative;
                    justify-content: space-between;
                    background-color: var(--logHeaderBackgroundColor);
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
                    color: var(--logHeaderTextColor);
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
                    background-color: var(--logBackgroundColor);
                }

                .log-event__timestamp {
                    flex-shrink: 0;
                    text-align: left;
                    width: 5rem;
                }

                .rux-log__log-event {
                    display: flex;
                    flex-shrink: 0;
                    align-items: flex-start;
                    padding: 0.5rem 0;
                    border-bottom: 1px solid var(--logBorderColor);
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
                    font-family: var(--fontFamily);
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

                    color: var(--logFilterTextColor);
                    background-color: var(--logFilterBackgroundColor);
                    padding: 0.5rem;
                }

                /*  
        * * NOTE: Temporary inclusion of static CSS stlyes here. Future decision needs
        * * to be made whether or not the filter input element should be embedded in the
        * * component which requires a new approach to styling elements.
        */

                .rux-form-field--small input {
                    box-sizing: border-box;
                    -webkit-order: 2;
                    order: 2;

                    height: 1.25rem;
                    width: 100%;
                    padding: 0.3rem;

                    border: 1px solid transparent;

                    border: 1px solid var(--inputBorderColor);
                    border-radius: 3px;

                    font-size: 0.75rem;
                    font-size: var(--fontSizeSM);

                    color: rgb(0, 0, 0);
                    color: var(--inputTextColor);
                }

                input[type='search']::-webkit-search-decoration {
                    -webkit-appearance: textfield;
                }

                /* SEARCH VARIANT */
                input[type='search'] {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    padding: 0.5rem 0.5rem 0.5rem 1.75rem;

                    background: no-repeat center left 0.3rem/1.1em
                        url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 13 13'%3E%3Cg fill='%230973C1' fill-rule='evenodd'%3E%3Cpath d='M9 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-4.707.293l1.414 1.414-4 4-1.414-1.414'/%3E%3Cpath d='M6.33 5.67l1 1-3.66 3.66-1-1'/%3E%3C/g%3E%3C/svg%3E")
                        var(--inputBackgroundColor);
                }

                input[type='search'] {
                    padding: 0.3rem 0 0.3rem 1.5rem;
                }

                input[type='search']::-webkit-search-cancel-button {
                    position: relative;

                    -webkit-appearance: none;
                    width: 20px;
                    height: 20px;
                    background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20128%20128%22%3E%0A%20%20%3Cpath%20fill%3D%22rgb(0%2C%2090%2C%20143)%22%20fill-rule%3D%22evenodd%22%20d%3D%22M69.028%2064l22.628%2022.627-5.029%205.029L64%2069.028%2041.373%2091.656l-5.029-5.029L58.972%2064%2036.344%2041.373l5.029-5.029L64%2058.972l22.627-22.628%205.029%205.029L69.028%2064z%22%2F%3E%0A%3C%2Fsvg%3E');
                }

                .sr-only {
                    border: 0;
                    clip: rect(0 0 0 0);
                    height: 1px;
                    margin: -1px;
                    overflow: hidden;
                    padding: 0;
                    position: absolute;
                    width: 1px;
                }

                /*
        * *  END TEMPORARY STYLING
        */
            </style>

            <header class="rux-log-header">
                <h1 class="rux-log-header-title">Event Logs</h1>
                <ul class="rux-log__header-labels rux-row">
                    <li class="log-event__timestamp">Time</li>
                    <li class="log-event__status"></li>
                    <li class="log-event__message log-header__message">
                        Event
                    </li>
                    <li>
                        <div class="rux-form-field rux-form-field--small">
                            <label class="sr-only" for="log-search"
                                >Search</label
                            >
                            <input
                                id="log-search"
                                class="rux-input"
                                placeholder="Search..."
                                type="search"
                                .value="${this._filterValue}"
                                @input="${this.filterChanged}"
                            />
                        </div>
                    </li>
                </ul>
            </header>

            <ol class="rux-log__events">
                <li
                    class="rux-log__filter-enabled"
                    ?hidden=${!this._filterValue}
                >
                    A filter with&nbsp;"<b>${this._filterValue}</b>"&nbsp;is
                    enabled. ${this.visibleItems} of ${this.data.length} records
                    are currently hidden.
                </li>

                ${this.filteredLog.map(
                    (item) => html`
                        <li class="rux-log__log-event">
                            <div class="log-event__timestamp">
                                <time
                                    datetime=${RuxUtils.formatMachineTimeUTC(
                                        item.timestamp,
                                        this.timezone
                                    )}
                                >
                                    ${RuxUtils.formatClockTimeUTC(
                                        item.timestamp,
                                        this.timezone,
                                        true
                                    )}
                                </time>
                            </div>
                            <div class="log-event__status">
                                <rux-status status=${item.status}></rux-status>
                            </div>
                            <div class="log-event__message">
                                <div>${item.message}</div>
                            </div>
                        </li>
                    `
                )}
            </ol>
        `
    }
}
customElements.define('rux-log', RuxLog)
