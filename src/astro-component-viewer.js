import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";

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

    <link rel="stylesheet" href="/public/css/astro.css">
    

    <style>



      :host {
        display: block;

        
        /* box-sizing: border-box; */
      }

      rux-tabs {
        margin: 0 auto 0 2rem;
      }


      .dark-theme {
        --paneBackgroundColor: var(--colorSecondaryDarken3, rgb(19, 43, 64));
        --paneHeaderBackgroundColor: var(--colorSecondaryDarken3, rgb(19, 43, 64));
        --paneHeaderColor: var(--colorSecondaryDarken3, rgb(19, 43, 64));
      }

      .light-theme {
        --paneBackgroundColor: var(--colorSecondaryDarken2, rgb(19, 43, 64));
        --paneHeaderBackgroundColor: var(--colorSecondaryDarken3, rgb(19, 43, 64));
        --paneHeaderColor: var(--colorWhite, rgb(255,255,255));
      }


      /* pane styles */
      .astro-elements-pane {
        background-color: var(--paneBackgroundColor, rgb(19, 43, 64));        
        padding: 0;
        margin: 0;
        overflow: hidden;
      }

      .astro-elements-pane__content {
        padding: 0 1.5rem;
        outine; 1px solid red;
      }
	
	.astro-elements-pane h1 {

    
    font-size: 1.5rem;
		padding: 0.5rem;
		margin: 0 0 1rem 0;
		background-color: var(--paneHeaderBackgroundColor);
		color: var(--textColor);
	
		position: -webkit-sticky;
		position; absolutesticky;
		top: 0; 
  }
  

  /* grid definitions */
.grid {
  display: inline-grid;
  padding: 0;
  margin: 1.875rem;
  width: calc(100% - (1.875 * 2rem));
  height: calc(100vh - 9.275rem);

  overflow-y: hidden;
  

  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-template-rows: repeat(12, [row-start] 1fr);
  grid-gap: 20px;
}

/* internal pane styles */
.icon-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* ol,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
} */



.checkbox {
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 3;
}

.radio {
  grid-row-start: 4;
  grid-row-end: 7;
  grid-column-start: 1;
  grid-column-end: 3;
}

.pushbuttons {
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 3;
  grid-column-end: 5;
}

.toggles {
  grid-row-start: 4;
  grid-row-end: 7;
  grid-column-start: 3;
  grid-column-end: 5;
}

.text-fields {
  grid-row-start: 1;
  grid-row-end: 9;
  grid-column-start: 10;
  grid-column-end: 13; 
}


.segmented {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 5;
  grid-column-end: 7; 
}


.drop-downs {
  grid-row-start: 3;
  grid-row-end: 5;
  grid-column-start: 5;
  grid-column-end: 7;
}

.buttons {
  grid-row-start: 1;
  grid-row-end: 9;
  grid-column-start: 7;
  grid-column-end: 10;
}

.progress {
  grid-row-start: 5;
  grid-row-end: 9;
  grid-column-start: 5;
  grid-column-end: 7;
}

.status {
  grid-row-start: 7;
  grid-row-end: 9;
  grid-column-start: 3;
  grid-column-end: 5; 
}

.status ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
}



.icons {
  grid-row-start: 10;
  grid-row-end: 13;
  grid-column-start: 1;
  grid-column-end: 12;   
}

.popups {
  display: none;
}


/* COMPONENT GRIDS */
.slider {
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 4;
}

.tabs {

}

.tree {
  
  grid-row-start: 1;
  grid-row-end: 9;
  grid-column-start: 4;
  grid-column-end: 7;
}

.clock {
  grid-row-start: 4;
  grid-row-end: 7;
  grid-column-start: 1;
  grid-column-end: 4;
}

.search {
  
  grid-row-start: 7;
  grid-row-end: 9;
  grid-column-start: 1;
  grid-column-end: 4;
}

.notifications-sample {
  grid-row-start: 4;
  grid-row-end: 7;
  grid-column-start: 10;
  grid-column-end: 13;
}

.modal {
  grid-row-start: 4;
  grid-row-end: 7;
  grid-column-start: 7;
  grid-column-end: 10;
}

.advanced-status {
  grid-row-start: 9;
  grid-row-end: 13;
  grid-column-start: 1;
  grid-column-end: 7;
}

.tabs {
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 7;
  grid-column-end: 13;
}

.log {
  grid-row-start: 7;
  grid-row-end: 13;
  grid-column-start: 7;
  grid-column-end: 13;
}

.timeline {
  grid-row-start: 1;
  grid-row-end: 5;
  grid-column-start: 1;
  grid-column-end: 13;
}

