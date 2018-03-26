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
      scale: {
        type: Number,
        observer: "_updateRegion"
      },
      track: {
        type: Object
      },
      duration: {
        type: Number
      },
      startTime: {
        type: Date
      },
      endTime: {
        type: Date
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
    // console.log("updated region");
    // if (!this.track) return;

    var now = new Date();
    var today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0
    );
    // console.log("end time", this.endTime.getTime());
    const _regionDuration = this.startTime.getTime() - this.endTime.getTime();

    const width = _regionDuration * this.track.offsetWidth / this.duration;

    const left =
      (this.startTime.getTime() - today.getTime()) *
      this.track.offsetWidth /
      this.duration;

    /* console.group("get coordinates");
    console.log("start time", this.startTime.getTime());
    console.log("today", today.getTime());
    console.log("track width", this.track.offsetWidth);
    console.log("duration", this.duration);
    console.log("\n\ntime dif", this.startTime.getTime() - today.getTime());
    console.log("width", this.track.offsetWidth / this.duration);
    console.log(
      "left",
      (this.startTime.getTime() - today.getTime()) *
        this.track.offsetWidth /
        this.duration
    );
    console.groupEnd(); */

    this.style.left = left + "px";
    this.style.width = width + "px";
  }
}
customElements.define("rux-timeline-region", RuxTimelineRegion);
