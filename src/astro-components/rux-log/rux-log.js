import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import { afterNextRender } from "/node_modules/@polymer/polymer/lib/utils/render-status.js";
import { RuxStatus } from "../rux-status/rux-status.js";
// import rux-status
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxLog extends PolymerElement {
  static get properties() {
    return {
      data: {
        type: Object,
        observer: "_updateLog"
      },
      formatting: {
        type: Object
      },
      maxLines: {
        type: Number,
        value: 10
      },
      _height: {
        type: Number
      },
      _formattedTimeStamp: {
        type: String,
        value: () => {
          return "12/11/11";
        }
      },
      _log: {
        type: Array,
        value: []
      }
    };
  }

  static get template() {
    return html`

    <style>

      :host {
        display: block;
        outline: 1px solid red;
      }

      ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
      }

      ul, ol li {
        display: flex;
      }

      ol {
        overflow-y: scroll;
      }

      ol li:nth-child(odd) {
        background-color: rgba(255,255,255,0.1);
      }


    </style>

  
	<header class="rux-log-header">
    <h1 class="rux-log-header-title">Event Logs</h1>
    <ul class="rux-log-header-labels rux-row">
      <template is="dom-repeat" id="rux-log-data" items=[[formatting.labels]]>
      <li>[[item.label]]</li>
      </template>
    </ul>
	</header>

  [[labels]]
  <!-- Log Header Row //-->
      
  
  
  <ol style$="max-height: [[_height]]px">
    <template is="dom-repeat" id="rux-log-data" items=[[_log]]>
      <li class="rux-log--log-line">
        <time datetime=[[item.timestamp]]>[[_formatTime(item.timestamp)]]</time>
        <rux-status status=[[item.status]]></rux-status>
        <div>[[item.entry]] message</div>
      </li>
    </template>
  </ol>
  

  `;
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this.data = {
      timestamp: new Date(),
      status: "ok",
      message: "Log message"
    };

    // set the max height for the
    afterNextRender(this, () => {
      const logLine = this.shadowRoot.querySelector(".rux-log--log-line");
      this._height = logLine.offsetHeight * this.maxLines;
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _formatTime(time) {
    return new Date(time).toLocaleTimeString(this.locale, {
      hour12: false,
      timeZone: this.timezone
    });
  }

  _updateLog() {
    this.unshift("_log", this.data);
  }
}
customElements.define("rux-log", RuxLog);
