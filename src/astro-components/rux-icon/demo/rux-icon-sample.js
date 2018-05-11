import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxIcon } from "/src/astro-components/rux-icon/rux-icon.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxIconSample extends PolymerElement {
  static get template() {
    return html`<rux-icon icon="advanced-status:mission"></rux-icon>`;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Icon Component"
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
customElements.define("rux-icon-sample", RuxIconSample);
