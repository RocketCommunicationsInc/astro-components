import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxTimelineRegion } from "./rux-timeline-region.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTimelineTrack extends PolymerElement {
  static get properties() {
    return {
      label: {
        type: String
      },
      regions: {
        type: Object
      },
      scale: {
        type: Number
      },
      duration: {
        type: Number
      },
      selectedRegion: {
        type: Object,
        notify: true
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-timeline/rux-timeline-track.css">
      <div class="rux-timeline__track">
        <ol>
          <template is="dom-repeat" id="regionsElements" items={{regions}}>
            <li>
              <rux-timeline-region class="rux-timeline-region"
                title=[[item.label]]
                status=[[item.status]]
                start-time=[[item.startTime]]
                end-time=[[item.endTime]]
                detail=[[item.detail]]
                scale=[[scale]]
                track-width=[[trackWidth]]
                duration=[[duration]]
                on-click="_onClick">
              </rux-timeline-region>
            </li>
          </template>
        <ol>
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

    this.parentElement.addEventListener("playhead", this._test);
    this.addEventListener("update", this._windowListener);

    window.addEventListener("resize", this._windowListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.removeEventListener("update", this._windowListener);
    window.removeEventListener("resize");
  }

  _resetSelected() {
    // reset any region that may be selected
    this.shadowRoot.querySelectorAll("rux-timeline-region").forEach(region => {
      region.removeAttribute("selected");
    });
  }

  _onClick(e) {
    if (e.currentTarget.hasAttribute("selected")) {
      this._resetSelected();
      this.selectedRegion = {};
    } else {
      this._resetSelected();
      e.currentTarget.setAttribute("selected", "");
      // set selected object for parent
      this.selectedRegion = {
        _id: e.currentTarget._id,
        title: e.currentTarget.title,
        status: e.currentTarget.status,
        startTime: e.currentTarget.startTime,
        endTime: e.currentTarget.endTime,
        detail: e.currentTarget.detail
      };
    }
  }

  _onWindowResize() {
    this.trackWidth = this.shadowRoot.querySelectorAll(
      ".rux-timeline__track"
    )[0].offsetWidth;
  }
}
customElements.define("rux-timeline-track", RuxTimelineTrack);
