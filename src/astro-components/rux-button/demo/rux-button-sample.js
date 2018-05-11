import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxButton } from "/src/astro-components/rux-button/rux-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxButtonSample extends PolymerElement {
  static get template() {
    return html`<rux-button>Sample Button</rux-button>`;
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
customElements.define("rux-button-sample", RuxButtonSample);
