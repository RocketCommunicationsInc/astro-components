import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTab extends PolymerElement {
  static get properties() {
    return {
      selected: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="/src/astro-components/rux-tabs/rux-tab.css">
      <slot></slot>
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    // set the role to tab
    this.setAttribute("role", "tab");
  }

  ready() {
    super.ready();
  }
}

customElements.define("rux-tab", RuxTab);
