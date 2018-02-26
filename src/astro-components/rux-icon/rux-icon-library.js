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
  _setIcon(e) {
    let _icon = e.detail;
    if (this.name && _icon.library && this.name === _icon.library) {
      /* TODO:
        Utilize the icon set?
        */
      // console.log('library',_icon.library);
      // console.log('icon', _icon.icon);
      // console.log(this._iconSets[_icon.library][_icon.icon]);
      // return;
      // console.log();
      // e.detail.el.classList.add('test')
      // console.log(e.detail.el.classList);
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
      let sourceSvg = this.querySelectorAll(`#${_icon.icon}`)[0];
      if (sourceSvg) {
        if (!this.size) this.size = "114";
        let content = sourceSvg.cloneNode(true);
        if (_icon.color) {
          content.setAttribute("fill", _icon.color);
        }
        // content.setAttribute('class','rux-status--${this.color}`');
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", `0 0 ${this.size} ${this.size}`);
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        // if(_icon.library === 'status') {
        //  svg.setAttribute('class', 'rux-icon--status');
        // }
        svg.setAttribute("focusable", "false");
        svg.appendChild(content);
        e.detail.el.root.insertBefore(svg, null);
      }
    }
  }
  _nameChanged() {
    // console.info('Icon Library Name Changed:',this.name);
    // console.log('lib', this.innerHTML);
    // this._iconSets[this.name] =
    let icon = Object.create(null);
    this.querySelectorAll("[id]").forEach(function(icon) {
      icon[icon.id] = icon;
    });
    // console.log('test',icon)
    // this._iconSets[this.name] = document.getElementsByName(this.name);
    // console.log('this.icons',this._iconSets[this.name]);
  }
}
customElements.define("rux-icon-library", RuxIconLibrary);
