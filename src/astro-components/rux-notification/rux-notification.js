import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxButton } from "../rux-button/rux-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxNotification extends PolymerElement {
  static get properties() {
    return {
      message: {
        type: String
      },
      button: {
        type: Object,
        value: null
      },
      status: {
        type: String,
        value: "default"
      },
      push: {
        type: Boolean,
        value: false
      },
      target: {
        type: String,
        value: "local",
        reflectToAttribute: true
      },
      closeAfter: {
        type: Number,
        value: false
      },
      opened: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: "_buffer"
      }
    };
  }
  static get template() {
    return html`
      <style>
      :host {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        flex-grow: 1;
        align-items: center;
        align-content: center;
      
        top: -4.125rem;
        left: 0;
      
        height: 4.125rem;
        width: 100%;
      
        padding: 0.7rem 1rem;
        background-color: #1a6600;
        /* background-color: var(--status-emergency); */
        transition: all 0.5s ease;
      
        box-sizing: border-box;
      }
      
      :host([opened]) {
        top: 0;
      }
      
      :host([target="local"]) {
        position: absolute;
      }
      
      :host([target="global"]) {
        position: fixed;
      }
      
      :host([status="emergency"]) {
        background-color: var(--color-alert);
      }
      :host([status="error"]) {
        background-color: var(--color-error);
      }
      :host([status="caution"]) {
        background-color: var(--color-caution);
      }
      :host([status="ok"]) {
        background-color: var(--color-ok);
      }
      :host([status="standby"]) {
        background-color: var(--color-standby);
      }
      :host([status="off"]) {
        background-color: var(--color-off);
      }
      
      .rux-notification::after {
        position: relative;
        display: block;
        content: "";
        height: 60px;
      }
      
      .visible {
        margin-top: 0;
      }
      
      /* 
      .notification-container {
        display: block;
        height: 60px;
        width: 100%;
        background-color: orange;
        position: absolute;
        padding: 0;
        box-sizing: border-box;
        display: block;
        background-color: orange !important;
        outline: 1px solid red;
        position: absolute;
        top: -60px; 
        top: 0;
        left: 0;
        height: 0;
        width: 100%; 
      
        
      }
      */
      /*
      .notification-buffer {
        height: 60px;
         margin-top: -1.25rem; 
        position: relative;
        outline: 1px solid green;
        transition: all 0.667s ease-in-out;
        overflow: hidden;
      }
      */
      
      .notification-buffer.show {
        margin-top: 0;
      }
      
      .show .rux-notification-container {
        top: 0;
      }
      .show .rux-notification-buffer {
        height: 60px;
      }
      
      a {
        line-height: 0;
      }
      
      </style>
      
      <div class="rux-notification__message">[[message]]</div>
      <a on-click="_onClick"><rux-icon icon="default:close" color="#fff" size="small"></rux-icon></a>
      `;
  }
  constructor() {
    super();

    this.buffer;
    this.container;
    this._closeAfter;
  }
  connectedCallback() {
    super.connectedCallback();

    // make sure close after is a reasonable time frame.
    if (this.closeAfter && this.closeAfter <= 10) {
      this.closeAfter *= 1000;
    } else if (this.closeAfter > 10 && this.closeAfter < 2000) {
      this.closeAfter = 3000;
    }

    const _parent = this.parentNode;

    // if the notification is attached to a local object then make sure it has a position set
    // so the notifcation gets associated correctly. Also ensure the overflow is set to hidden
    // NOTE: this is a very temporary solution. Messing with another developers position/overflow
    // undoubtedly will have unintended consequences
    if (this.target === "local") {
      // if the parent element has a position of static or has no position set, then set it
      if (!_parent.style.position || _parent.style.position === "static") {
        _parent.style.position = "relative";
      }
      _parent.style.overflow = "hidden";
    }

    // if the notification has the push param set, then insert some stuff
    if (this.push) {
      this.container = document.createElement("div");
      this.buffer = document.createElement("div");
      this.styleSheet = document.createElement("style");
      this.styleSheet.innerHTML = `
      .notification-container {
				display: none;
				height: 60px;
				background-color: transparent;
				position: absolute;
				top: 0;
				left: 0;	
			}
			
			.notification-buffer {
				height: 60px;
				margin-top: -60px;
				position: relative;
				transition: all 0.5s ease;
				width: 0;
			}

			.notification-buffer.show {
				margin-top: 0;
			}
      `;

      this.container.classList.add("notification-container");
      this.buffer.classList.add("notification-buffer");
      _parent.appendChild(this.styleSheet);
      _parent.insertBefore(this.container, _parent.firstChild);
      _parent.insertBefore(this.buffer, _parent.firstChild);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _buffer() {
    // if the notification has a closeAfter value start a timeout
    if (this.closeAfter && this.opened) {
      this._closeAfter = setTimeout(() => {
        this.opened = false;
      }, this.closeAfter);
    }

    // if this is a push down notification toggle the buffer element
    if (this.buffer) {
      this.buffer.classList.toggle("show");
    }
  }

  _onClick(e) {
    clearTimeout(this._closeAfter);
    this.opened = false;
  }
}
customElements.define("rux-notification", RuxNotification);
