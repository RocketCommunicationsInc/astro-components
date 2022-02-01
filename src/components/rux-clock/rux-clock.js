import { LitElement, html } from 'lit-element'

import { getDayOfYear } from 'date-fns'
import { format, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz'

import militaryTimezones from 'military-timezones'

export class RuxClock extends LitElement {
    static get properties() {
        return {
            aos: {
                type: Number,
            },
            los: {
                type: String,
            },
            timezone: {
                type: String,
                reflect: true,
            },
            hideTimezone: {
                type: Boolean,
            },
            hideDate: {
                type: Boolean,
            },
            small: {
                type: Boolean,
            },
            time: {
                type: String,
            },
            dayOfYear: {
                type: String,
            },
        }
    }

    constructor() {
        super()
        this.timezone = 'UTC'
        this._timezone = this.timezone
        this.tzFormat = 'z'
        this.hideTimezone = false
        this.hideDate = false

        this.updateTime()
    }

    /*
    Lifecycle hooks should occur after the constructor and before custom methods
  */

    connectedCallback() {
        super.connectedCallback()

        this._timer = setInterval(() => {
            this.updateTime()
        }, 1000)
    }

    disconnectedCallback() {
        clearTimeout(this._timer)
        super.disconnectedCallback()
    }

    updated(changedProperties) {
        const oldZone = changedProperties.get('timezone')
        if (oldZone) {
            this.convertTimezone(this.timezone)
        }
    }

    /*
    Public functions should occur after lifecycle hooks
  */

    /*
    Private functions should occur after public functions
  */
    updateTime() {
        this.time = format(
            utcToZonedTime(new Date(), this._timezone),
            `HH:mm:ss ${this.hideTimezone ? '' : this.tzFormat}`,
            { timeZone: this._timezone }
        )
        this.dayOfYear = getDayOfYear(
            utcToZonedTime(new Date(), this._timezone)
        )
    }

    convertTimezone(timezone) {
        this._timezone = militaryTimezones[timezone.toUpperCase()]
        this.tzFormat = 'O'
        if (!this._timezone) {
            this._timezone = timezone
            this.tzFormat = 'zzz'
        } else if (timezone.toUpperCase() == 'Z') {
            this.tzFormat = 'X'
        }
    }

    /*
    Template and styles blocks should appear as the very last code blocks
  */
    render() {
        return html`
            <style>
                :host {
                    display: flex;
                    margin: 0 1rem;

                    color: var(--clockTextColor);

                    font-size: 1.15rem;

                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                .rux-clock__segment {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .rux-clock__segment__value {
                    display: flex;
                    align-items: center;
                    font-family: var(--fontFamilyMono);
                    font-weight: 700;

                    border: 1px solid var(--clockBorderColor);

                    background-color: var(--clockBackgroundColor);
                    margin-bottom: 0.25rem;

                    white-space: nowrap;
                    overflow-y: hidden;
                    text-overflow: ellipsis;
                }

                .rux-clock__segment__value {
                    font-size: 1.75rem;
                    height: 2.75rem;
                    padding: 0 0.75rem;
                }

                :host([small]) .rux-clock__segment__value {
                    height: 2.75rem;
                    padding: 0 0.75rem;
                    font-size: 1.15rem;
                    font-weight: 500;
                }

                .rux-clock__segment__label {
                    font-size: 0.875rem;
                    color: var(--clockLabelColor);
                }

                .rux-clock__day-of-the-year .rux-clock__segment__value {
                    border-right: none;
                }

                .rux-clock__segment--secondary .rux-clock__segment__value {
                    font-weight: 400;
                }

                .rux-clock__aos {
                    margin-left: 1em;
                }

                .rux-clock__los {
                    margin-left: 0.5em;
                }
            </style>

            ${!this.hideDate
                ? html`
                      <div
                          class="rux-clock__segment rux-clock__day-of-the-year"
                      >
                          <div
                              class="rux-clock__segment__value"
                              aria-labelledby="rux-clock__day-of-year-label"
                          >
                              ${this.dayOfYear.toString().padStart(3, '0')}
                          </div>
                          <div
                              class="rux-clock__segment__label"
                              id="rux-clock__day-of-year-label"
                          >
                              Date
                          </div>
                      </div>
                  `
                : ''}

            <div class="rux-clock__segment rux-clock__time">
                <div
                    class="rux-clock__segment__value"
                    aria-labelledby="rux-clock__time-label"
                >
                    ${this.time}
                </div>
                <div
                    class="rux-clock__segment__label"
                    id="rux-clock__time-label"
                >
                    Time
                </div>
            </div>

            ${this.aos
                ? html`
                      <div
                          class="rux-clock__segment rux-clock__segment--secondary rux-clock__aos"
                      >
                          <div
                              class="rux-clock__segment__value"
                              aria-labelledby="rux-clock__time-label--aos"
                          >
                              ${format(
                                  utcToZonedTime(this.aos, this._timezone),
                                  'HH:mm:ss'
                              )}
                          </div>
                          <div
                              class="rux-clock__segment__label"
                              id="rux-clock__time-label--aos"
                          >
                              AOS
                          </div>
                      </div>
                  `
                : ''}
            ${this.los
                ? html`
                      <div
                          class="rux-clock__segment rux-clock__segment--secondary rux-clock__los"
                      >
                          <div
                              class="rux-clock__segment__value"
                              aria-labelledby="rux-clock__time-label--los"
                          >
                              ${format(
                                  utcToZonedTime(this.los, this._timezone),
                                  'HH:mm:ss'
                              )}
                          </div>
                          <div
                              class="rux-clock__segment__label"
                              id="rux-clock__time-label--los"
                          >
                              LOS
                          </div>
                      </div>
                  `
                : ''}
        `
    }

    /* uses the lit-scss-loader to import external CSS */
    /* static get styles() {
    return css`
      ${style}
    `;
  } */
}
customElements.define('rux-clock', RuxClock)
