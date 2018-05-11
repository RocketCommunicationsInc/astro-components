import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";

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
      <style>
      :host {
        display: none;
      
        font-size: 0.875rem;
      
        margin: 1em;
      
        min-width: 15em;
        max-width: 20em;
        position: relative;
      
        border-top: 3px solid #047cdc;
        z-index: 10000;
      
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      :host([opened]) {
        display: block;
      }
      
      :host::before {
        content: "";
        display: block;
        position: absolute;
      
        width: 1.1875rem;
        height: 1.1875rem;
      
        background-color: #047cdc;
        z-index: 1;
      
        margin: -13px 0 0 15px;
        transform: rotate(45deg);
      }
      
      .rux-pop-up {
      }
      
      :host ul {
        position: relative;
        list-style: none;
        padding: 0;
        margin: 0;
        background: none;
        background-color: #fff;
      
        z-index: 2;
      }
      
      /* .rux-pop-up li,
      .satcom-pop-up li {
        border-bottom: 1px solid #f0f1f3;
      } */
      
      :host li:last-child {
        border: none;
      }
      
      :host a {
        display: block;
        padding: 0.5em;
        color: #000;
        text-decoration: none;
      
        min-width: 15em;
        max-width: 20em;
      
        word-wrap: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      
      :host a:hover {
        /* font-weight: 700; */
        background-color: #b1d5f2;
      }
      
      .rux-pop-up--top {
        border-top: 3px solid #047cdc;
      }
      
      .rux-pop-up--top::before {
        content: "";
        display: block;
        position: absolute;
      
        width: 1.1875rem;
        height: 1.1875rem;
      
        background-color: #047cdc;
        z-index: 1;
      
        margin: -13px 0 0 15px;
        transform: rotate(45deg);
      }
      
      .rux-pop-up--bottom {
        border-bottom: 3px solid #047cdc;
      }
      
      .rux-pop-up--bottom::after {
        content: "";
        display: block;
        position: absolute;
        border-bottom: 1px solid #047cdc;
        border-right: 1px solid #047cdc;
        width: 1.1875rem;
        height: 1.1875rem;
      
        background-color: #047cdc;
      
        margin: -6px 0 0 10px;
        transform: rotate(45deg);
      }
      
      .rux-pop-up--left {
        border-left: 3px solid #047cdc;
      }
      
      .rux-pop-up--left::before {
        content: "";
        display: block;
        position: absolute;
        border-bottom: 1px solid #047cdc;
        border-left: 1px solid #047cdc;
        width: 1.1875rem;
        height: 1.1875rem;
      
        background-color: #047cdc;
      
        margin: 8px 0 0 -13px;
        transform: rotate(45deg);
      }
      
      .rux-pop-up--right {
        border-right: 3px solid #047cdc;
      }
      
      .rux-pop-up--right::before {
        content: "";
        display: block;
        position: absolute;
        border-top: 1px solid #047cdc;
        border-right: 1px solid #047cdc;
        width: 1.1875rem;
        height: 1.1875rem;
      
        background-color: #047cdc;
      
        right: 0;
        margin: 8px -13px 0 0;
        transform: rotate(45deg);
      }
      
      .rux-pop-up__underlay {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: red;
        opacity: 0.5;
        z-index: 9999;
      }
      
      /*
      
        .rux-pop-up--top-left
        .rux-pop-up--top-right
        .rux-pop-up--bottom-left
        .rux-pop-up--bottom-right
        
        .rux-pop-up--left-top
        .rux-pop-up--left-bottom
        .rux-pop-up--top-left
      
      */
      
      </style>

      
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
