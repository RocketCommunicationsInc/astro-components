import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxProgress } from "/src/astro-components/rux-progress/rux-progress.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxProgressSample extends PolymerElement {
  static get template() {
    return html`
			<rux-progress></rux-progress>
			<rux-progress value="50"></rux-progress>
		`;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Progress Component"
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
customElements.define("rux-progress-sample", RuxProgressSample);
