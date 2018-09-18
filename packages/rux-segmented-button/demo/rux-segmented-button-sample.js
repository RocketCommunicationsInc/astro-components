import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxSegmentedButton } from "../rux-segmented-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxSegmentedButtonSample extends PolymerElement {
  static get template() {
    return html`
      <rux-segmented-button data={{segmentOne}}></rux-segmented-button>
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Segmented Button Component"
      }
    };
  }

  constructor() {
    super();

    this.segmentOne = [
      {
        label: "Hour"
      },
      {
        label: "Day"
      },
      {
        label: "Week"
      }
    ];
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
customElements.define("rux-segmented-button-sample", RuxSegmentedButtonSample);
