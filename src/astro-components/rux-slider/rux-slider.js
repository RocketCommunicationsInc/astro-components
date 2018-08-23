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
      :root {
        --thumbSize: var(--controlOptionSize, 1.25rem);
        --thumbShadow: 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12),
          0 3px 5px rgba(0, 0, 0, 0.2);
        --thumbShadowActive: inset 0 0 0 4px var(--colorPrimary), var(--thumbShadow);

        --trackHeight: 2px;
        --trackCursor: pointer;
        --value: 50%;
      }


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
      

      .rux-slider label input {
        margin-left: auto;
        margin-right: 0;
      }
      
      .rux-range {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
      
        background: none;
      
        width: 100%;
        
      }

      input[type="range"]:focus {
        outline: none;
      }

      .rux-range::-webkit-slider-runnable-track {
        display: flex;
        align-items: center;

        /* width: 100%; */
        height: var(--trackHeight);
        cursor: var(--trackCursor);

        background-color: var(--sliderTrackBackgroundColor, rgb(217, 217, 217));
        outline: 1px solid var(--sliderTrackBorderColor, transparent);

        background-image: linear-gradient(
          to right,
          var(--sliderSelectedTrackBackgroundColor, rgb(77, 172, 255)) 0%,
          var(--sliderSelectedTrackBackgroundColor, rgb(77, 172, 255))
            calc(1% * var(--value)),
          var(--sliderTrackBackgroundColor, rgb(217, 217, 217))
            calc(1% * var(--value)),
          var(--sliderTrackBackgroundColor, rgb(217, 217, 217)) 100%
        );
      }


      .rux-range::-webkit-slider-thumb {
        -webkit-appearance: none;

        position: relative;

        height: var(--thumbSize);
        width: var(--thumbSize);

        border-radius: 100%;
        border: 1px solid var(--sliderThumbBorderColor, rgb(255, 255, 255));
        background-color: var(--sliderThumbBackgroundColor, rgb(0, 90, 143));

        cursor: pointer;
        box-shadow: inset 0 0 1px 0 rgba(255, 255, 255, 0.9), var(--thumbShadow);
      }

      .rux-range:disabled::-webkit-slider-runnable-track {
        opacity: var(--disabledOpacity, 0.4);
        cursor: var(--disabledCursor, not-allowed);
      }

      .rux-range:disabled::-webkit-slider-thumb {
        cursor: var(--disabledCursor, not-allowed);
      }

      .rux-range:not(:disabled)::-webkit-slider-thumb:active {
        border-color: var(--colorSecondary);
        background-color: #fff;
        box-shadow: var(--thumbShadowActive);
      }

      .rux-range:not(:disabled)::-webkit-slider-thumb:focus,
      .rux-range:not(:disabled)::-webkit-slider-thumb:hover:not(:active) {
        background-color: var(--sliderHoverThumbBackgroundColor, rgb(58, 129, 191));
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


          <input type="range" 
            on-input="_updateValue" 
            class="rux-range" 
            type="range" 
            min=[[min]] 
            max=[[max]] 
            step=[[step]] 
            value={{val}} 
            aria-labeledby=[[_name]] 
            disabled=[[disabled]] />
          
          
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

    this._range = this.shadowRoot.querySelector("input[type=range]");
    this._updateVisual();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _updateVisual() {
    const min = this._range.getAttribute("min");
    const max = this._range.getAttribute("max");
    const val = this._range.value;

    let dif = ((val - min) / (max - min)) * 100;

    this._range.style.setProperty("--value", dif);
  }

  _updateValue(e) {
    this.val = e.target.value;
    // e.target.style.setProperty("--value", e.target.value);
    this._updateVisual(e.target);
  }
  _getAxisLabels(values) {
    return values.split(",");
  }
}
customElements.define("rux-slider", RuxSlider);
