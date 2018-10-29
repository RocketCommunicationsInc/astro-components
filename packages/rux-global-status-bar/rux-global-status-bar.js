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
      version: String,
      theme: {
        type: String
      }
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
    
      height: 110px;
      width: 100%;
    
      box-sizing: border-box;
      background-color: rgb(0, 23, 36);
    
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    
      
      contain: content; /* This improves CSS performance see: https://developers.google.com/web/updates/2016/06/css-containment */
    }

    

    
    
    header {
      display: flex;
      
    
      height: 100%;
      width: 100%;
    
      /* padding: 0 2.5rem; */
      
      align-items: center;
      justify-content: space-between;
      
    
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
      
      padding: 0;
      margin: 0;
      color: #bdc3c9;
    }
    
    .app-meta h1 {
      font-size: 2rem;
      font-weight: 300;
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

    // if the user passes in a theme override loop through all
    // of the slotted child content and apply the necessary theme

    // TODO: This should probably become a small sub-routine for
    // any Astro component that might need an override. Current
    // candidates include:
    //    - Tabs
    //    - Timeline
    //    - Cards/Tiles

    // NOTE: There may be some interesting conflicts if you have
    // something like tabs inside of a global status each one
    // would implement an override
    if (this.theme) {
      for (let slot of this.children) {
        console.log("slot", slot.children.length, slot.children);

        slot.classList.add(`${this.theme}-theme`);
      }
    }
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
