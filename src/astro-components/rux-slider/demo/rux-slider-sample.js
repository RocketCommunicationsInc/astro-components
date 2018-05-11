import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxSlider } from "/src/astro-components/rux-slider/rux-slider.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxSliderSample extends PolymerElement {
  static get template() {
    return html`<rux-slider value={{_value}}></rux-slider>`;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Slider Component"
      }
    };
  }

  constructor() {
    super();

    this._value = 50;
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
customElements.define("rux-slider-sample", RuxSliderSample);
