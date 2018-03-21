import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
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
      type: {
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
      <link rel="stylesheet" href="src/astro-components/rux-notification/rux-notification.css">
      
      <div class="rux-notification__message">[[message]]</div>
      <rux-button on-click="_onClick">Close</rux-button>
      `;
  }
  constructor() {
    super();

    this.originalPosition;
    this.originalOverflow;

    this.buffer;
    this.container;
  }
  connectedCallback() {
    super.connectedCallback();

    // if the notification is attached to a local object then make sure it has a position set
    // so the notifcation gets associated correctly. Also ensure the overflow is set to hidden
    // NOTE: this is a very temporary solution. Messing with another developers position/overflow
    // undoubtedly will have unintended consequences
    if (this.target === "local") {
      // set a property so we can return to it when closing the notification
      this.originalPosition = this.parentNode.style.position;
      this.originalOverflow = this.parentNode.style.overflow;

      // if the parent element has a position of static or has no position set, then set it
      if (
        !this.parentNode.style.position ||
        this.parentNode.style.position === "static"
      ) {
        this.parentNode.style.position = "relative";
      }
      this.parentNode.style.overflow = "hidden";
    }

    console.log(this.push);
    // if the
    if (this.push) {
      console.log("no overlay");
      console.log(this);
      console.log(this.style);

      const _parent = this.parentNode;
      const _parentStyles = window.getComputedStyle(_parent);
      const _parentOffsetLeft = _parentStyles.padding.split(" ")[1];
      const _parentOffsetTop = _parentStyles.padding.split(" ")[0];

      console.log("_parent", _parent);
      console.log("_parentStyles", typeof _parentStyles.padding);
      console.log("_parentStyles", _parentStyles.padding);
      console.log("_parentOffsetLeft", "-" + _parentOffsetLeft);
      console.log("_parentOffsetTop", "-" + _parentOffsetTop);

      this.container = document.createElement("div");
      this.container.classList.add("notification-container");
      this.container.style.position = "absolute";
      this.container.style.backgroundColor = "red";
      this.container.style.height = "0";
      this.container.style.width = "100%";
      this.container.style.top = "0";
      this.container.style.left = "0";
      this.container.style.width = "100%";
      this.container.style.display = "block";
      this.container.style.padding = "0";
      this.container.style.boxSizing = "border-box";

      this.parentNode.insertBefore(this.container, this.parentNode.firstChild);

      this.buffer = document.createElement("div");
      this.buffer.classList.add("notification-buffer");
      this.buffer.style.webkitTransition = "margin 1s ease-in-out;";
      this.buffer.style.mozTransition = "margin 1s ease-in-out;";
      this.buffer.style.transition = "margin 1s ease-in-out;";
      this.buffer.style.position = "relative";
      this.buffer.style.height = "60px";
      this.buffer.style.width = "100%";
      this.buffer.style.marginLeft = `-${_parentOffsetLeft}`;
      // this.buffer.style.marginTop = `-${_parentOffsetTop}`;
      this.buffer.style.marginTop = "-66px";
      this.buffer.style.marginBottom = "1rem";
      this.buffer.style.display = "block";
      this.buffer.style.zIndex = 10;

      this.buffer.style.boxSizing = "border-box";

      this.parentNode.insertBefore(this.buffer, this.parentNode.firstChild);

      console.log("fc", window.getComputedStyle(this.parentNode).padding);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _buffer() {
    if (!this.buffer) return;
    if (this.opened) {
      this.buffer.style.marginTop = "0";
    } else {
      this.buffer.style.marginTop = "-66px";
    }
  }

  _onClick(e) {
    this.opened = false;
  }
}
customElements.define("rux-notification", RuxNotification);
