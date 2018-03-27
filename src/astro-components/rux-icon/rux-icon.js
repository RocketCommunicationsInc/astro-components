import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
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
    <link rel="stylesheet" href="/src/astro-components/rux-icon/rux-icon.css">`;
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
