import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxClock extends PolymerElement {
  static get properties() {
    return {
      aos: {
        type: Date,
        value: false
      },
      los: {
        type: Date,
        value: false
      },
      timezone: {
        type: String,
        value: "UTC"
      },
      locale: {
        type: String,
        value: "us-en"
      },
      hideTimezone: {
        type: Boolean,
        value: false
      },
      hideDate: {
        type: Boolean,
        value: false
      },
      timeOptions: {
        type: Object,
        computed: "_setTimeOptions(hideTimezone)"
      },
      theme: {
        type: String
      },
      compact: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }

  static get template() {
    return html`
      <style>
        *[hidden] {
          display: none !important;
        }

        .light {
          --clockTextColor: red;
        }

        .dark {
          --clockTextColor: green;
        }

        .rux-clock {
          display: flex;
          color: var(--clockTextColor, rgb(255, 255, 255));

          font-size: 1.15rem;
        }

        .rux-clock__segment {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .rux-clock__segment__value {
          display: flex;
          align-items: center;
          font-family: var(--fontFamilyMono, "Roboto Mono", monospace);
          font-weight: 700;

          border: 1px solid var(--clockBorderColor, rgb(40, 63, 88));

          background-color: var(--clockBackgroundColor, rgb(20, 32, 44));
          margin-bottom: 0.25rem;

          white-space: nowrap;
          overflow-y: hidden;
          text-overflow: ellipsis;
        }

        .rux-clock .rux-clock__segment__value {
          font-size: 1.75rem;
          height: 2.75rem;
          padding: 0 0.75rem;
        }

        :host([compact]) .rux-clock__segment__value {
          height: 2.75rem;
          padding: 0 0.75rem;
          font-size: 1.15rem;
          font-weight: 500;
        }

        /* HotFix for IE - needs a better solution */
        :host([compact]) .rux-clock {
          font-size: 1.15rem !important;
        }

        .rux-clock__segment__label {
          font-size: 0.875rem;
        }

        /* HotFix for IE - needs a better solution */
        :host([compact]) .rux-clock__segment__label {
          font-size: 0.875rem !important;
        }

        .rux-clock__day-of-the-year .rux-clock__segment__value {
          border-right: none;
        }

        .rux-clock__aos {
          margin-left: 1em;
        }

        .rux-clock__los {
          margin-left: 0.5em;
        }
      </style>
      <div class$="rux-clock [[light]]">
        <div
          class="rux-clock__segment rux-clock__day-of-the-year"
          hidden="[[hideDate]]"
        >
          <div
            class="rux-clock__segment__value"
            aria-labeledby="rux-clock__day-of-year-label"
          >
            {{_getDayOfYear()}}
          </div>
          <div
            class="rux-clock__segment__label"
            id="rux-clock__day-of-year-label"
          >
            Date
          </div>
        </div>
        <div class="rux-clock__segment rux-clock__time">
          <div
            class="rux-clock__segment__value"
            aria-labeledby="rux-clock__time-label"
          >
            [[_currentTime]]
          </div>
          <div class="rux-clock__segment__label" id="rux-clock__time-label">
            Time
          </div>
        </div>
        <div class="rux-clock__segment rux-clock__aos" hidden="[[!aos]]">
          <div
            class="rux-clock__segment__value"
            aria-labeledby="rux-clock__time-label"
          >
            [[formatTime(aos)]]
          </div>
          <div class="rux-clock__segment__label" id="rux-clock__time-label">
            AOS
          </div>
        </div>
        <div class="rux-clock__segment rux-clock__los" hidden="[[!los]]">
          <div
            class="rux-clock__segment__value"
            aria-labeledby="rux-clock__time-label"
          >
            [[formatTime(los)]]
          </div>
          <div class="rux-clock__segment__label" id="rux-clock__time-label">
            LOS
          </div>
        </div>
      </div>
    `;
  }
  constructor() {
    super();

    // set value of one day in milliseconds
    this._oneDay = 86400000;
  }

  connectedCallback() {
    super.connectedCallback();

    // start the time
    let _timer = setInterval(() => {
      this._updateTime();
    }, 1000);

    // show time immediately instead of waiting for setInterval to call
    this._updateTime();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._timer);
  }

  /*
   **
   ** Format AOS/LOS in the appropriate time
   **
   */
  formatTime(time) {
    if (isNaN(time)) return false;

    return new Date(time).toLocaleTimeString(this.locale, {
      hour12: false,
      timeZone: this.timezone
    });
  }

  /*
   **
   ** Set the options for toLocalTimeString. Essentially
   ** only needed to show/hide the time zone string.
   **
   */
  _setTimeOptions(hideTimezone) {
    let _timeOptions = {
      hour12: false,
      timeZone: this.timezone
    };

    // explicitly optin to hide the timzone label
    if (!hideTimezone) {
      _timeOptions.timeZoneName = "short";
    }
    return _timeOptions;
  }

  /*
   **
   ** Calculate the ordinal day of the year
   **
   */
  _getDayOfYear() {
    let _now = new Date();
    let _year = new Date(_now.getFullYear(), 0, 0);

    // reframe _year and _now to UTC
    if (this.timezone.toLowerCase() === "utc") {
      _year = new Date(_now.getUTCFullYear(), 0, 0);
      _now = this._getUTCDateFrom(_now);
    }

    let _day = Math.floor((_now - _year) / this._oneDay);

    // May need to polyfill or find an alternate option for .padStart IE11 doesnâ€™t support
    return _day.toString().padStart(3, "000");
  }

  _getUTCDateFrom(date) {
    return new Date(date.getFullYear(), date.getUTCMonth(), date.getUTCDate());
  }

  _updateTime() {
    this._currentTime = new Date().toLocaleTimeString(
      this.locale,
      this.timeOptions
    );

    // update the date
    this._getDayOfYear();
  }
}
customElements.define("rux-clock", RuxClock);
