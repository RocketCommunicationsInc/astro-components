import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

import { RuxIcon } from "../../packages/rux-icon/rux-icon.js";
import { RuxAccordion } from "../packages/rux-accordion/rux-accordion.js";
import { RuxButton } from "../packages/rux-button/rux-button.js";
import { RuxClock } from "../packages/rux-clock/rux-clock.js";
import { RuxGlobalStatusBar } from "../packages/rux-global-status-bar/rux-global-status-bar.js";
import { RuxLog } from "../packages/rux-log/rux-log.js";
import { RuxModal } from "../packages/rux-modal/rux-modal.js";
import { RuxNotification } from "../packages/rux-notification/rux-notification.js";
import { RuxPopUpMenu } from "../packages/rux-pop-up-menu/rux-pop-up-menu.js";
import { RuxProgress } from "../packages/rux-progress/rux-progress.js";
import { RuxPushButton } from "../packages/rux-push-button/rux-push-button.js";
import { RuxSegmentedButton } from "../packages/rux-segmented-button/rux-segmented-button.js";
import { RuxSlider } from "../packages/rux-slider/rux-slider.js";
import { RuxSpectrumAnalyzer } from "../packages/rux-spectrum-analyzer/rux-spectrum-analyzer.js";
import { RuxStatus } from "../packages/rux-status/rux-status.js";
import { RuxTimeline } from "../packages/rux-timeline/rux-timeline.js";
import { RuxToggle } from "../packages/rux-toggle/rux-toggle.js";
import { RuxTabs } from "../packages/rux-tabs/rux-tabs.js";
import { RuxTree } from "../packages/rux-tree/rux-tree.js";

import { AstroSamples } from "./astro-sample/astro-samples.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroComponentViewer extends PolymerElement {
  static get template() {
    return html`

    <style>
      :host {
        display: block;
        /* box-sizing: border-box; */
      }

      rux-tabs {
        margin: 0 auto 0 2rem;
      }


      .grid {
        display: inline-grid;
        padding: 0;
        margin: 1.875rem;
        
        outline: 1px solid red;
  
        grid-template-columns: 8.33%;
        grid-template-rows:    6.25%;
        grid-gap: 20px;      
      }

      .icon-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

    </style>
    
    <rux-global-status-bar
      appname="Component Viewer">

      <rux-tabs
        id="main"
        transparent>
        <rux-tab id="t2" role="tab">Icons</rux-tab>
        <rux-tab id="t1" role="tab">Controls</rux-tab>
        <rux-tab id="t3" role="tab">Widgets</rux-tab>
      </rux-tabs>

      <rux-segmented-button
        data={{theme}}></rux-segmented-button>

    </rux-global-status-bar>


    <rux-tab-panels role="tablist" aria-labeledby="main">
      <rux-tab-panel aria-labeledby="t1" role="tabpanel">
        <div class="grid">
          <h2>Controls</h2>
        </div>
      </rux-tab-panel>

      <rux-tab-panel aria-labeledby="t2" role="tabpanel">  
        <div class="grid">
          
          <section>
            <h2>Monitoring Icons</h2>
            <ul class="icon-list">
              <li><rux-icon icon="monitoring:altitude"></li>
              <li><rux-icon icon="monitoring:antenna"></li>
              <li><rux-icon icon="monitoring:antenna-off"></li>
              <li><rux-icon icon="monitoring:antenna-receive"></li>
              <li><rux-icon icon="monitoring:antenna-transmit"></li>

              <li><rux-icon icon="monitoring:equipment"></li>
              <li><rux-icon icon="monitoring:mission"></li>
              <li><rux-icon icon="monitoring:payload"></li>
              <li><rux-icon icon="monitoring:processor"></li>
              <li><rux-icon icon="monitoring:processor-alt"></li>

              <li><rux-icon icon="monitoring:netcom"></li>
              <li><rux-icon icon="monitoring:propulsion-power"></li>
              <li><rux-icon icon="monitoring:thermal"></li>
              <li><rux-icon icon="monitoring:satellite-off"></li>
              <li><rux-icon icon="monitoring:satellite-receive"></li>
              <li><rux-icon icon="monitoring:satellite-transmit"></li>
            </ul>
          </section>

          <section>
            <h2>System Icons</h2>
            <ul class="icon-list">
              <li><rux-icon icon="utility:notifications"></li>
              <li><rux-icon icon="utility:settings"></li>
              <li><rux-icon icon="utility:caution"></li>
            </ul>
          </section>


          <section>
            <h2>status Icons</h2>
            <ul class="icon-list">
              <li><rux-icon icon="status:critical"></li>
              <li><rux-icon icon="status:serious"></li>
              <li><rux-icon icon="status:caution"></li>
              <li><rux-icon icon="status:normal"></li>
              <li><rux-icon icon="status:standby"></li>
              <li><rux-icon icon="status:off"></li>
              <li><rux-icon icon="status:null"></li>
            </ul>
          </section>


        </div>
      </rux-tab-panel>

      <rux-tab-panel aria-labeledby="t3" role="tabpanel">  
        <div class="grid">
          <h2>Widgets</h2>
        </div>
      </rux-tab-panel>

    </rux-tab-panels>

    `;
  }

  static get properties() {
    return {};
  }

  static get observers() {
    return ["_themeChanged(theme.*)"];
  }

  _themeChanged(newValue, oldValue) {
    const body = document.getElementsByTagName("body")[0];

    body.classList.remove(this.selectedTheme);
    this.selectedTheme = newValue.value.theme;
    body.classList.add(this.selectedTheme);
  }

  constructor() {
    super();

    this.selectedTheme = null;
    this.theme = [
      { label: "None", theme: "no-theme" },
      { label: "Dark", theme: "dark-theme" },
      { label: "Light", theme: "light-theme" }
    ];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    suer.disconnectedCallback();
  }

  ready() {
    super.ready();
  }
}
customElements.define("astro-component-viewer", AstroComponentViewer);
