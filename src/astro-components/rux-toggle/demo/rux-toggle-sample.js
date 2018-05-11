import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxToggle } from "/src/astro-components/rux-toggle/rux-toggle.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxToggleSample extends PolymerElement {
  static get template() {
    return html`
		<ul class="toggle-buttons">
				<li>
					<div id="toggle1">Toggle 1:</div>
					<rux-toggle aria-labeledby="toggle1"></rux-toggle>
				</li>
				<li>
					<div id="toggle2">Toggle 2:</div>
					<rux-toggle checked aria-labeledby="toggle1">
						<rux-toggle>
				</li>
				<li>
					<div id="toggle3">Toggle 3:</div>
					<rux-toggle disabled aria-labeledby="toggle1"></rux-toggle>
				</li>
				<li>
					<div id="toggle4">Toggle 4:</div>
					<rux-toggle checked disabled aria-labeledby="toggle1"></rux-toggle>
				</li>
			</ul>`;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Toggle Component"
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
customElements.define("rux-toggle-sample", RuxToggleSample);
