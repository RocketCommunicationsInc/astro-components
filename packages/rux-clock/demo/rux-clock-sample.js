import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxClock } from "../rux-clock.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxClockSample extends PolymerElement {
  static get template() {
    return html`
    <div style="display: flex; flex-direction: column; git ajustify-content: center; align-items: center;">
      <rux-clock aos=[[demoAOS]] los=[[demoLOS]]></rux-clock>
      <br>
      <rux-clock aos=[[demoAOS]] los=[[demoLOS]] compact></rux-clock>
    </div>`;
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
