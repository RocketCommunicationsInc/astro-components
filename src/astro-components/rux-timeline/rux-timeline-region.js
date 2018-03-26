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

    // set the initial values for each region
    //
    this._base = {
      width: this._getRegionWidth(),
      left: this._getRegionLeft(),
      scale: this.scale
    };

    this._updateRegion();
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

  _getRegionWidth() {
    return (
      (this.endTime.getTime() - this.startTime.getTime()) *
      this.track.offsetWidth /
      this.duration
    );
  }

  _getRegionLeft() {
    const now = new Date();
    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0
    );
    return (
      (this.startTime.getTime() - today.getTime()) *
      this.track.offsetWidth /
      this.duration
    );
  }

  _updateRegion() {
    if (!this._base) return;

    this.style.left = this._base.left * (this.scale / this._base.scale) + "px";
    this.style.width =
      this._base.width * (this.scale / this._base.scale) + "px";
  }
}
customElements.define("rux-timeline-region", RuxTimelineRegion);
