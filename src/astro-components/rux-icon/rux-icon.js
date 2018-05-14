import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxIconLibrary } from "./rux-icon-library.js";
import "./rux-icons-svg.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxIcon extends PolymerElement {
  static get properties() {
    return {
      icon: {
        type: String,
        observer: "_updateIcon"
      },
      size: {
        type: String
      },
      color: {
        type: String
      }
    };
  }
  static get template() {
    return html`
    <style>
    :host {
      display: inline-block;
      line-height: 0;
      fill: var(--default-icon-color);
      height: var(--icon-size--default, 58px);
      /* width: var(--default-icon-width, 44px); */
      /* outline: 1px solid red; */
    }
    
    :host svg {
      height: 100%;
      width: auto;
    }
    
    /* small variant */
    
    :host(.rux-icon--small) {
      height: var(--icon-size--small, 32px);
      width: var(--icon-size--small, 32px);
    }
    
    /* status symbol icon size */
    
    :host(.rux-icon--status) {
      height: var(--icon-size--status, 12px);
      width: var(--icon-size--status, 12px);
    }
    
    :host(.rux-icon--button) {
      height: var(--icon-size--button, 19px);
      width: var(--icon-size--button, 19px);
      fill: var(--icon-color--button);
    }
    
    :host(.rux-icon--button--large) {
      height: var(--icon-size--button-large, 24px);
      width: var(--icon-size--button-large, 24px);
    }
    </style>`;
  }
  constructor() {
    super();
    this._iconLibraryEvent = this._iconLibraryLoaded.bind(this);
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("icon-library-added", this._iconLibraryEvent);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("icon-library-added", this._iconLibraryEvent);
  }
  ready() {
    super.ready();
  }
  //
  _iconLibraryLoaded(e) {}
  //
  _updateIcon(icon) {
    // get the icon library and icon name
    const parts = icon.split(":");
    this._iconName = parts.pop();
    this._iconLibrary = parts.pop();

    // quick fix for repaint bug in icons
    if (this.shadowRoot.querySelectorAll("svg")[0]) {
      this.shadowRoot.removeChild(this.shadowRoot.querySelectorAll("svg")[0]);
    }

    //
    window.dispatchEvent(
      new CustomEvent("set-icon", {
        detail: {
          el: this,
          icon: this._iconName,
          library: this._iconLibrary,
          size: this.size,
          color: this.color
        }
      })
    );
  }
}
customElements.define("rux-icon", RuxIcon);
