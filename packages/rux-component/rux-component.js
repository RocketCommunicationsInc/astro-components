import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

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
      <style>
      .rux-component {
        padding: 1em;
        margin: 1em auto;
        max-width: 15em;
        border: 1px solid red;
      }
      </style>
      
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
