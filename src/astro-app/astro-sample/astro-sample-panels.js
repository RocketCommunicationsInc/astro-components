import { PolymerElement } from "@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroSamplePanels extends PolymerElement {
  static get properties() {
    return {
      type: String
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    // set the role to sample
    this.setAttribute("role", "samplelist");

    let _panels = this.querySelectorAll("astro-sample-panel");

    window.dispatchEvent(
      new CustomEvent("register-panels", {
        detail: { panels: _panels }
      })
    );

    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }
}

customElements.define("astro-sample-panels", AstroSamplePanels);
