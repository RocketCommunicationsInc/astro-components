import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxClock } from "/src/astro-components/rux-clock/rux-clock.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxClockSample extends PolymerElement {
  static get template() {
    return html`<rux-clock></rux-clock>`;
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
