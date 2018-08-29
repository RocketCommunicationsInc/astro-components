import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxPushButton } from "/src/astro-components/rux-push-button/rux-push-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxPushButtonSample extends PolymerElement {
  static get template() {
    return html`<rux-push-button checked-label="Active" unchecked-label="Inactive Button"></rux-push-button>`;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Push Button Component"
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
customElements.define("rux-component-sample", RuxPushButtonSample);
