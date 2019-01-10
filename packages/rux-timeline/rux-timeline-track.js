import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxTimelineRegion } from "./rux-timeline-region.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTimelineTrack extends PolymerElement {
  static get properties() {
    return {
      id: {
        type: String,
        value: () => {
          return "RTT-" + Math.floor(Math.random() * 1000);
        }
      },
      index: {
        type: Number,
        reflectToAttribute: true
      },
      regions: {
        type: Array
      },
      test: {
        type: String
      },
      label: {
        type: String
      },
      scale: {
        type: Number
      },
      duration: {
        type: Number
      },
      selectedRegion: {
        type: Object,
        notify: true,
        observer: "_regionChanged"
      },
      selected: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          width: 100%;

          flex-wrap: wrap;
        }

        :host([selected]) {
          height: auto;
        }

        :host([selected]) .rux-timeline-region--main {
          display: none;
        }

        .rux-timeline__track__subtracks {
          background-color: var(--colorTertiaryDarken2);
          display: none;
        }

        :host([selected]) .rux-timeline__track__subtracks {
          display: block;
          background-color: #203246;
          width: 100%;
        }

        .rux-timeline__track,
        .subtrack {
          position: relative;
          display: block;
          height: 60px;
          width: 100%;

          box-sizing: border-box;
          overflow: hidden;
        }

        .subtrack {
          margin: 2px 0;
          background-color: var(--colorTertiaryDarken2);
        }

        .subtrack:last-of-type {
          margin: 2px 0 0 0;
        }

        *,
        *:after,
        *:before {
          box-sizing: inherit;
        }

        .rux-timeline__track {
          position: relative;
          /* height: 100%; */
        }

        ol {
          display: block;
          list-style: none;
          padding: 0;
          margin: 0;
        }
      </style>
      <div class="rux-timeline__track">
        <ol class="rux-timeline__regions">
          
          <template is="dom-repeat" items="[[regions]]">
              <rux-timeline-region
                id="[[item.id]]"
                class="rux-timeline-region rux-timeline-region--main"
                label="[[item.label]]"
                status="[[item.status]]"
                start-time="[[item.startTime]]"
                end-time="[[item.endTime]]"
                detail="[[item.detail]]"
                scale="[[scale]]"
                track-width="[[trackWidth]]"
                duration="[[duration]]"
                on-click="_onClick"
              >
              </rux-timeline-region>
            </li>
          </template>
        </ol>
      </div>
    `;
  }
  constructor() {
    super();

    this._windowListener = this._onWindowResize.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this.trackWidth = this.shadowRoot.querySelectorAll(
      ".rux-timeline__track"
    )[0].offsetWidth;

    this.addEventListener("update", this._windowListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.removeEventListener("update", this._windowListener);
  }

  ready() {
    super.ready();
    console.log(this.regions);
    console.log(this.test);
    console.log(this.label);
  }

  _resetSelected() {
    // reset any region that may be selected
    this.shadowRoot.querySelectorAll("rux-timeline-region").forEach(region => {
      if (!this.selectedRegion) return;
      if (region._id !== this.selectedRegion._id) {
        region.removeAttribute("selected");
      }
    });
  }

  isReserved(region) {
    return region.reserved;
  }

  _onClick(e) {
    const _region = e.currentTarget;
    // Still not thrilled with this solution, but this will assign
    // either the model.pass or the subitem object to _model … a
    // I believe this a side effect of having the expanded track
    // be contained within a second loop to the composed track. I.e.,
    // composed tracks have a single loop to add regions, expanded
    // tracks have a loop to create the subtrack, then nested loop
    // to create the reqions.
    const _model = e.model ? e.model.pass : e.subitem;

    if (_region.hasAttribute("selected")) {
      this._resetSelected();
      this.selectedRegion = {};
    } else {
      this._resetSelected();
      _region.setAttribute("selected", "");

      const now = new Date();
      const utcNow = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );

      let temporality = "past";

      if (
        utcNow.getTime() > _region.startTime &&
        utcNow.getTime() < _region.endTime
      ) {
        temporality = "present";
      } else if (utcNow.getTime() < _region.startTime) {
        temporality = "future";
      }

      this.selectedRegion = {
        _id: _region._id,
        label: _region.label,
        status: _region.status,
        startTime: _region.startTime,
        endTime: _region.endTime,
        detail: _region.detail,
        durationMins: _region.durationMins,
        temporality: temporality
      };
    }
  }

  _regionChanged() {
    this._resetSelected();
  }

  _onWindowResize() {
    this.trackWidth = this.shadowRoot.querySelectorAll(
      ".rux-timeline__track"
    )[0].offsetWidth;
  }
}
customElements.define("rux-timeline-track", RuxTimelineTrack);
