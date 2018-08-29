import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxStatus } from "/src/astro-components/rux-status/rux-status.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxStatusSample extends PolymerElement {
  static get template() {
    return html`<rux-status status="ok"></rux-status>`;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Template Component"
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
customElements.define("rux-status-sample", RuxStatusSample);
