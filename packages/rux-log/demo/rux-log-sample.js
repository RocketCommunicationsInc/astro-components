import {
  PolymerElement,
  html
} from "../../../node_modules/@polymer/polymer/polymer-element.js";
import { RuxLog } from "../rux-log.js";
/**
 * @polymer
 * @extends HTMLElement
 */

export class RuxLogSample extends PolymerElement {
  static get template() {
    return html`
    <rux-button type="small" style="margin-left: auto" on-click="_updateLog">Update Log</rux-button>
    <rux-log 
      max-lines=5
      formatting=[[logFormatting]]
      data=[[logData]]>
    </rux-log>
    `;
  }

  static get properties() {
    return {
      name: {
        type: String,
        value: "Clock Component"
      }
    };
  }

  constructor() {
    super();

    /* FAKE LOG DATA */
    this.logStatuses = [
      "off",
      "standby",
      "normal",
      "caution",
      "serious",
      "critical"
    ];
    this.logMessages = [
      "Architecto temporibus iusto dolor quisquam",
      "Reiciendis similique earum qui quas corporis error et",
      "Necessitatibus magni corporis est nam asperiores est",
      "occaecati laudantium beatae",
      "Architecto et quasi. Rerum et quod iste eum aperiam voluptates vel. Blanditiis enim deserunt",
      "Dolorum expedita assumenda quia nihil omnis. Velit omnis fugit dolore laudantium quam dolor tempora asperiores corporis. Cupiditate quia ipsum"
    ];
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

  _updateLog() {
    this.logData = {
      timestamp: new Date(),
      status: this.logStatuses[
        Math.floor(Math.random() * this.logStatuses.length)
      ],
      entry: this.logMessages[
        Math.floor(Math.random() * this.logMessages.length)
      ]
    };
  }
}
customElements.define("rux-log-sample", RuxLogSample);
