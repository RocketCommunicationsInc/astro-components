import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
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
      <style>
      *[hidden] {
        display: none !important;
      }
      
      .rux-slider {
        display: flex;
        flex-direction: column;
      }
      
      .rux-slider__label {
        display: flex;
        justify-content: space-between;
      }
      
      .rux-slider__control {
        display: flex;
        flex-direction: column;
        width: 100%;
        flex-grow: 1;
      }
      
      .rux-slider__control__range {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 10px 0;
        background: none;
      }
      
      input[type="range"]:focus {
        outline: none;
      }
      
      .rux-slider__control__range::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
      
        background-image: url("data:image/svg+xml,%3Csvg%20viewbox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22a%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%2210%22%2F%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cuse%20fill%3D%22%23005A8F%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20stroke%3D%22%235CB3FF%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%229.5%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20fill%3D%22%23FFF%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%225%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
      
        margin-top: -7px;
      
        cursor: pointer;
      
        filter: drop-shadow(0 2px 0 rgba(0, 0, 0, 0.66));
      }
      
      .rux-slider__control__range:active::-webkit-slider-thumb {
        filter: none;
      }
      
      .rux-slider__control__range::-moz-range-thumb {
        -moz-appearance: none;
        height: 20px;
        width: 20px;
        background-color: transparent;
      
        background-image: url("data:image/svg+xml,%3Csvg%20viewbox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22a%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%2210%22%2F%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cuse%20fill%3D%22%23005A8F%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20stroke%3D%22%235CB3FF%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%229.5%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20fill%3D%22%23FFF%22%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%225%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 -1px;
        border: none;
      
        cursor: pointer;
      
        filter: drop-shadow(0 2px 0 rgba(224, 60, 60, 0.66));
      }
      
      .rux-slider__control__range::-webkit-slider-thumb:hover,
      .rux-slider__control__range::-webkit-slider-thumb:focus {
        /* background-position-x: -17px; */
      }
      
      .rux-slider__control__range::-moz-range-thumb:hover,
      .rux-slider__control__range::-moz-range-thumb:focus {
        /* background-position-x: -17px; */
      }
      
      .rux-slider__control__range::-moz-range-thumb:active {
        /* background-position-x: -34px; */
      }
      
      .rux-slider__control__range::-webkit-slider-thumb:active {
        /* background-position-x: -34px; */
      }
      
      .rux-slider__control__range:disabled::-moz-range-thumb,
      .rux-slider__control__range:disabled::-moz-range-thumb:active,
      .rux-slider__control__range:disabled::-moz-range-thumb:hover,
      .rux-slider__control__range:disabled::-moz-range-thumb:focus {
        cursor: not-allowed;
        /* background-position-x: -51px; */
      }
      
      .rux-slider__control__range:disabled::-webkit-slider-thumb,
      .rux-slider__control__range:disabled::-webkit-slider-thumb:active,
      .rux-slider__control__range:disabled::-webkit-slider-thumb:hover,
      .rux-slider__control__range:disabled::-webkit-slider-thumb:focus {
        cursor: not-allowed;
        /* background-position-x: -51px; */
      }
      
      .rux-slider__control__range:disabled::-webkit-slider-runnable-track {
        cursor: not-allowed;
        background: linear-gradient(
          to bottom,
          #416483 0%,
          #416483 59%,
          #405e7a 60%,
          #405e7a 100%
        );
      }
      
      .rux-slider__control__range::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        border-radius: 2px;
        background: #82bae6;
        background: linear-gradient(
          to bottom,
          #82bae6 0%,
          #82bae6 59%,
          #81a8c7 60%,
          #81a8c7 100%
        );
      }
      
      .rux-slider__control__range:disabled::-moz-range-track {
        cursor: not-allowed;
        background: linear-gradient(
          to bottom,
          #416483 0%,
          #416483 59%,
          #405e7a 60%,
          #405e7a 100%
        );
      }
      
      .rux-slider__control__range::-moz-range-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        border-radius: 2px;
        background: #82bae6;
        background: linear-gradient(
          to bottom,
          #82bae6 0%,
          #82bae6 59%,
          #81a8c7 60%,
          #81a8c7 100%
        );
      }
      
      .rux-slider__control__labels {
        position: relative;
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 0 0.1rem;
        margin: 0.5em 0 0 0;
      
        color: rgb(131, 137, 142);
        font-size: 0.875rem;
      }
      
      /* 
      Fake tick marks, sort of works, but label using flex are imprecise
      .rux-slider__control__labels li::before {
        position: absolute;
        content: "|";
        font-size: 0.5rem;
        top: -100%;
      } */
      
      input[type="range"]::-moz-focus-outer {
        border: 0;
      }
    </style>      

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
