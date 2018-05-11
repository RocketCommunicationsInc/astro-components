import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxClock } from "/src/astro-components/rux-log/rux-log.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxLogSample extends PolymerElement {
  static get template() {
    return html`
      <style>
        .side-by-side {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
        }
      </style>
      <ul class="side-by-side">
        <li>
          <figure>
            <rux-log></rux-log>
          </figure>
        </li>
      </ul>
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Clock Component"
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
customElements.define("rux-log-sample", RuxLogSample);
