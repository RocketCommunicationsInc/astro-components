import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxProgress } from "../rux-progress.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxProgressSample extends PolymerElement {
  static get template() {
    return html`
      <div class="side-by-side">
        <div class="indeterminate">
          <rux-progress></rux-progress>
        </div>
        <div class="determinate">
          <rux-progress value="50"></rux-progress>
        </div>
      </div>
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