.monitoring-icons {
  grid-row-start: 1;
  grid-row-end: 10;
  grid-column-start: 1;
  grid-column-end: 4;
}

.utility-icons {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 4;
  grid-column-end: 7;
}

.component-icons {
  grid-row-start: 3;
  grid-row-end: 6;
  grid-column-start: 4;
  grid-column-end: 7;
}

.status-icons {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 7;
  grid-column-end: 10;
}


.theme-colors {
  grid-row-start: 1;
  grid-row-end: 8;
  grid-column-start: 1;
  grid-column-end: 13;
}

.status-colors {
  display: none;
  grid-row-start: 5;
  grid-row-end: 9;
  grid-column-start: 1;
  grid-column-end: 13;
}

.civilian-colors {
  display: none;
  grid-row-start: 9;
  grid-row-end: 13;
  grid-column-start: 1;
  grid-column-end: 13;
}

.headings {
  grid-row-start: 1;
  grid-row-end: 6;
  grid-column-start: 1;
  grid-column-end: 7;
}

.text {
  grid-row-start: 1;
  grid-row-end: 13;
  grid-column-start: 7;
  grid-column-end: 13;
}

.variants {
  grid-row-start: 6;
  grid-row-end: 13;
  grid-column-start: 1;
  grid-column-end: 7;

}

.icon-list {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
}

.icon-list li {
  
  margin: 0.5rem;
  padding: 0.5rem;
  

}

.swatch-book {
  display: flex;
  
  overflow: hidden;
  justify-content: space-around;
  
}

.swatches {
  margin: 0;
}

.swatch-meta {
  margin: 0;
  
}

.swatch {
  display: block;
  height: 30px;
  width: 100px;
  
  
}

// dl {
//   display: none;
// }

.push-buttons-list {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
}

.push-buttons-list li {
  margin: 2px;
}

