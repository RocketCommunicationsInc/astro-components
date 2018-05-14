import {
  html,
  PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxIcon } from "/src/astro-components/rux-icon/rux-icon.js";
// import "./rux-icons-svg.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxStatus extends PolymerElement {
  static get properties() {
    return {
      status: {
        type: String,
        reflectToAttribute: true
      },
      label: {
        type: String,
        value: false
      },
      sublabel: {
        type: String
      },
      notifications: {
        type: Number
      },
      icon: {
        type: String
      },
      _notifications: {
        type: String,
        value: null,
        computed: "_filterNotifications(notifications)"
      },
      advanced: {
        type: Boolean,
        value: false,
        computed: "_isAdvanced()"
      }
    };
  }

  static get template() {
    return html`
      <style>
      :host {
        display: inline-block;
      }
      
      *[hidden] {
        display: none !important;
      }
      
      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }
      
      .rux-advanced-status {
        position: relative;
        margin: 0 0.75rem;
        line-height: 0;
        /* width: 6.25rem; */
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      .rux-advanced-status__icon-group {
        position: relative;
        display: flex;
        justify-content: center;
        max-width: 6.25rem;
        min-width: 4rem;
      
        /* 
        Faux icon grid. Usefull for gross alignment
        border: 1px solid red;
      
        background-image: linear-gradient(
          to right,
          rgba(255, 0, 0, 0) 0,
          rgba(255, 0, 0, 0) 49%,
          rgba(0, 255, 0, 1) 50%,
          rgba(0, 255, 0, 1) 51%,
          rgba(0, 255, 0, 0) 52%,
          rgba(0, 255, 0, 0) 100%
        ); */
      }
      
      .rux-advanced-status__status-icon {
        margin: 0 2px 0 auto;
        order: 1;
      }
      
      .rux-advanced-status__icon {
        order: 2;
        margin: 0 auto;
      }
      
      :host .rux-advanced-status__icon::before {
        content: "";
        display: block;
        position: relative;
        margin-bottom: -12px;
        margin-left: -18px !important;
        height: 12px;
        width: 12px;
      }
      
      :host([status="off"]) .rux-advanced-status__icon::before {
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23C6CCD1%22%20d%3D%22M3%203h6v6H3z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E");
      }
      :host([status="standby"]) .rux-advanced-status__icon::before {
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23A1DCFB%22%20d%3D%22M6%2012A6%206%200%201%201%206%200a6%206%200%200%201%200%2012zm0-2a4%204%200%201%200%200-8%204%204%200%200%200%200%208z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E");
      }
      :host([status="ok"]) .rux-advanced-status__icon::before {
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%237ED321%22%20d%3D%22M1%203h10v5H1z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E");
      }
      :host([status="caution"]) .rux-advanced-status__icon::before {
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23F8E81C%22%20d%3D%22M1%201h10v10H1z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A");
      }
      :host([status="error"]) .rux-advanced-status__icon::before {
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23C05846%22%20cx%3D%226%22%20cy%3D%226%22%20r%3D%226%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E%0A");
      }
      :host([status="emergency"]) .rux-advanced-status__icon::before {
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23F72501%22%20d%3D%22M12%2012H0L6%200z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A");
      }
      
      .rux-advanced-status__badge:empty {
        display: none;
      }
      
      .rux-advanced-status__badge {
        display: block;
        z-index: 2;
        order: 3;
      
        position: absolute;
        bottom: -0.75rem;
        right: -0.5rem;
      
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 3px;
        padding: 0.65rem 0.25rem;
        font-size: 0.775rem;
        text-align: center;
        color: #fff;
        background-color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .rux-advanced-status__label {
        text-align: center;
        color: var(--font-color);
        font-size: 0.875rem;
        line-height: 1.2;
        margin-top: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        max-width: 6.25rem;
        white-space: nowrap;
      }
      
      .rux-advanced-status__label__sub-label {
        font-size: 0.65em;
        color: rgba(255, 255, 255, 0.6);
        display: block;
      }
      
      .rux-status--off {
        fill: var(--status-off);
      }
      
      .rux-status--standby {
        fill: var(--status-standby);
      }
      
      .rux-status--ok {
        fill: var(--status-ok);
      }
      
      .rux-status--caution {
        fill: var(--status-caution);
      }
      
      .rux-status--error {
        fill: var(--status-error);
      }
      
      .rux-status--emergency,
      .rux-status--alert {
        fill: var(--color-alert);
      }
</style>      

      <!-- Use Advanced Status Template is any property is set //-->
      <div class$="rux-advanced-status rux-status--[[status]]" title="[[notifications]] [[label]] [[sublabel]]" aria-labelledby="rux-advanced-status-aria-label" hidden=[[!advanced]]>
        
        
        
        <div class="rux-advanced-status__icon-group">
          <!-- <rux-icon icon="status:{{status}}" class$="rux-advanced-status__status-icon rux-icon--status [[status]]"></rux-icon> //-->
          <rux-icon icon="[[icon]]" class$="rux-advanced-status__icon rux-status--[[status]]"></rux-icon>
          <div class="rux-advanced-status__badge" hidden=[[!_notifications]]>[[_notifications]]</div>
          
        </div>  

        <div id="rux-advanced-status-aria-label" class="rux-advanced-status__label" hidden=[[!label]]>[[label]]<span class="rux-advanced-status__label__sub-label">[[sublabel]]</span></div>
      </div>

      <!-- Use simple status if no other properties are set //-->
      <rux-icon icon="status:[[status]]" class="rux-icon--status" hidden=[[advanced]]></rux-icon>	
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }

  _isAdvanced() {
    if (this.label || this.icon || this.notifications) return true;
  }

  _filterNotifications(n) {
    if (isNaN(n))
      console.error(`${this.label}'s notification count is not a number`);

    let _n = Math.floor(n);

    // don't show any values less than 0
    if (_n <= 0) return null;

    // get the place value
    const _thousand = Math.floor((_n / 1000) % 1000); // only return a whole number
    const _million = (_n / 1000000) % 1000000; // return a decimal value for numbers like 1.2m
    const _billion = (_n / 1000000000) % 1000000000; // return a decimal value for numbers like 1.2b
    const _trillion = (_n / 1000000000000) % 1000000000000; // trillion is just to offer an overflow instance

    // set the display to its original state
    let _message = _n;

    if (_trillion >= 1) {
      _message = "∞";
    } else if (_billion >= 1) {
      _message = _billion.toFixed(1).toString() + "b";
    } else if (_million >= 1) {
      _message = _million.toFixed(1).toString() + "m";
    } else if (_thousand >= 1) {
      _message = _thousand + "k";
    }

    return _message;
  }
}

customElements.define("rux-status", RuxStatus);
