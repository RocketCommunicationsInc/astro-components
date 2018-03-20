import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTimelineRegion extends PolymerElement {
  static get properties() {
    return {
      title: {
        type: String
      },
      status: {
        type: String,
        value: "off"
      },
      startTime: {
        type: Date
      },
      endTime: {
        type: Date
      },
      left: {
        type: Number,
        observer: "_updateRegion"
      },
      width: {
        type: Number,
        observer: "_updateRegion"
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-timeline/rux-timeline-region.css">
      <div class="rux-timeline__region__header">
        <rux-status status=[[status]]></rux-status>
        <div>[[title]]</div>
      </div>
      <div class="rux-timeline__region__time">
        <span class="rux-timeline__region__time__start-time">[[_formatTime(startTime)]]</span>
        <span class="rux-timeline__region__time__end-time">[[_formatTime(endTime)]]</span>
      </div>

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

  _formatTime(time) {
    if (isNaN(time)) return false;

    return new Date(time).toLocaleTimeString(this.locale, {
      hour12: false,
      timeZone: "UTC"
    });
  }

  _updateRegion() {
    this.style.left = this.left + "px";
    this.style.width = this.width + "px";
  }
}
customElements.define("rux-timeline-region", RuxTimelineRegion);
