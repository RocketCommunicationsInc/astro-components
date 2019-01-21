import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxStatusProgress extends PolymerElement {
  static get properties() {
    return {
      max: {
        type: Number,
        value: 100
      },

      val: {
        type: Number
      },
      label: {
        type: Boolean,
        value: false
      }
    };
  }
  static get template() {
    return html`
      <style>
        /* .progress-ring__circle {
          stroke-dasharray: 10 20;
				} */

        circle {
          transition: stroke-dashoffset 0.35s;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
        }
      </style>

      <input
        value="0"
        type="number"
        step="1"
        min="0"
        max="100"
        on-input="_updateValue"
        placeholder="progress"
      />
      <svg class="progress-ring" width$="[[dimension]]" height$="[[dimension]]">
        <circle
          class="progress-ring__circle"
          stroke="red"
          stroke-dasharray$="[[_circumference]] [[_circumference]]"
          style$="stroke-dashoffset: [[_progress]]"
          stroke-width$="[[stroke]]"
          stroke-linecap="round"
          fill="transparent"
          r$="[[normalizedRadius]]"
          cx$="[[radius]]"
          cy$="[[radius]]"
        />
      </svg>
    `;
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this.radius = 40;
    this.dimension = this.radius * 2;
    this.stroke = 4;
    this.normalizedRadius = this.radius - this.stroke * 2;

    this._circumference = this.normalizedRadius * 2 * Math.PI;

    this._percent = 0;
    this._progress = 0;

    // circle.style.strokeDasharray = `${circumference} ${circumference}`;
    // circle.style.strokeDashoffset = circumference;
    /* 
    console.log("60 = ", this.radius);
    console.log("4 = ", this.stroke);
    console.log("52 = ", this.nomralizedRadius);
    console.log("120 = ", this.circumference); */

    this.setProgress(0);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _updateValue(e) {
    const percent = e.target.value / (e.target.max - e.target.min);
    this.setProgress(percent);
  }

  setProgress(percent) {
    this._percent = percent >= 1 ? percent / 100 : percent;
    console.log("_circumference", this._circumference);
    this._progress = this._circumference - percent * this._circumference;
    console.log("_progress", this._progress);
  }

  ready() {
    super.ready();
  }
}
customElements.define("rux-status-progress", RuxStatusProgress);
