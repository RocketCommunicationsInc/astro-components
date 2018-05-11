import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxSegmentedButton } from "/src/astro-components/rux-segmented-button/rux-segmented-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxComponentSample extends PolymerElement {
  static get template() {
    return html`<rux-segmented-button></rux-segmented-button>`;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Segmented Button Component"
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
customElements.define("rux-segmented-button-sample", RuxComponentSample);
