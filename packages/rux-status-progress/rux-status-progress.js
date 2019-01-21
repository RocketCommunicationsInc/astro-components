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
      min: {
        type: Number,
        value: 0
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
        .progress-container {
          display: inline-block;
          position: relative;
          outline: 2px solid red;
        }

        circle {
          transition: stroke-dashoffset 0.35s;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;

          outline: 1px solid lightblue;

          position: absolute;
          margin: 0;
        }

        output {
          display: flex;

          height: 100%;
          width: 100%;
          line-height: 0;

          justify-content: center;
          align-items: center;

          outline: 1px solid yellowgreen;

          position: absolute;
        }
      </style>

      <div class="progress-container">
        <output>[[val]]%</output>
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

    this.radius = 40;
    this.dimension = this.radius * 2;
    this.stroke = 4;
    this.normalizedRadius = this.radius - this.stroke * 2;

    this._circumference = this.normalizedRadius * 2 * Math.PI;

    this._percent = 0;
    this._progress = 0;
  }

  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  setProgress() {
    this._percent = this.val / 100;
    this._progress = this._circumference - this._percent * this._circumference;
  }

  ready() {
    super.ready();
  }
}
customElements.define("rux-status-progress", RuxStatusProgress);
