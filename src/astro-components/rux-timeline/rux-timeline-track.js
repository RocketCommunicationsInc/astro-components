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
      <style>
      :host {
        position: relative;
        display: block;
        height: 48px;
        width: 100%;
      
        box-sizing: border-box;
        overflow: hidden;
      
        /* background-color: red; */
      }
      
      *,
      *:after,
      *:before {
        box-sizing: inherit;
      }
      
      .rux-timeline__track {
        position: relative;
      
        height: 100%;
      }
      
      ol {
        display: block;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      </style>      
      <div class="rux-timeline__track">
        <ol>
          <template is="dom-repeat" id="regionsElements" items={{regions}}>
            <li>
              <rux-timeline-region class="rux-timeline-region"
                label=[[item.label]]
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
        label: e.currentTarget.label,
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
