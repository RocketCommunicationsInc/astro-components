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
        type: Number,
        value: 0,
        observer: "setProgress"
      },
      label: {
        type: Boolean,
        value: false
      },
      status: {
        type: String,
        value: "normal"
      }
    };
  }
  static get template() {
    return html`
      <style>
        /* .progress-ring__circle {
          stroke-dasharray: 10 20;
				} */

        .progress-container {
          position: relative;
        }

        circle {
          transition: stroke-dashoffset 0.35s;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;

          position: absolute;
        }

        output {
          display: block;
          height: 44px;
          width: 44px;

          position: absolute;
        }
      </style>

      <div class="progress-container">
        <output>[[_percent]]</output>
        <svg
          class="progress-ring"
          width$="[[dimension]]"
          height$="[[dimension]]"
        >
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
      </div>
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
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  setProgress() {
    this._percent = this.val >= 1 ? Math.floor(this.val / 100) : this.val;
    console.log("this._percent", this._percent);

    this._progress = this._circumference - this._percent * this._circumference;
  }

  ready() {
    super.ready();
  }
}
customElements.define("rux-status-progress", RuxStatusProgress);
