import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxSpectrumAnalyzer } from "/src/astro-components/rux-spectrum-analyzer/rux-spectrum-analyzer.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxSpectrumAnalyzerSample extends PolymerElement {
  static get template() {
    return html`<rux-spectrum-analyzer></rux-spectrum-analyzer>`;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Sepctrum Analyzer Component"
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
