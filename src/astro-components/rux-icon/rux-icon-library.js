import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxIconLibrary extends PolymerElement {
  static get properties() {
    return {
      name: {
        type: String,
        observer: "_nameChanged"
      },
      size: {
        type: String
      }
    };
  }
  constructor() {
    super();
    this._iconSets = Object.create(null);
    //
    this._updateIconListener = this._setIcon.bind(this);
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("set-icon", this._updateIconListener);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("set-icon", this._updateIconListener);
  }
  ready() {
    super.ready();
  }

  /*
   Needs a rewrite
   */
  _setIcon(e) {
    let _icon = e.detail;
    if (_icon.icon == "") return;

    if (this.name && _icon.library && this.name === _icon.library) {
      if (_icon.size) {
        if (parseInt(_icon.size)) {
          let iconSize = _icon.size + "px";
          e.detail.el.setAttribute(
            "style",
            `height:${iconSize}; width:${iconSize}`
          );
        } else {
          let iconSize = `rux-icon--${_icon.size}`;
          e.detail.el.classList.add(iconSize);
        }
      }

      // set the icon

      let sourceSvg = this.querySelectorAll(`#${_icon.icon}`)[0];

      // if no icon exists then put
      if (!sourceSvg) {
        sourceSvg = this.querySelectorAll("#fpo")[0];
        console.error(`No icon for "${_icon.icon}" exists in the SVG library`);
      }

      if (!this.size) this.size = "114";
      let content = sourceSvg.cloneNode(true);
      if (_icon.color) {
        content.setAttribute("fill", _icon.color);
      }
      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", `0 0 ${this.size} ${this.size}`);
      svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
      svg.setAttribute("focusable", "false");
      svg.appendChild(content);
      e.detail.el.root.insertBefore(svg, null);
    }
  }
  _nameChanged() {
    let icon = Object.create(null);
    this.querySelectorAll("[id]").forEach(function(icon) {
      icon[icon.id] = icon;
    });
  }
}
customElements.define("rux-icon-library", RuxIconLibrary);
