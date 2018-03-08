import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxProgress extends PolymerElement {
  static get properties() {
    return {
      max: {
        type: Number,
        value: 100
      },
      value: Number,
      label: {
        type: Boolean,
        value: false
      }
    };
  }
  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-progress/rux-progress.css">

      <div class="rux-progress">
        <progress value="[[value]]" max=[[max]]></progress>
        <div class="rux-progress__value" hidden="[[!label]]">[[value]]</div>
      </div>`;
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
customElements.define("rux-progress", RuxProgress);
