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

        top: -4.25rem;
        left: 0;

        height: 4.25rem;
        width: 100%;

        padding: 0.7rem 1.25rem;
        background-color: var(--colorStandbyLighten1, rgb(160, 232, 255));
        transition: top 0.5s ease;

        box-sizing: border-box;
        color: var(--colorBlack, rgb(0, 0, 0));
      }
      

      .rux-notification_close-button {
        border: 3px solid var(--colorStandbyDarken1, rgb(96, 168, 191));
        color: var(--colorStandbyDarken1, rgb(96, 168, 191));
      
        background-color: transparent;
      
        height: 2.2rem;
        width: 2.2rem;
        border-radius: 50%;
      
        position: relative;
      
        margin-left: auto;
      
        display: flex;
        justify-content: center;
        align-items: center;
        
      }
      
      .rux-notification_close-button::after,
      .rux-notification_close-button::before {
        display: block;
        position: absolute;
      
        height: 2px;
        width: 66%;

        margin-left: -32%;
        margin-top: -1px;
      
        content: "";
      
        background-color: var(--colorStandbyDarken1, rgb(96, 168, 191));
        
      }
      
      @supports (--css: variables) {
        .rux-notification_close-button::after,
        .rux-notification_close-button::before {
          margin: 0;
        }
      }

      .rux-notification_close-button::after {
        transform: rotate(-45deg);
      }
      
      .rux-notification_close-button::before {
        transform: rotate(45deg);
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
      
      :host([status="critical"]) {
        background-color: var(--colorCriticalLighten1, rgb(255, 100, 100));
      }
      :host([status="critical"]) .rux-notification_close-button {
        border-color: var(--colorCriticalDarken1, rgb(191, 36, 36));
      }
      :host([status="critical"]) .rux-notification_close-button::after,
      :host([status="critical"]) .rux-notification_close-button::before {
        background-color: var(--colorCriticalDarken1, rgb(191, 36, 36));
      }

      
      :host([status="caution"]) {
        background-color: var(--colorCautionLighten1, rgb(250, 237, 86));
      }
      :host([status="caution"]) .rux-notification_close-button {
        border-color: var(--colorCautionDarken1, rgb(186, 173, 22));
      }
      :host([status="caution"]) .rux-notification_close-button::after,
      :host([status="caution"]) .rux-notification_close-button::before {
        background-color: var(--colorCautionDarken1, rgb(186, 173, 22));
      }


      :host([status="normal"]) {
        background-color: var(--colorNormalLighten2, rgb(173, 255, 128));
      }
      :host([status="normal"]) .rux-notification_close-button {
        border-color: var(--colorNormalDarken1, rgb(68, 191, 0));
      }
      :host([status="normal"]) .rux-notification_close-button::after,
      :host([status="normal"]) .rux-notification_close-button::before {
        background-color: var(--colorNormalDarken1, rgb(68, 191, 0));
      }


      :host([status="info"]) {
        background-color: var(--colorStandbyLighten1, rgb(160, 232, 255));
      }
      :host([status="info"]) .rux-notification_close-button {
        border-color: var(--colorStandbyDarken1, rgb(96, 168, 191));
      }
      :host([status="info"]) .rux-notification_close-button::after,
      :host([status="info"]) .rux-notification_close-button::before {
        background-color: var(--colorStandbyDarken1, rgb(96, 168, 191));
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
      
      
      .notification-buffer.show {
        margin-top: 0;
      }
      
      .show .rux-notification-container {
        top: 0;
      }
      .show .rux-notification-buffer {
        height: 60px;
      }
      

      


      
      
      </style>
      
      <div class="rux-notification__message">[[message]]</div>
      <button on-click="_onClick" class="rux-notification_close-button" title="Close"></button>
      
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
				transition: top 0.5s ease;
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
