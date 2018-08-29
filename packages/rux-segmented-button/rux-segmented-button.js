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
        box-sizing: border-box;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
      
      
.rux-segmented-buttons {
  display: inline-flex;
  
  height: 1.6875rem;
  overflow: hidden;

  padding: 0;
  margin: 0;

  list-style: none;

  border-radius: var(--controlBorderRadius, 3px);
  border: 1px solid var(--segmentedButtonBorderColor, rgb(30, 47, 66));
}

.rux-segmented-button {
  height: 1.6875rem;
  width: auto;
  margin: 0;
  padding: 0;
}

.rux-segmented-button label {
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 1.5625rem;

  margin: 0;
  padding: 0 0.75rem;

  border: none;
  border-right: 1px solid var(--segmentedButtonBorderColor, rgb(30, 47, 66));

  color: var(--segmentedButtonTextColor, #fff);
  background-color: var(--segmentedButtonBackgroundColor, rgb(0, 90, 143));

  font-size: 0.875rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
}

.rux-segmented-button:last-of-type label {
  border-right: none !important;
}

.rux-segmented-button input {
  display: none !important;
  
}

.rux-segmented-button label:hover {
  background-color: var(
    --segmentedButtonHoverBackgroundColor,
    rgb(58, 129, 191)
  );
  color: var(--segmentedButtonHoverTextColor, #fff);
  outline: none;
}

.rux-segmented-button input:checked + label {
  background-color: var(
    --segmentedButtonSelectedBackgroundColor,
    rgb(58, 129, 191)
  );
  color: var(--segmentedButtonSelectedTextColor, #fff);
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
