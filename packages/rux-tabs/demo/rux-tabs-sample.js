import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxTabs } from "/src/astro-components/rux-tabs/rux-tabs.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxComponentSample extends PolymerElement {
  static get template() {
    return html`<rux-tabs></rux-tabs>`;
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
customElements.define("rux-tabs-sample", RuxComponentSample);