.rux-card {
  overflow: hidden;
}

      

    </style>



    
    <rux-global-status-bar>

      <rux-tabs
        id="main"
        transparent>
        <rux-tab id="t5" role="tab">Typography</rux-tab>
        <rux-tab id="t4" role="tab">Colors</rux-tab>
        <rux-tab id="t6" role="tab">Icons</rux-tab>
        <rux-tab id="t3" role="tab">Widgets</rux-tab>
        <rux-tab id="t2" role="tab">Components</rux-tab>
        <rux-tab id="t1" role="tab">Elements</rux-tab>
        
        
      </rux-tabs>

      <rux-segmented-button
        data={{theme}}></rux-segmented-button>

    </rux-global-status-bar>


    <rux-tab-panels role="tablist" aria-labeledby="main">


    

	<rux-tab-panel aria-labeledby="t1" role="tabpanel">
		<div class="grid">

			




			<!-- 1. CHECKBOXES  //-->
			<section class="rux-card checkbox">
        <header class="rux-card__header">
          <h1>Checkboxes</h1>
        </header>
				<div class="rux-card__content">
					<ol>
						<li class="rux-checkbox">
							<input type="checkbox" name="checkbox1c" id="checkbox1c">
							<label for="checkbox1c">Checkbox</label>
						</li>

						<li class="rux-checkbox">
							<input type="checkbox" name="checkbox2c" id="checkbox2c" checked="">
							<label for="checkbox2c">Checkbox checked</label>
						</li>

						<li class="rux-checkbox">
							<input type="checkbox" name="checkbox3c" id="checkbox3c" disabled="">
							<label for="checkbox3c">Checkbox disabled</label>
						</li>

						<li class="rux-checkbox">
							<input type="checkbox" name="checkbox4c" id="checkbox4c" checked="" disabled="">
							<label for="checkbox4c">Checkbox disabled checked</label>
						</li>
          </ol>
        </div>
      </section>


      <!-- 2. RADIO BUTTONS  //-->
      <section class="rux-card radio">
        <header class="rux-card__header">
          <h1>Radio Buttons</h1>
        </header>
				<div class="rux-card__content">
					<ol>
						<li class="rux-radio-button">
							<input type="radio" name="radio1c" id="radio1c">
							<label for="radio1c">Radio Button</label>
						</li>

						<li class="rux-radio-button">
							<input type="radio" name="radio1c" id="radio2c" checked="">
							<label for="radio2c">Radio Button checked</label>
						</li>

						<li class="rux-radio-button">
							<input type="radio" name="radio2c" id="radio3c" disabled="">
							<label for="radio3c">Radio Button disabled</label>
						</li>

						<li class="rux-radio-button">
							<input type="radio" name="radio2c" id="radio4c" checked="" disabled="">
							<label for="radio4c">Radio Button disabled checked</label>
						</li>
					</ol>
				</div>
      </section>
      


      <!-- 3. PUSHBUTTONS //-->
      <section class="rux-card pushbuttons">
        <header class="rux-card__header">
          <h1>Pushbuttons</h1>
        </header>
        <div class="rux-card__content">
          <figure>
            <div class="rux-form-field">
            <label aria-label="pushbuttons">Enable:</label>
            <ul class="push-buttons-list">
              <li><rux-push-button>Tx</rux-push-button></li>
              <li><rux-push-button checked>Rx</rux-push-button></li>
              <li><rux-push-button disabled>Xx</rux-push-button></li>
              <li><rux-push-button checked disabled>Yx</rux-push-button></li>
            </ul>
          </figure>
        </div>
      </section>


      <!-- 4. SEGMENTED BUTTONS //-->
      <section class="rux-card segmented">
        <header class="rux-card__header">
          <h1>Segmented Button</h1>
        </header>
        <div class="rux-card__content">
          <figure>
            <rux-segmented-button data={{segmentOne}}></rux-segmented-button>
            <figcaption class="output">Output = [[segmentOne.selected.label]]</figcaption>
          </figure>
        </div>
      </section>


      <!-- 5. TOGGLE BUTTONS //-->
      <section class="rux-card toggles">
        <header class="rux-card__header">
          <h1>Toggles Button</h1>
        </header>
        <div class="rux-card__content">
        <figure>
          <ul class="toggle-buttons">
            <li class="rux-form-field">
              <div id="toggle1">Toggle 1:</div>
              <rux-toggle aria-labeledby="toggle1"></rux-toggle>
            </li>
            <li class="rux-form-field">
              <div id="toggle3">Toggle 3:</div>
              <rux-toggle disabled aria-labeledby="toggle1"></rux-toggle>
            </li>
          </ul>
        </figure>
      </div>
    </section>


    <!-- 6. INPUT FIELDS //-->
    <section class="rux-card text-fields">
      <header class="rux-card__header">
        <h1>Input Fields</h1>
      </header>
      <div class="rux-card__content">
        <input type="text"></input>
        <input type="search"></input>
        <input type="text" disabled></input>
      </div>
    </section>
    


    <!-- 7. DROP DOWNS/SELECT //-->
    <section class="rux-card drop-downs">
      <header class="rux-card__header">
        <h1>Drop Down/Select</h1>
      </header>
      <div class="rux-card__content">
        <select class="rux-select" style="--value:Group One Option Three;">
          <optgroup label="Group One">
            <option>Group One Option One</option>
            <option>Group One Option Two</option>
            <option>Group One Option Three</option>
            <option>Group One Option Four</option>
          </optgroup>
          <optgroup label="Group Two">
            <option>Group Two Option One</option>
            <option>Group Two Option Two</option>
            <option>Group Two Option Three</option>
            <option>Group Two Option Four</option>
          </optgroup>
        </select>

        <br>
        <br>

        <select class="rux-select" disabled style="--value:Group One Option Three;">
          <optgroup label="Group One">
            <option>Group One Option One</option>
            <option>Group One Option Two</option>
            <option>Group One Option Three</option>
            <option>Group One Option Four</option>
          </optgroup>
          <optgroup label="Group Two">
            <option>Group Two Option One</option>
            <option>Group Two Option Two</option>
            <option>Group Two Option Three</option>
            <option>Group Two Option Four</option>
          </optgroup>
        </select>
      </div>
    </section>


    <!-- 8. BUTTONS //-->
    <section class="rux-card buttons">
      <header class="rux-card__header">
        <h1>Buttons</h1>
      </header>
      <div class="rux-card__content">
        <rux-button type="small">Button</rux-button>
        <rux-button>Button</rux-button>
        <rux-button type="large">Button</rux-button>
        <br>
        <rux-button disabled type="small">Button</rux-button>
        <rux-button disabled>Button</rux-button>
        <rux-button disabled type="large">Button</rux-button>
        <br>
        <rux-button default type="small">Button</rux-button>
        <rux-button default>Button</rux-button>
        <rux-button default type="large">Button</rux-button>
        <br>
        <rux-button type="outline">Outline Button</rux-button>

      </div>
    </section>

    <!-- 9. PROGRESS //-->
    <section class="rux-card progress">
      <header class="rux-card__header">
        <h1>Progress</h1>
      </header>
      <div class="rux-card__content">
      <rux-progress value=50 label=true></rux-progress>
      <rux-progress></rux-progress>

      </div>
    </section>

    <!-- 10. STATUS //-->
    <section class="rux-card status">
      <header class="rux-card__header">
        <h1>Status</h1>
      </header>
      <div class="rux-card__content">
        <ul>
          <li><rux-status status="off"></rux-status></li>
          <li><rux-status status="standby"></rux-status></li>
          <li><rux-status status="normal"></rux-status></li>
          <li><rux-status status="caution"></rux-status></li>
          <li><rux-status status="serious"></rux-status></li>
          <li><rux-status status="critical"></rux-status></li>
        </ul>

      </div>
    </section>

    <!-- 11. ICONS //-->
    <section class="rux-card icons">
      <header class="rux-card__header">
        <h1>Icons</h1>
      </header>
      <div class="rux-card__content">
       

      </div>
    </section>


    <!-- 12. POP UPS //-->
    <section class="rux-card popups">
      <header class="rux-card__header">
        <h1>Pop Ups</h1>
      </header>
      <div class="rux-card__content">
      </div>
    </section>


			<!-- END GRID //-->
		</div>
	</rux-tab-panel>











      <rux-tab-panel aria-labeledby="t2" role="tabpanel">

    
        <div class="grid">
        <rux-notification
        status$=[[notificationStatus]]
        
        message="This is a global notification banner.">
      </rux-notification>
          
          <!-- 1. SLIDER //-->
          <section class="rux-card slider">
            <header class="rux-card__header">
              <h1>Slider</h1>
            </header>
            <div class="rux-card__content">
              <rux-slider 
                axis-labels=[[sliderObjThree.labels]] 
                min=0
                max=100
                val={{sliderObjThree.value}}></rux-slider>
            </div>
          </section>


          <!-- 2. TABS //-->
          <section class="rux-card tabs">
            <header class="rux-card__header">
              <h1>Tabs</h1>
            </header>
            <div class="rux-card__content">
            <!-- <rux-tabs id="main">
            <rux-tab id="a1" role="tab" selected>Tab 1</rux-tab>
            <rux-tab id="a2" role="tab">Tab with a Long Title</rux-tab>
            <rux-tab id="a3" role="tab" disabled>Tab 3</rux-tab>
            
          </rux-tabs> 
    
          <rux-tab-panels role="tablist" aria-labeledby="main">
            <rux-tab-panel aria-labeledby="a1" role="tabpanel">
              <h3>Modems</h3>
            </rux-tab-panel>
    
            <rux-tab-panel aria-labeledby="a2" role="tabpanel">
              <h3>Pass Plans</h3>
            </rux-tab-panel>
    
            <rux-tab-panel aria-labeledby="a3" role="tabpanel">
              <h3>Satellites</h3>
            </rux-tab-panel>
          </rux-tab-panels>
          //-->
    
    
          <br>
    
          <rux-tabs id="compact-tabs" compact>
            <rux-tab id="ct1" role="tab" selected>Tab 1</rux-tab>
            <rux-tab id="ct2" role="tab">Tab 2</rux-tab>
            <rux-tab id="ct3" role="tab" disabled>Tab 3</rux-tab>
          </rux-tabs>
    
          <rux-tab-panels role="tablist" aria-labeledby="compact-tabs">
            <rux-tab-panel aria-labeledby="ct1" role="tabpanel">
              <h3>Tab 1</h3>
            </rux-tab-panel>
    
            <rux-tab-panel aria-labeledby="ct2" role="tabpanel">
              <h3>Tab 2</h3>
            </rux-tab-panel>
    
            <rux-tab-panel aria-labeledby="ct3" role="tabpanel">
              <h3>Tab 3</h3>
            </rux-tab-panel>
          </rux-tab-panels>
    
          <br>
    
          <rux-tabs id="interior-tabs" interior>
            <rux-tab id="i1" role="tab" selected>Tiny 1</rux-tab>
            <rux-tab id="i2" role="tab">Tiny 2</rux-tab>
            <rux-tab id="i3" role="tab" disabled>Tiny 3</rux-tab>
          </rux-tabs>
    
          <rux-tab-panels role="tablist" aria-labeledby="interior-tabs">
            <rux-tab-panel aria-labeledby="i1" role="tabpanel">
              <h3>Tab 1</h3>
            </rux-tab-panel>
    
            <rux-tab-panel aria-labeledby="i2" role="tabpanel">
              <h3>Tab 2</h3>
            </rux-tab-panel>
    
            <rux-tab-panel aria-labeledby="i3" role="tabpanel">
              <h3>Tab 3</h3>
            </rux-tab-panel>
          </rux-tab-panels>

            </div>
          </section>


          <!-- 3. TREE //-->
          <section class="rux-card tree">
            <header class="rux-card__header">
              <h1>Tree</h1>
            </header>
            <div class="rux-card__content">
              <rux-tree data={{treeData}}></rux-tree>
              <!-- Selected Tree Element: [[treeData.selected.label]]
              <br>Action for Tree Element: [[treeData.selected.payload.action]] //-->
            </div>
          </section>



          <!-- 4. MODAL //-->
          <section class="rux-card modal">
            <header class="rux-card__header">
              <h1>Modal</h1>
            </header>
            <div class="rux-card__content">
              <figure>
                <rux-button class="rux-launch-button" on-click="_launchModal">Launch Modal</rux-button>
              </figure>
              <figcaption>
                <p>I’m just sitting here listening for a modal window event: <span class="look">[[modalMessage]]</span></p>
              </figcaption>

            <rux-modal
              message="Release Modem 2 on slice 1000 for deactivation. Releasing this modem cannot be undone." 
              confirm-text="Release"
              deny-text="Cancel"
              opened></rux-modal>
            </div>
          </section>


          <!-- 5. NOTIFICATIONS //-->
          <section class="rux-card notifications-sample">
            <header class="rux-card__header">
              <h1>Notifications</h1>
            </header>
            <div class="rux-card__content">
              <rux-button on-click="_showNotification" data-notification="0">Toggle Notification Banner</rux-button>

              
            </div>
          </section>
          

          <!-- 6. ADVANCED STATUS //-->
          <section class="rux-card advanced-status">
            <header class="rux-card__header">
              <h1>Advanced Status</h1>
            </header>
            <div class="rux-card__content">
            <ul class="icon-list">
            <li>
            <rux-status
              status="off"
              label="Mission"
              icon="monitoring:mission"
              notifications=0
              ></rux-status>
            </li>
            <li>
            <rux-status
              status="standby"
              label="Equipment"
              icon="monitoring:equipment"
              notifications=1
              ></rux-status>
            </li>
            <li>
            <rux-status
              status="normal"
              label="Processor"
              icon="monitoring:processor"
              notifications=10
              ></rux-status>
            </li>
            <li>
            <rux-status
              status="caution"
              label="Antenna"
              icon="monitoring:antenna-off"
              notifications=100
              ></rux-status>
            </li>
            <li>
            <rux-status
              status="error"
              label="Ant"
              icon="monitoring:antenna-transmit"
              notifications=1000
              active></rux-status>
            </li>
            <li>
            <rux-status
              status="critical"
              label="Ant"
              icon="monitoring:antenna-receive"
              notifications=1000000
              active></rux-status>
            </li>
          </ul>
            </div>
          </section>

          <!-- 7. LOG //-->
          <section class="rux-card log">
            <header class="rux-card__header">
              <h1>Log</h1>
            </header>
            <div class="rux-card__content">
            <rux-button on-click="_updateLog">Update Log</rux-button>
            <br><br>
            <rux-log 
                max-lines=5
                formatting=[[logFormatting]]
                data=[[logData]]>
            </rux-log>
            </div>
          </section>

          <!-- 8. Search //-->
          <section class="rux-card search">
            <header class="rux-card__header">
              <h1>Search</h1>
            </header>
            <div class="rux-card__content">
              <input type="search"></input>
            </div>
          </section>


          <!-- 9. CLOCK //-->
          <section class="rux-card clock">
            <header class="rux-card__header">
              <h1>Clock</h1>
            </header>
            <div class="rux-card__content">
              <rux-clock compact></rux-clock>
              <br>
              <rux-clock></rux-clock>
            </div>
          </section>



        </div>
      </rux-tab-panel>


      <rux-tab-panel aria-labeledby="t3" role="tabpanel">  
      <div class="grid">
        <div class="timeline">
          <rux-timeline
            status="caution"
            id="listenerTimeline"
            label="Timeline" 
            type="realtime" 
            initial-scale=100
            data={{timeline}}
            tracks=[[multiTrack]]
            playback-controls="footer" 
            zoom-control=true>
          </rux-timeline>
        </div>
      </div>
    </rux-tab-panel>

      <rux-tab-panel aria-labeledby="t4" role="tabpanel">  
        <div class="grid">
          <section class="rux-card theme-colors">
            <header class="rux-card__header">
              <h1>Theme Colors</h1>
            </header>
            <div class="rux-card__content">
              <div class="swatch-book">
                <template is="dom-repeat" items=[[themeColors]]>
                  <figure class="swatches">
                    <figcaption>[[item.label]]</figcaption>

                    <template is="dom-repeat" items=[[item.colors]]>
                    <figure class="swatch-meta">
                      <div class="swatch" style$="background-color: var([[item.color]])">
                      <dl>
                        <dt>Hex:</dt>
                        <dd>[[item.hex]]</dd>
                        <dt>RGB:</dt>
                        <dd>[[item.rgb]]</dd>
                      </dl>
                      </figure>
                    </template>
                  </figure>
                </template>
              </div>

            </div>
          </section>


          <section class="rux-card status-colors">
            <header class="rux-card__header">
              <h1>Status Colors</h1>
            </header>
            <div class="rux-card__content">

              

            </div>
          </section>


          <section class="rux-card civilian-colors">
            <header class="rux-card__header">
              <h1>Civilian Colors</h1>
            </header>
            <div class="rux-card__content">

              

            </div>
          </section>

        </div>
      </rux-tab-panel>

    
      <rux-tab-panel aria-labeledby="t5" role="tabpanel">  
        <div class="grid">
          <section class="rux-card headings">
            <header class="rux-card__header">
              <h1>Headers</h1>
            </header>

            <div class="rux-card__content">
              <h1>Semantic Heading Level 1</h1>
              <h2>Semantic Heading Level 2</h2>
              <h3>Semantic Heading Level 3</h3>
              <br>

              <h1 class="h3">Semantic Heading Level 1, Visually Level 3</h1>
              <h2 class="h3">Semantic Heading Level 2, Visually Level 3</h2>
              <h3 class="h3">Semantic Heading Level 3, Visually Level 3</h3>
            </div>
          </section>

          <section class="rux-card text">
            <header class="rux-card__header">
              <h1>Content</h1>
            </header>
            <div class="rux-card__content">
              <h2 class="h3">Extra Large Text</h2>
              <p class="xl">Repellendus molestiae corrupti recusandae ut autem ab. Sequi inventore pariatur tempora inventore quo voluptatem quis aut. Nihil ut ullam sequi optio qui est voluptatem et suscipit. Omnis quaerat officiis deserunt ex quo quis fugit eum id. Corporis ipsam voluptatem quas qui temporibus neque et.</p>
              <h2 class="h3">Large/Default Text</h2>
              <p class="l">Est molestiae cumque. Perspiciatis eaque occaecati cupiditate rerum accusamus praesentium quasi id at. Modi id nemo in sed. Consequatur iure et distinctio est. Suscipit nesciunt itaque.</p>
              <h2 class="h3">Medium Text</h2>
              <p class="md">Amet et ea eos voluptate ut voluptatem temporibus non sit. Dicta quo alias. Quam qui ut nihil dicta vel minima tempora. Atque blanditiis nihil officiis laborum quas quis.</p>
              <h2 class="h3">Small Text</h2>
              <p class="sm">Omnis enim nostrum eius necessitatibus odit. Eum qui consequatur neque molestias perferendis dignissimos occaecati autem.</p>
              <h2 class="h3">Extra Small Text</h2>
              <p class="xs">Sint officia et libero. Eveniet occaecati aut in quia qui.</p>
            </div>
          </section>

          <section class="rux-card variants">
            <header class="rux-card__header">
              <h1>Variants &amp; Lists</h1>
            </header>

            <div class="rux-card__content">
              <p class="inverted">Inverted Text</p>
              <p class="low-contrast">Low Contrast Text</p>
              <a href>Link Color</a>

              <ul>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
              </ul>

              <ol>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ol>

              <dl>
                <dt>Definition Term 1</dt>
                <dd>Eius in aspernatur adipisci.</dd>
                <dt>Definition Term 2</dt>
                <dd>Molestiae nostrum qui.</dd>
                <dt>Definition Term 3</dt>
                <dd>Laudantium et consequatur sunt nihil porro.</dd>
              </dl>
            </div>
          </section>

        </div>
      </rux-tab-panel>

      <rux-tab-panel aria-labeledby="t6" role="tabpanel">  
        <div class="grid">

          <section class="rux-card monitoring-icons">
            <header class="rux-card__header">
              <h1>Monitoring Icons</h1>
            </header>
            <div class="rux-card__content">
            
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

        <section class="rux-card utility-icons">
          <header class="rux-card__header">
            <h1>Utility Icons</h1>
          </header>
          <div class="rux-card__content">
            <ul class="icon-list">
              <li><rux-icon icon="utility:notifications"></li>
              <li><rux-icon icon="utility:settings"></li>
              <li><rux-icon icon="utility:maintenance"></li>
              <li><rux-icon icon="utility:caution"></li>
            </ul>
          </div>
        </section>


        <section class="rux-card component-icons">
          <header class="rux-card__header">
            <h1>Component Icons</h1>
          </header>
          <div class="rux-card__body">
            <ul class="icon-list">
              <li><rux-icon icon="component:add-large"></li>
              <li><rux-icon icon="component:add-small"></li>
              <li><rux-icon icon="component:close-large"></li>
              <li><rux-icon icon="component:close-small"></li>
              <li><rux-icon icon="component:collapse"></li>
              <li><rux-icon icon="component:expand"></li>
              <li><rux-icon icon="component:lock"></li>
              <li><rux-icon icon="component:unlock"></li>
              <li><rux-icon icon="component:search"></li>
            </ul>
          </div>
        </section>


        <section class="rux-card status-icons">
          <header class="rux-card__header status-icons">
            <h1>Status Symbols</h1>
          </header>
          <div class="rux-card__content">
          <ul class="icon-list">
            <li><rux-status status="critical"></rux-status></li>
            <li><rux-status status="caution"></rux-status></li>
            <li><rux-status status="serious"></rux-status></li>
            <li><rux-status status="normal"></rux-status></li>
            <li><rux-status status="standby"></rux-status></li>
            <li><rux-status status="off"></rux-status></li>
            
          </ul>
          </div>
        </section>
          
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

    /* SEGMENTED BUTTON DATA */
    this.segmentOne = [
      {
        label: "Hour"
      },
      {
        label: "Day"
      },
      {
        label: "Week"
      }
    ];

    /* SLIDER OBJECT DATA */
    this.sliderObjThree = {
      value: 10,
      labels: "min,mid,max"
    };

    /* TREE DATA */
    this.treeData = [
      {
        _id: "i1",
        label: "Item 1",
        payload: { action: "this could be anything …" },
        children: [
          { _id: "i1-1", label: "Child 1", payload: { action: "… an id" } },
          {
            _id: "i1-2",
            label: "Child 2",
            payload: { action: "… a method call to be interpreted" }
          }
        ]
      },
      {
        _id: "i4",
        label: "Item 4",
        payload: { action: "Works on items with no children" }
      },
      {
        _id: "i2",
        label: "Item 3",
        payload: { action: "Just use the paylod property …" },
        children: [
          {
            _id: "i2-1",
            label: "Child 1.1",
            payload: { action: "… then use whatever key/value pairs you want" }
          },
          {
            _id: "i2-2",
            label: "Child 1.2",
            payload: { action: "… it’s just an Object" }
          }
        ]
      }
    ];

    /* FAKE LOG DATA */
    this.logStatuses = [
      "off",
      "standby",
      "ok",
      "caution",
      "error",
      "emergency"
    ];
    this.logMessages = [
      "Architecto temporibus iusto dolor quisquam",
      "Reiciendis similique earum qui quas corporis error et",
      "Necessitatibus magni corporis est nam asperiores est",
      "occaecati laudantium beatae",
      "Architecto et quasi. Rerum et quod iste eum aperiam voluptates vel. Blanditiis enim deserunt",
      "Dolorum expedita assumenda quia nihil omnis. Velit omnis fugit dolore laudantium quam dolor tempora asperiores corporis. Cupiditate quia ipsum"
    ];

    /* COLORS */
    this.themeColors = [
      {
        label: "Primary",
        colors: [
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorPrimaryLighten3, rgb(191, 214, 227)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorPrimaryLighten2, rgb(128, 173, 199)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorPrimaryLighten1, rgb(64, 131, 171)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorPrimary, rgb(0, 90, 143)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorPrimaryDarken1, rgb(0, 68, 107)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorPrimaryDarken2, rgb(0, 45, 72)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorPrimaryDarken3, rgb(0, 23, 36)"
          }
        ]
      },
      {
        label: "Secondary",
        colors: [
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSecondaryLighten3, rgb(211, 234, 255)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSecondaryLighten2, rgb(166, 214, 255)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSecondaryLighten1, rgb(122, 193, 255)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSecondary, rgb(77, 172, 255)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSecondaryDarken1, rgb(58, 129, 191)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSecondaryDarken2, rgb(39, 86, 128)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSecondaryDarken3, rgb(19, 43, 64)"
          }
        ]
      },
      {
        label: "Tertiary",
        colors: [
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorTertiaryLighten3, rgb(201, 207, 213)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorTertiaryLighten2, rgb(148, 159, 172)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorTertiaryLighten1, rgb(94, 111, 130)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorTertiary, rgb(40, 63, 88)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorTertiaryDarken1, rgb(30, 47, 66)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorTertiaryDarken2, rgb(20, 32, 44)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorTertiaryDarken3, rgb(10, 16, 22)"
          }
        ]
      },
      {
        label: "Critical",
        colors: [
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCriticalLighten3, rgb(201, 207, 213)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCriticalLighten2, rgb(148, 159, 172)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCriticalLighten1, rgb(94, 111, 130)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCritical, rgb(40, 63, 88)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCriticalDarken1, rgb(30, 47, 66)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCriticalDarken2, rgb(20, 32, 44)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCriticalDarken3, rgb(10, 16, 22)"
          }
        ]
      },
      {
        label: "Serious",
        colors: [
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSeriousLighten3, rgb(201, 207, 213)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSeriousLighten2, rgb(148, 159, 172)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSeriousLighten1, rgb(94, 111, 130)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSerious, rgb(40, 63, 88)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSeriousDarken1, rgb(30, 47, 66)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSeriousDarken2, rgb(20, 32, 44)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorSeriousDarken3, rgb(10, 16, 22)"
          }
        ]
      },
      {
        label: "Caution",
        colors: [
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCautionLighten3, rgb(201, 207, 213)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCautionLighten2, rgb(148, 159, 172)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCautionLighten1, rgb(94, 111, 130)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCaution, rgb(40, 63, 88)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCautionDarken1, rgb(30, 47, 66)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCautionDarken2, rgb(20, 32, 44)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorCautionDarken3, rgb(10, 16, 22)"
          }
        ]
      },
      {
        label: "Normal",
        colors: [
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorNormalLighten3, rgb(201, 207, 213)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorNormalLighten2, rgb(148, 159, 172)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorNormalLighten1, rgb(94, 111, 130)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorNormal, rgb(40, 63, 88)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorNormalDarken1, rgb(30, 47, 66)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorNormalDarken2, rgb(20, 32, 44)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorNormalDarken3, rgb(10, 16, 22)"
          }
        ]
      },
      {
        label: "Standby",
        colors: [
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorStandbyLighten3, rgb(201, 207, 213)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorStandbyLighten2, rgb(148, 159, 172)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorStandbyLighten1, rgb(94, 111, 130)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorStandby, rgb(40, 63, 88)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorStandbyDarken1, rgb(30, 47, 66)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorStandbyDarken2, rgb(20, 32, 44)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorStandbyDarken3, rgb(10, 16, 22)"
          }
        ]
      },
      {
        label: "Off",
        colors: [
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorOffLighten3, rgb(201, 207, 213)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorOffLighten2, rgb(148, 159, 172)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorOffLighten1, rgb(94, 111, 130)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorOff, rgb(40, 63, 88)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorOffDarken1, rgb(30, 47, 66)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorOffDarken2, rgb(20, 32, 44)"
          },
          {
            rgb: "rgb(111,111,111)",
            hex: "#ff0000",
            color: "--colorOffDarken3, rgb(10, 16, 22)"
          }
        ]
      }
    ];

    /* FAKE TIMELINE */
    const today = new Date();
    this.multiTrack = [
      {
        label: "LEO",
        regions: [
          {
            label: "NROL-11",
            status: "caution",
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              7,
              30,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              8,
              30,
              0
            )
          },
          {
            label: "DSP-1-18 F21",
            status: "ok",
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              10,
              0,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              13,
              0,
              0
            )
          },
          {
            label: "NROL-14 (KH-11)",
            status: "error",
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              15,
              0,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              20,
              30,
              0
            )
          }
        ]
      },
      {
        label: "HEO",
        regions: [
          {
            label: "GPS-IIR-15",
            status: "caution",
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              1,
              0,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              4,
              30,
              0
            )
          },
          {
            label: "GPS-IIR-16",
            status: "ok",
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              8,
              0,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              12,
              0,
              0
            )
          },
          {
            label: "GPS-IIR-16",
            status: "error",
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              17,
              0,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              20,
              30,
              0
            )
          }
        ]
      },
      {
        label: "GEO",
        regions: [
          {
            label: "STSS-Demo",
            status: "caution",
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              7,
              30,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              8,
              30,
              0
            )
          },
          {
            label: "WGS-3",
            status: "ok",
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              10,
              0,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              13,
              0,
              0
            )
          },
          {
            label: "GPS IIF-1",
            status: "error",
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              15,
              0,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              20,
              30,
              0
            )
          }
        ]
      }
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

  /* MODAL WINDOW */
  /* Functions */
  _launchModal() {
    const _modal = this.shadowRoot.querySelectorAll("rux-modal")[0];
    _modal.setAttribute("open", "");
  }

  /* UPDATE LOG */
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

  /* NOTIFICATIONS */

  _showNotification(e) {
    const _notification = this.shadowRoot.querySelectorAll("rux-notification")[
      e.currentTarget.dataset.notification
    ];

    if (_notification.hasAttribute("opened")) {
      _notification.removeAttribute("opened");
    } else {
      _notification.setAttribute("opened", "");
    }
  }
}

customElements.define("astro-component-viewer", AstroComponentViewer);
