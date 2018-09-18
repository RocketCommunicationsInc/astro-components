import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxToggle } from "../rux-toggle.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxToggleSample extends PolymerElement {
  static get template() {
    return html`

    <style>

      .toggle-buttons {  
        padding: 0;
        max-width: 200px;
      }
      .toggle-buttons .rux-form-field {
        width: 100%;
        display: flex;
        justify-content: space-between;

        margin-bottom: 1rem;
      }


    </style>
		<ul class="toggle-buttons">
				<li class="rux-form-field">
					<div id="toggle1">Toggle 1:</div>
					<rux-toggle aria-labeledby="toggle1"></rux-toggle>
				</li>
				<li class="rux-form-field">
					<div id="toggle2">Toggle 2:</div>
					<rux-toggle checked aria-labeledby="toggle1">
						<rux-toggle>
				</li>
				<li class="rux-form-field">
					<div id="toggle3">Toggle 3:</div>
					<rux-toggle disabled aria-labeledby="toggle1"></rux-toggle>
				</li>
				<li class="rux-form-field">
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
