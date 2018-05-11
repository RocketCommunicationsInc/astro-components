import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/array-selector.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxSegmentedButton extends PolymerElement {
  static get properties() {
    return {
      selected: {
        type: Object
      },
      data: {
        type: Object,
        notify: true
      }
    };
  }

  static get template() {
    return html`
      <style>
      :host {
      }
      
      .rux-segmented-buttons {
        display: flex;
      
        overflow: auto;
      
        padding: 0;
      
        list-style: none;
      }
      
      .rux-segmented-button label {
        display: flex;
        justify-content: center;
        align-items: center;
      
        width: auto;
        height: 1.5rem;
      
        padding: 0 0.75rem;
      
        border: none;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        border-right: 1px solid #15057a;
      
        color: #fff;
        background-color: var(--button-background);
      
        font-size: 0.875rem;
      
        cursor: pointer;
      }
      
      .rux-segmented-button input {
        display: none;
      }
      
      .rux-segmented-button label {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      .rux-segmented-button input:checked + label {
        background-color: var(--button-background--hover);
      }
      
      .rux-segmented-button:active,
      .rux-segmented-button:default:active,
      .rux-segmented-button.selected {
        background: #0182ce;
        outline: none;
      }
      
      .rux-segmented-button label:hover {
        background: var(--button-background--hover);
        outline: none;
      }
    </style>      

      <ul class="rux-segmented-buttons">
        <dom-repeat id="buttonSegments" items="{{data}}">
          <template>
            <li class="rux-segmented-button">
              <input type="radio" name="rux-group" id="[[item.label]]" on-click="_selectSegment" />
              <label for$="[[item.label]]">[[item.label]]</label>
            </li>
          </template>
        </dom-repeat>
      </ul>

      <array-selector id="selector" items="{{data}}" selected="{{selected}}"></array-selector>
      `;
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

  _selectSegment(e) {
    let item = this.$.buttonSegments.itemForElement(e.target);
    this.$.selector.select(item);
    this.data.selected = item;
    this.notifyPath("data.selected");
  }
}

customElements.define("rux-segmented-button", RuxSegmentedButton);
