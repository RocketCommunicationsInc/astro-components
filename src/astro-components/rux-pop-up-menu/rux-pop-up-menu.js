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
      opened: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },
      target: {
        type: Object,
        notify: true,
        observer: "_targetChanged"
      },
      menuItems: {
        type: Array
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-pop-up-menu/rux-pop-up-menu.css">

      
      <nav role="menu">
        <ul>
          <template is="dom-repeat" id="pop-up-menu" items="[[menuItems]]">
            <li><a data-action$=[[item.action]] on-click="_menuClick">[[item.label]]</a></li>
          </template>
        </ul>
      </nav>
    `;
  }

  constructor() {
    super();

    this._underlay = null;
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

  _closeMenu() {
    this._underlay.removeEventListener("mousedown", event);
    this._underlay.remove();
    this.opened = false;
    this.target = null;
  }

  _menuClick(e) {
    // just in case in the future we want to do any
    // manipulation of the defined action prior to
    // dispatching an event
    const menuAction = e.currentTarget.dataset;

    window.dispatchEvent(
      new CustomEvent("pop-up-menu-event", {
        detail: menuAction
      })
    );

    this._closeMenu();
  }

  _targetChanged(target) {
    if (target == null) return;

    /* 
    Toying with the idea of a different method of passing in a target
    const _target =
      typeof target === "string"
        ? this.getRootNode().getElementById(target)
        : target; */
    const _targetBounds = target.getBoundingClientRect();
    const _popUpBounds = this.getBoundingClientRect();
    const _mouse = target.clientX;

    console.log("_mouse", _mouse);

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

    const _css = `
            position: fixed; 
            top: ${_top}px; 
            left: ${_left}px;
            z-index: 10000`;

    this.setAttribute("style", _css);

    this._underlay = document.createElement("div");
    this._underlay.setAttribute("id", "test");
    this._underlay.setAttribute(
      "style",
      `position: fixed; 
          top: 0; 
          left: 0;
          height: 100%;
          width: 100%;
          background-color: transparent;
          z-index: 9999`
    );

    this.parentNode.append(this._underlay);
    this._underlay.addEventListener("mousedown", event => {
      this._closeMenu();
    });

    this.opened = true;
  }
}

customElements.define("rux-pop-up-menu", RuxPopUpMenu);
