import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxSpectrumAnalyzer } from "/src/astro-components/rux-spectrum-analyzer/rux-spectrum-analyzer.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxSpectrumAnalyzerSample extends PolymerElement {
  static get template() {
    return html`
    <rux-spectrum-analyzer 
    chart-legend-x="freq" 
    chart-legend-y="pwr" 
    chart-title="signals" 
    height="384" 
    width="500" 
    x-scale-min="900" 
    x-scale-max="2301" 
    x-scale-step="175" 
    y-scale-min="-30" 
    y-scale-max="0"
    data-source="wss://satellite-1.astrouxds.com"
    data-source-type="web-socket"
    > 
  </rux-spectrum-analyzer>
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Spectrum Analyzer Component"
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
customElements.define(
  "rux-spectrum-analyzer-sample",
  RuxSpectrumAnalyzerSample
);
