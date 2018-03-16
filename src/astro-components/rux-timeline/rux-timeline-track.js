import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { MutableData } from "/node_modules/@polymer/polymer/lib/mixins/mutable-data.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxTimelineRegion } from "./rux-timeline-region.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTimelineTrack extends MutableData(PolymerElement) {
  static get properties() {
    return {
      label: {
        type: String
      },
      regions: {
        type: Object
      },
      scale: {
        type: Number,
        observer: "_setRegions"
      },
      duration: {
        type: Number
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-timeline/rux-timeline-track.css">
      <div class="rux-timeline__track">
        <div class="rux-timeline__track__label">[[label]]</div>
        <ol>
          <template is="dom-repeat" id="regionsElements" items={{regions}} mutable-data>
            <li>
              <rux-timeline-region class="rux-timeline-region"
                title=[[item.label]]
                status=[[item.status]]
                start-time=[[item.startTime]]
                end-time=[[item.endTime]]
                left=[[item.left]]
                width=[[item.width]]>
              </rux-timeline-region>
            </li>
          </template>
        <ol>
      </div>
      `;
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this._base = this.shadowRoot.querySelectorAll(".rux-timeline__track")[0];

    this._setRegions();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _setRegions() {
    if (!this._base) return;

    var now = new Date();
    var today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0
    );

    this.regions.forEach((region, i) => {
      const _regionDuration =
        region.endTime.getTime() - region.startTime.getTime();
      region.width = _regionDuration * this._base.offsetWidth / this.duration;

      region.left =
        (region.startTime.getTime() - today.getTime()) *
        this._base.offsetWidth /
        this.duration;

      this.notifyPath("regions");
    });
  }
}
customElements.define("rux-timeline-track", RuxTimelineTrack);
