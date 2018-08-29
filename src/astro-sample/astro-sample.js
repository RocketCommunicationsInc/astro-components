import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroSample extends PolymerElement {
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
      <style>
        :host {
          
          width: 100%;
          margin: 0.5em;
          padding: 0 0 0 2rem;

          cursor: pointer;
          color: var(--sampleLinkColor, rgba(255,255,255,.66));

          
        }

        

        :host(:hover) {
          color: var(--sampleLinkHoverColor, rgba(255,255,255,1));
          
        }

        
      </style>
      <slot></slot>
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    // set the role to sample
    this.setAttribute("role", "sample");
  }

  ready() {
    super.ready();
  }
}

customElements.define("astro-sample", AstroSample);
