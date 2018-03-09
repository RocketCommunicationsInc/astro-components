import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxSlider extends PolymerElement {
  static get properties() {
    return {
      min: {
        type: Number,
        value: 0
      },
      max: {
        type: Number,
        value: 100
      },
      step: {
        type: Number,
        value: 1
      },
      label: String,
      axisLabels: String,
      disabled: Boolean,
      val: {
        type: Number,
        notify: true
      },
      _name: {
        type: String,
        value: () => {
          return `slider-${Math.floor(Math.random() * 1000)}`;
        }
      },
      hideInput: {
        type: Boolean,
        value: false
      }
    };
  }
  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-slider/rux-slider.css">

      <div class="rux-slider">
        <div class="rux-slider__label">
          <label id=[[_name]] hidden=[[!label]]>[[label]]</label>
          <input type="number" on-input="_updateValue" min=[[min]] max=[[max]] step=[[step]] value={{val}} aria-labeledby=[[_name]] hidden=[[hideInput]] />
        </div>
        <div class="rux-slider__control">
          <input type="range" on-input="_updateValue" class="rux-slider__control__range type="range" min=[[min]] max=[[max]] step=[[step]] value={{val}} aria-labeledby=[[_name]] disabled=[[disabled]] />
          <ol class="rux-slider__control__labels" hidden=[[!axisLabels]]>
            <dom-repeat id="sliderAxisLabels" items=[[_getAxisLabels(axisLabels)]]>
              <template>
                <li>[[item]]</li>
              </template>
            </dom-repeat>
          </ol>
        </div>
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
  _updateValue(e) {
    this.val = e.target.value;
  }
  _getAxisLabels(values) {
    return values.split(",");
  }
}
customElements.define("rux-slider", RuxSlider);
