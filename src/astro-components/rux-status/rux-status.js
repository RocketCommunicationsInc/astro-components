import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
// import "./rux-icons-svg.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxStatus extends PolymerElement {
  static get properties() {
    return {
      status: {
        type: String
      },
      label: {
        type: String
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
      <link rel="stylesheet" href="src/astro-components/rux-status/rux-status.css">

      <!-- Use Advanced Status Template is any property is set //-->
      <div class$="rux-advanced-status rux-status--[[status]]" title="[[notifications]] [[label]] [[sublabel]]" aria-labelledby="rux-advanced-status-aria-label" hidden=[[!advanced]]>
        
        
        
        <div class="rux-advanced-status__icon">
          <rux-icon icon="status:{{status}}" class$="rux-advanced-status__status-icon rux-icon--status [[status]]"></rux-icon>
          <div class="rux-advanced-status__badge" hidden=[[!_notifications]]>[[_notifications]]</div>
          <rux-icon icon="[[icon]]" class$="rux-status--[[status]]"></rux-icon>  
        </div>  

        <div id="rux-advanced-status-aria-label" class="rux-advanced-status__label">[[label]]<span class="rux-advanced-status__label__sub-label">[[sublabel]]</span></div>
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
      console.error(`${this.label}â€™s notification count is not a number`);

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
