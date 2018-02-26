import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxComponent extends PolymerElement {
  static get properties() {
    return {
      min: String,
      max: String,
      value: String,
      text: String
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="/src/astro-components/rux-component/rux-component.css">
      <div class="rux-component">This is a blank component template written in Polymer 3. Use me as a starting point for a new Component</div>`;
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

customElements.define("rux-component", RuxComponent);
