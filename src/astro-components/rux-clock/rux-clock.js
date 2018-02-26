import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxClock extends PolymerElement {
  static get properties() {
    return {
      dayOfYear: {
        type: String,
        computed: "_getDayOfYear()"
      },
      currentTime: {
        type: String
      },
      aos: {
        type: String,
        value: false
      },
      los: {
        type: String,
        value: false
      },
      timezone: {
        type: String,
        value: "UTC"
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
      }
    };
  }
  static get template() {
    return html`
      <style>
        *[hidden] {
          display: none !important;
        }

        .rux-clock {
          display: flex;
          color: rgb(205, 210, 212);
          font-size: 1.5rem;
        }

        .rux-clock__segment {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .rux-clock__segment__value {
          display: flex;
          align-items: center;
          font-family: monospace;
          height: 44px;
          padding: 0 0.75em;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 0.25rem;
        }

        .rux-clock__segment__label {
          font-size: 0.875rem;
          border: 1px solid rgb(36, 56, 77);
        }

        .rux-clock__aos {
          margin-left: 1em;
        }

        .rux-clock__los {
          margin-left: 0.5em;
        }
      </style>      
      <div class="rux-clock">
        <div class="rux-clock__segment rux-clock__day-of-the-year" hidden="[[hideDate]]">
          <div class="rux-clock__segment__value" aria-labeledby="rux-clock__day-of-year-label">[[dayOfYear]]</div>
          <div class="rux-clock__segment__label" id="rux-clock__day-of-year-label">Date</div>
        </div>
        <div class="rux-clock__segment rux-clock__time">
          <div class="rux-clock__segment__value" aria-labeledby="rux-clock__time-label">[[currentTime]]</div>
          <div class="rux-clock__segment__label" id="rux-clock__time-label">Time</div>
        </div>
        <div class="rux-clock__segment rux-clock__aos" hidden="[[!aos]]">
          <div class="rux-clock__segment__value" aria-labeledby="rux-clock__time-label">[[aos]]</div>
          <div class="rux-clock__segment__label" id="rux-clock__time-label">AOS</div>
        </div>
        <div class="rux-clock__segment rux-clock__los" hidden="[[!los]]">
          <div class="rux-clock__segment__value" aria-labeledby="rux-clock__time-label">[[los]]</div>
          <div class="rux-clock__segment__label" id="rux-clock__time-label">LOS</div>
        </div>
      </div>
      `;
  }
  constructor() {
    super();
    this._oneDay = 1000 * 60 * 60 * 24;
    this._date = new Date();
    if (this.timezone.toLowerCase() === "utc") {
      this._date = this._getUTCDateFrom(this._date);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    const _timer = setInterval(() => {
      this._updateTime();
    }, 1000);
    // show time immediately
    this._updateTime();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  ready() {
    super.ready();
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
  _getDayOfYear() {
    console.log("get day of year");
    const _now = new Date();
    const _utc = this._getUTCDateFrom(_now);
    let _year = null;
    let _day = null;
    if (this.timezone.toLowerCase() === "utc") {
      _year = new Date(_now.getFullYear(), 0, 0);
      _day = Math.floor((_utc - _year) / this._oneDay);
    } else {
      _year = new Date(_now.getUTCFullYear(), 0, 0);
      _day = Math.floor((_now - _year) / this._oneDay);
    }
    // May need to polyfill or find an alternate option for .padStart IE11 doesn’t support
    return _day.toString().padStart(3, "000");
  }
  _getUTCDateFrom(date) {
    return new Date(date.getFullYear(), date.getUTCMonth(), date.getUTCDate());
  }
  _updateTime() {
    const _currentTime = new Date();
    // check to see if the current date is greater than this._date
    // indicating a date change over. Update this._date to the new
    // date and call _getDayOfYear to update the date counter
    //
    // NOTE: Not tested with UTC vs local time, not sure what will
    // happen. Two guesses: 1) using local time for calculations and
    // then applying the transform will
    if (this.timezone.toLowerCase() === "utc") {
      if (_currentTime.getUTCDate() > this._date) {
        this._date = this._getUTCDateFrom(_currentTime).getDate();
        this._getDayOfYear();
      }
    } else {
      if (_currentTime.getDate() > this._date) {
        this._date = _currentTime.getDate();
        this._getDayOfYear();
      }
    }
    /* format the current time using toLocaleString
       Requires locale e.g., "us-en" would format U.S. English
       options to force 24 hour clock, timezone support and 
       forcing the timezone tag (maybe allow that to be settable)
    */
    this.currentTime = _currentTime.toLocaleTimeString(
      "us-en",
      this.timeOptions
    );
  }
}
customElements.define("rux-clock", RuxClock);
