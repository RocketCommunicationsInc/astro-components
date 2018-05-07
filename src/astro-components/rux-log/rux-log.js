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
        type: Array
      }
    };
  }

  static get template() {
    return html`

  
	<header class="rux-log-header">
		<h1 class="rux-log-header-title">Event Logs</h1>
	</header>

  <!-- Log Header Row //-->
	<ul class="rux-log-header-labels rux-row">
  </ul>
  
  <!-- Log
  <ol>
    <template is="dom-repeat" id="rux-log-data" items=[[data]]>
      <li>
        <time datetime=[[item.time]]>[[item.time]]</time>
        <rux-status status=[[status]]></rux-status>
        <div>[[item.logEntry]] message</div>
      </li>
    </template>
  </ol>
  //-->

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
}
customElements.define("rux-log", RuxLog);
