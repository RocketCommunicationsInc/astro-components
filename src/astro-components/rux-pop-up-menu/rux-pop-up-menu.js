import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxPopUpMenu extends PolymerElement {
  static get properties() {
    return {
      orientation: {
        type: String
      },
      target: {
        type: Object,
        observer: "_targetChanged"
      },
      menu: {
        type: Object
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-pop-up-menu/rux-pop-up-menu.css">

      <div class$="rux-pop-up rux-pop-up--[[orientation]]">
        <ul>
          <dom-repeat id="pop-up-menu" items="{{menu}}">
            <template>
                <li>{{item.label}}</li>
            </template>
          </dom-repeat>
        </ul>
      </div>
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

  ready() {
    super.ready();
  }

  _targetChanged(e) {
    console.log(e);
    const _target =
      typeof e === "string" ? this.getRootNode().getElementById(e) : e;
    console.log(_target);

    const _targetBounds = _target.getBoundingClientRect();
    const _popUpBounds = this.getBoundingClientRect();

    let _left = _targetBounds.left;
    let _top = _targetBounds.bottom;

    // Handle edge cases where the menu might be off screen
    if (_targetBounds.left + _popUpBounds.width > window.innerWidth) {
      _left = window.innerWidth - _popUpBounds.width;
    } else if (
      _targetBounds.bottom + _popUpBounds.height >
      window.innerHeight
    ) {
      _top = window.innerHeight - _popUpBounds.height;
    }

    // generate CSS for position of the element
    const _css = `
            position: fixed; 
            top: ${_top}px; 
            left: ${_left}px;`;

    this.setAttribute("style", _css);
  }
}

customElements.define("rux-pop-up-menu", RuxPopUpMenu);
