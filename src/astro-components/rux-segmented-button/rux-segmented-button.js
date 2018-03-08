import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/array-selector.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";

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
      <link rel="stylesheet" href="src/astro-components/rux-segmented-button/rux-segmented-button.css">

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
