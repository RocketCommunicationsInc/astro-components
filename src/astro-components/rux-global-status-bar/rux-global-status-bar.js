import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxButton } from "../rux-button/rux-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxGlobalStatusBar extends PolymerElement {
  static get properties() {
    return {
      appname: String,
      version: String
    };
  }
  static get template() {
    return html`
    <style>
    :host {
      display: block;
      position: sticky;
    
      top: 0;
      left: 0;
    
      width: 100%;
    
      box-sizing: border-box;
    
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    
      contain: content; /* This improves CSS performance see: https://developers.google.com/web/updates/2016/06/css-containment */
    }
    
    header {
      display: flex;
    
      height: 6.25rem;
      width: 100%;
    
      padding: 0;
      margin: 0 0 1.25rem 0;
    
      align-items: center;
      justify-content: space-between;
      /* outline: 1px solid red; */
    
      box-sizing: border-box;
    }
    
    /* 
            The hidden attribute on an element gets ignored when
            a display property is added to the element to be hidden.
            Explicitly setting the display property is a work around
            as would be a wrapper div
          */
    .app-meta[hidden] {
      display: none !important;
    }
    
    .app-meta {
      display: block;
      /* outline: 1px solid red; */
      padding: 0;
      margin: 0;
      color: #bdc3c9;
    }
    
    .app-meta h1 {
      font-size: 2rem;
      font-weight: 300;
      /* color: rgba(255, 255, 255, 0.298039); */
      /* color: #bdc3c9; */
    }
    
    .app-version {
      font-size: 1.1875rem;
      font-weight: 300;
      /* color: rgba(255, 255, 255, 0.298039); */
    
      margin-left: 0.5em;
    }
</style>    

      <header>
        <div class="app-meta" hidden="[[!appname]]">
          <h1>[[appname]]<span class="app-version">[[version]]</span></h1>
        </div>

        <!-- optional for tabbed based UIs //-->
        <slot></slot>
      </header>`;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    // if the user hasn’t defined an appname then explicitly
    // set the appname property to false to hide the app-meta
    // section from being included in the flex DOM
    if (!this.appname) this.appname = false;
  }
  _masterOff() {
    console.log("master off from inside global status");
    window.dispatchEvent(
      new CustomEvent("master-off", {
        detail: { off: "yo" }
      })
    );
  }
  ready() {
    super.ready();
  }
}
customElements.define("rux-global-status-bar", RuxGlobalStatusBar);
