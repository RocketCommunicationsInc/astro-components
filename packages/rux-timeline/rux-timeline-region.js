import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTimelineRegion extends PolymerElement {
  static get properties() {
    return {
      label: {
        type: String
      },
      status: {
        type: String,
        value: "off"
      },
      scale: {
        type: Number,
        observer: "_updateRegion",
        value: false
      },
      trackWidth: {
        type: Number
      },
      duration: {
        type: Number
      },
      startTime: {
        type: Date
      },
      status: {
        type: String
      },
      endTime: {
        type: Date
      },
      detail: {
        type: Object
      },
      selected: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },
      _startTime: {
        type: Date,
        computed: "_getTime(startTime)"
      },
      _endTime: {
        type: Date,
        computed: "_getTime(endTime)"
      },
      _initialState: {
        type: Object,
        value: false
      },
      _id: {
        type: String,
        value: () => {
          return "RTR-" + Math.floor(Math.random() * 1000);
        }
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          position: absolute;
          display: flex;
          flex-direction: column;

          font-size: 0.875rem;
          top: 0;
          background-color: var(
            --timelineRegionBackgroundColor,
            rgb(0, 36, 57)
          );
          color: var(--timelineRegionTextColor, rgb(255, 255, 255));
          overflow: hidden;

          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          border: 1px solid var(--timelineRegionBorderColor, rgb(0, 90, 143));
          /* transition: border 0.667s ease-in-out; */

          box-sizing: border-box;
          height: 60px;

          z-index: 1;
          /* background-color: red; */
          filter: none;
        }

        :host([hidden]) {
          /* filter: saturate(50%); */
          background-color: #203246;
          opacity: 0.8;
          z-index: 0;
          border-color: #203246;
          /* display: none; */
        }

        *,
        *:after,
        *:before {
          box-sizing: inherit;
        }

        .filtered {
          opacity: 0.5;
        }

        /*
        Placeholders for variable sized timelines
        :host(.large) {
        }
        
        :host(.medium) {
        }
        
        :host(.small) {
        }
        
        :host(.compact) {
        }
        */
        :host(.current),
        :host([temporality="present"]) {
          border: 1px solid #4dacff;

          transition: border 0.267s ease-in-out;
        }

        :host([selected]) {
          border: 1px solid
            var(--timelineRegionSelectedBorderColor, rgb(77, 172, 255));
          background-color: var(
            --timelineRegionSelectedBackgroundColor,
            rgb(58, 129, 191)
          );
          color: var(--timelineRegionSelectedTextColor, rgb(255, 255, 255));
          z-index: 1;
        }

        :host([temporality="past"]) {
          color: rgba(255, 255, 255, 0.5);
          /* filter: brightness(85%); */
        }

        :host(.future),
        :host([temporality="future"]) {
          border: 1px dotted
            var(--timelineRegionSelectedBorderColor, rgb(77, 172, 255));
        }

        .rux-region__segment {
          display: flex;
          align-items: center;
          padding: 0 1em;
          margin: 0;
          height: 30px !important;
          line-height: 1;
        }

        .rux-region__header {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          height: 50%;
        }

        :host .rux-region__label {
          white-space: nowrap;
          overflow: hidden;

          text-overflow: ellipsis;
        }
        /* 
        placeholders for variant sizes
        :host(.standard) .rux-region__label {
        }
        
        :host(.medium) .rux-region__label {
        } */

        :host(.small) .rux-region__label {
          width: 45px;
        }

        :host(.compact) .rux-region__label {
          display: none;
        }

        .rux-region__header rux-status {
          margin-right: 0.5rem;
        }

        :host .rux-region__time {
          display: flex;
          justify-content: flex-end;
          align-items: center;

          height: 50%;
        }

        /* 
        placeholder for variant sizes
        :host(.standard) .rux-region__time {
        }
        
        :host(.medium) .rux-region__time {
          /* display: none; * /
        } */

        :host(.small) .rux-region__time {
          display: none;
        }

        :host(.compact) .rux-region__time {
          display: none;
        }

        .rux-region__time__end-time {
          margin-left: 0.25rem;
        }

        .rux-region__time__end-time::before {
          content: "-";
          margin-right: 0.25rem;
        }
      </style>
      <div
        class="container"
        label="[[label]]: [[_formatTime(_startTime)]]-[[_formatTime(_endTime)]]"
      >
        <div
          class="rux-region__segment rux-region__header rux-region__segment rux-region__header"
        >
          <rux-status class="light-theme" status="[[status]]"></rux-status>
          <div class="rux-region__label">[[label]]</div>
        </div>
        <div class="rux-region__segment rux-region__time">
          <span class="rux-region__time__start-time"
            >[[_formatTime(_startTime)]]</span
          >
          <span class="rux-region__time__end-time"
            >[[_formatTime(_endTime)]]</span
          >
        </div>
      </div>
    `;
  }
  constructor() {
    super();

    /* this._playheadListener = this._playheadCollision.bind(this);
    this._currentTimeListener = this._currentTimeCollision.bind(this); */
    this._windowListener = this._onWindowResize.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this._setDefaultSize();

    this.addEventListener('update', this._windowListener);

    window.addEventListener('resize', this._windowListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.removeEventListener('update', this._windowListener);

    window.removeEventListener('resize');
  }

  _setDefaultSize() {
    // console.log("set default size");
    const now = new Date();
    const today = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        0,
        0,
        0
    );

    const left =
      ((this._startTime.getTime() - today.getTime()) * this.trackWidth) /
      this.duration;

    const width =
      ((this._endTime.getTime() - this._startTime.getTime()) *
        this.trackWidth) /
      this.duration;

    // set the initial values for each region
    //
    this._initialState = {
      width: width,
      left: left,
      scale: this.scale,
    };

    // console.log("track width", this.trackWidth);
    this._updateRegion();
  }

  _onWindowResize() {
    // console.log("window resize");
    this._setDefaultSize();
  }

  _getTime(time) {
    return time;
    /* return new Date(
      time.getUTCFullYear(),
      time.getUTCMonth(),
      time.getUTCDate(),
      time.getUTCHours(),
      time.getUTCMinutes(),
      time.getUTCSeconds()
    ); */
  }

  _formatTime(time) {
    if (isNaN(time)) return false;

    return new Date(time).toLocaleTimeString(this.locale, {
      hour12: false,
    });
  }

  _getRegionWidth() {
    return this._initialState.width * (this.scale / this._initialState.scale);
  }

  _getRegionLeft() {
    return this._initialState.left * (this.scale / this._initialState.scale);
  }

  _resetSize() {
    this.classList.remove('small', 'standard', 'compact');
  }

  _filterUpdated() {
    if (this.filter.toLowerCase() === 'none') {
      this.hidden = false;
    } else if (this.filter.toLowerCase() !== this.status.toLowerCase()) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }

  _updateRegion() {
    const _width = this._getRegionWidth();
    const _left = this._getRegionLeft();

    this.style.left = _left + 'px';
    this.style.width = _width + 'px';

    this._resetSize();
    if (_width > 180) {
      // this is a normal sized widget
      this.classList.add('large');
    } else if (_width < 180 && _width > 140) {
      // this is a mid sized widget without its time element
      this.classList.add('medium');
    } else if (_width < 140 && _width > 40) {
      // this is a small widget without time or label
      this.classList.add('small');
    } else if (_width < 40) {
      // this is a small widget without time or label
      this.classList.add('compact');
    }
  }
}
customElements.define('rux-timeline-region', RuxTimelineRegion);
