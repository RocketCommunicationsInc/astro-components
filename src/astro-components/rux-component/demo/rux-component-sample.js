import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxComponent } from "/src/astro-components/rux-component/rux-component.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxComponentSample extends PolymerElement {
  static get template() {
    return html`<rux-component></rux-component>`;
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
customElements.define("rux-component-sample", RuxComponentSample);
