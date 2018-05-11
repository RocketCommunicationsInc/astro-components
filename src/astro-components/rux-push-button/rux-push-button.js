import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxPushButton extends PolymerElement {
  static get properties() {
    return {
      _id: {
        type: "",
        value: () => {
          return `toggle-${Math.floor(Math.random() * 1000)}`;
        }
      },
      pushbutton: {
        type: Boolean,
        readOnly: true
      },
      disabled: {
        type: Boolean,
        value: false
      },
      checkedLabel: {
        type: String,
        value: "Enabled"
      },
      uncheckedLabel: {
        type: String,
        value: "Disabled"
      },
      checked: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: "_setLabel"
      },
      _label: {
        type: String
      }
    };
  }

  static get template() {
    return html`
      <style>
      :host {
        font-size: 12px;
        height: 1.375rem;
        line-height: 1.7;
      
        margin: 0 2px;
      
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      :host input {
        display: none !important;
      }
      
      :host .rux-push-button__button {
        display: flex;
        align-content: center;
        justify-content: center;
      
        height: 100%;
      
        color: #fff;
        /* padding: 0 0.5rem; */
        cursor: pointer;
      
        background-color: #005a8f;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        outline: 1px solid #0e1822;
      
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      
      :host .rux-push-button__input:checked + .rux-push-button__button {
        background-color: #000;
        color: #3ae304;
      }
      
      :host([disabled]) {
        opacity: 0.4;
      }
      
      .rux-push-button__input:disabled + .rux-push-button__button {
        cursor: not-allowed;
      }
</style>      
      
      <input class="rux-push-button__input" type="checkbox" id="[[_id]]" disabled$=[[disabled]] checked={{checked::change}}></input>
      <label for$="[[_id]]" class="rux-push-button__button">[[_label]]</label> 
      `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    // set a default width
    this._getWidth(this.checkedLabel, this.uncheckedLabel);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }

  /*
  **
  ** To avoid the “jittery” nature of a push button when the checked/unchecked
  ** lables aren’t of equal length this sets the width of the pushbutton to the
  ** longest of those two
  **
  */
  _getWidth(_checkedLabel, _uncheckedLabel) {
    if (!_checkedLabel || !_uncheckedLabel) return;

    // get the longest label
    const _longest =
      _checkedLabel.length > _uncheckedLabel.length
        ? _checkedLabel
        : _uncheckedLabel;

    // temporarily set the label of the push button
    // to the longest string
    this._label = _longest;

    // get the width of the push button
    const _label = this.root.querySelector("label");

    // set the css width of the push button
    _label.style.width = _label.offsetWidth + "px";

    // reset the label
    this._setLabel();
  }

  _setLabel() {
    this._label = this.checked ? this.checkedLabel : this.uncheckedLabel;
  }
}

customElements.define("rux-push-button", RuxPushButton);
