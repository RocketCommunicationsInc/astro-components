import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
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
      _log: {
        type: Array,
        value: []
      }
    };
  }

  static get template() {
    return html`

  
	<header class="rux-log-header">
		<h1 class="rux-log-header-title">Event Logs</h1>
	</header>

  [[data.message]]
  [[data.status]]
  [[data.timestamp]]
  <!-- Log Header Row //-->
	<ul class="rux-log-header-labels rux-row">
  </ul>
  
  
  <ol>
    <template is="dom-repeat" id="rux-log-data" items=[[_log]]>
      <li>
        <time datetime=[[item.timestamp]]>[[item.timestamp]]</time>
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
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _updateLog() {
    console.log("update log", this.data);
    this.unshift("_log", this.data);
    console.log("_log", this._log);
    // this.set.push(this.data);
    // this.notifyPath("_log", this._log);
  }
}
customElements.define("rux-log", RuxLog);
