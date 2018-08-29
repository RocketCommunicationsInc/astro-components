import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxClock } from "/src/astro-components/rux-clock/rux-clock.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxClockSample extends PolymerElement {
  static get template() {
    return html`
      <style>
        .side-by-side {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
        }
      </style>
      <ul class="side-by-side">
        <li>
          <figure>
            <rux-clock aos=[[demoAOS]] los=[[demoLOS]]></rux-clock>
          </figure>
        </li>
      </ul>
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Clock Component"
      }
    };
  }

  constructor() {
    super();

    this.demoAOS = Date.now() - 1000000;
    this.demoLOS = new Date();
  }

  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  ready() {
    super.ready();
  }
}
customElements.define("rux-clock-sample", RuxClockSample);
