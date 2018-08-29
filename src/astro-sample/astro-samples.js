import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { AstroSample } from "./astro-sample.js";
import { AstroSamplePanels } from "./astro-sample-panels.js";
import { AstroSamplePanel } from "./astro-sample-panel.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroSamples extends PolymerElement {
  static get is() {
    return "astro-samples";
  }
  static get properties() {
    return {
      _samples: {
        type: Object,
        observer: "_registerSamples"
      },
      _panels: {
        type: Object
      }
    };
  }

  static get template() {
    return html`
      <slot></slot>
    `;
  }

  constructor() {
    super();

    this._updateSampleListener = this._setSample.bind(this);
    this._registerPanelsListener = this._registerPanels.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this._samples = this._registerSamples();
    this._panels = null;

    window.addEventListener("register-spanels", this._registerPanelsListener);

    this.addEventListener("click", this._onClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener(
      "register-spanels",
      this._registerPanelsListener
    );
  }

  ready() {
    super.ready();
  }

  _onClick(e) {
    if (e.target.getAttribute("role") === "sample") {
      this._setSample(e.target);
    }
  }

  _registerSamples() {
    return Array.from(this.querySelectorAll("astro-sample"));
  }

  _registerPanels(e) {
    this._panels = Array.from(e.detail.panels);

    // if a sample isn’t selected in markup then default to first sample in the list
    const selectedSample = this._samples.find(
      sample => sample.selected || this._samples[0]
    );

    this._setSample(selectedSample);
  }

  _reset() {
    // hide everything
    this._samples.forEach(sample => (sample.selected = false));
    this._panels.forEach(panel => (panel.hidden = true));
  }

  /*
  **
  ** Allow for either id or aria-controls association
  **
  */
  _getAssociation() {
    if (sample.getAttribute("id") && !sample.getAttribute("aria-controls")) {
      return sample.getAttribute("id");
    } else if (
      !sample.getAttribute("id") &&
      sample.getAttribute("aria-controls")
    ) {
      return sample.getAttribute("aria-controls");
    }
  }

  _setSample(selectedSample) {
    // console.log("test");
    this._reset();

    // find the panel whose aria-labeldby attribute matches the sample’s id
    const selectedPanel = this._panels.find(
      panel =>
        panel.getAttribute("aria-labeledby") ===
        selectedSample.getAttribute("id")
    );

    selectedSample.selected = true;
    selectedPanel.hidden = false;
  }
}

customElements.define("astro-samples", AstroSamples);
