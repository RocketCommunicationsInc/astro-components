import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxIcon } from "../../rux-icon/rux-icon.js";
import { RuxStatus } from "../rux-status.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxStatusSample extends PolymerElement {
  static get template() {
    return html`
    <h1>test</h1>
    <rux-status status="off"></rux-status>
    <rux-status status="standby"></rux-status>
    <rux-status status="normal"></rux-status>
    <rux-status status="caution"></rux-status>
    <rux-status status="serious"></rux-status>
    <rux-status status="critical"></rux-status>
    `;
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
customElements.define("rux-status-sample", RuxStatusSample);
