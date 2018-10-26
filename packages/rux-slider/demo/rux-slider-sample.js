import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxSlider } from "../rux-slider.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxSliderSample extends PolymerElement {
  static get template() {
    return html`
      <div style="width: 50%; margin: 1rem auto;">
        <rux-slider 
          axis-labels="0,10,20,30,40,50,60,70, 80,90,100"
          step="10"
          value={{_value}}></rux-slider>

          <br>
          <br>

          <rux-slider 
            axis-labels="min,middle,max"
            value={{_value}}></rux-slider>
      </div>`;
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
