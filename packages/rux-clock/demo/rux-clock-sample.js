import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxClock } from "../rux-clock.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxClockSample extends PolymerElement {
  static get template() {
    return html`<rux-clock aos=[[demoAOS]] los=[[demoLOS]]></rux-clock>`;
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
