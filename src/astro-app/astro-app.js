import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxGlobalStatusBar } from "../astro-components/rux-global-status-bar/rux-global-status-bar.js";
import { RuxSegmentedButton } from "../astro-components/rux-segmented-button/rux-segmented-button.js";
import { RuxComponent } from "../astro-components/rux-component/rux-component.js";
import { RuxProgress } from "../astro-components/rux-progress/rux-progress.js";
import { RuxButton } from "../astro-components/rux-button/rux-button.js";
import { RuxStatus } from "../astro-components/rux-status/rux-status.js";
import { RuxIcon } from "../astro-components/rux-icon/rux-icon.js";
import { RuxTabs } from "../astro-components/rux-tabs/rux-tabs.js";
import { RuxPopUpMenu } from "../astro-components/rux-pop-up-menu/rux-pop-up-menu.js";
import { RuxClock } from "../astro-components/rux-clock/rux-clock.js";
import { RuxModal } from "../astro-components/rux-modal/rux-modal.js";
import { RuxSlider } from "../astro-components/rux-slider/rux-slider.js";
import { RuxToggle } from "../astro-components/rux-toggle/rux-toggle.js";
import { RuxPushButton } from "../astro-components/rux-push-button/rux-push-button.js";
import { RuxTimeline } from "../astro-components/rux-timeline/rux-timeline.js";
import { RuxNotification } from "../astro-components/rux-notification/rux-notification.js";

import { AstroSamples } from "./astro-sample/astro-samples.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroApp extends PolymerElement {
  static get template() {
    return html`

    <style>
      :host {
        display: block;
        /* box-sizing: border-box; */
      }


      rux-button.demo-button--hover button {
        background-color: red !important;
      }

      section {
        /* outline: 1px solid red; */
        margin: 1em 1em 1em 0;
        padding: 1em 2rem;
        background-color: rgba(0,0,0,0.2);
      }

      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        width: auto;
        padding: 0;
        margin: 0;
        
      }

      ul li {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .icon-library li {
        border: 1px solid rgba(255,255,255,0.2);
        
        margin-top: -1px;
        margin-left: -1px;
        
        
        text-align: center;

        max-width: 100px;
        padding: 1em;
        
      }

      .button-library li {
        border: 1px solid rgba(255,255,255,0.2);
        
        margin-top: -1px;
        margin-left: -1px;
      
        text-align: center;
        padding: 1em;
        
      }

      .button-library figcaption {
        margin-top: 0.5rem;
      }


      

      .icon-library figcaption {
        font-family: monospace;
        margin-top: 0.5rem;
      }

      code {
        font-family: monospace;
        font-size: 1.1rem;
        padding: 0.2rem 0.5rem;
        
        background-color: rgba(50,159,255,0.25);
      }

      p code {
        color: #329FFF;
      }


      .rux-slider-container {
        max-width: 25rem;
      }

      .color-palette {
        display: flex;
        flex-direction: column;
      }

      .color-palette li {
        display: block;
        height: 5rem;
        width: 7rem;
        
      }

      .modal {

      }
      .modal ol {
        list-style: none;
        padding: 1em;
        margin; 0;
        width: 25%;
        outline: 1px solid rgba(255,255,255,0.2);
      }

      .modal li {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
      }

      .modal li label {
        
        margin: 0 0 0.5rem 0;
      }

      .modal input {
        padding: 0.25rem;
        
      }

			.look {
				background-color: green;
			}
      

      
      

      .default-icon {
        background-color: hsl(212.4, 72.4%, 58.8%);
      }
      .default-icon----4 {
        background-color: hsl(212.4, 72.4%, 18.8%);
      }
      .default-icon----3 {
        background-color: hsl(212.4, 72.4%, 28.8%);
      }
      .default-icon----2 {
        background-color: hsl(212.4, 72.4%, 38.8%);
      }
      .default-icon----1 {
        background-color: hsl(212.4, 72.4%, 48.8%);
      }
      .default-icon--1 {
        background-color: hsl(212.4, 72.4%, 68.8%);
      }
      .default-icon--2 {
        background-color: hsl(212.4, 72.4%, 78.8%);
      }
      .default-icon--3 {
        background-color: hsl(212.4, 72.4%, 88.8%);
      }
      .default-icon--4 {
        background-color: hsl(212.4, 72.4%, 98.8%);
      }


      /* .look {
        background: #6CE800;
        padding: 0.25rem;
      } */

      .toggle-buttons {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        

      }

      .toggle-buttons li {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 100%;
        
        margin: 0.25rem 0;
      }

      .toggle-buttons li div {
        margin-right: 1em;
      }


			.master-detail {
				display: flex;
			}

			.master {
				display: flex;
				flex-direction: column;
				flex-wrap: nowrap;
				flex-shrink: 0;
				
				width: 200px;
				margin: 0 1rem 0 0;
			}

			.master li {
				font-size: 0.9rem;
				height: auto;
				flex-grow: 0;
				width: 100%;
				text-align: left;
				align-self: flex-start;
				
			}

			.detail {
				flex-grow: 1;
			}

			h1, h2 {
				font-weight: 300;
			}

			h2 {
				margin: 0;
			}

			.pass-plan__satellites {
				display: flex;
				flex-direction: column;
				height: 200px;
			}

			.pass-plan__satellites li {
				display: flex;
				flex-direction: row;
			}

			.pass-plan__satellites rux-status {
				margin-right: 0.5em;
			}
		
			

    </style>
    
<rux-global-status-bar appname="Astro Components"></rux-global-status-bar>



<div class="master-detail">
<astro-samples class="master">
<ul>
<li><astro-sample id="sample-status-indicator">Status</astro-sample></li>
<li><astro-sample id="sample-timeline">Timeline</astro-sample></li>
<li><astro-sample id="sample-toggle">Toggle</astro-sample></li>
<li><astro-sample id="sample-notification-banner">Notification Banner</astro-sample></li>
<li><astro-sample id="sample-pop-up-menus">Pop Ups</astro-sample></li>
<li><astro-sample id="sample-dialog">Dialog</astro-sample></li>
<li><astro-sample id="sample-colors">Colors</astro-sample></li>
<li><astro-sample id="sample-slider">Slider</astro-sample></li>
<li><astro-sample id="sample-progress">Progress</astro-sample></li>
<li><astro-sample id="sample-clock">Clock</astro-sample></li>

<li><astro-sample id="sample-icons">Icons</astro-sample></li>
<li><astro-sample id="sample-buttons">Buttons</astro-sample></li>
<li><astro-sample id="sample-segmented-button">Segmented Button</astro-sample></li>
<li><astro-sample id="sample-data-visualization">Data</astro-sample></li>
<li><astro-sample id="sample-form">Form</astro-sample></li>
<li><astro-sample id="sample-log">Log</astro-sample></li>
<li><astro-sample id="sample-text-formatting">Text</astro-sample></li>
</ul>
</astro-samples>
	



<astro-sample-panels class="detail">

<astro-sample-panel aria-labeledby="sample-notification-banner">
<h1>Notification Banner</h1>
<p>This is the second stage of notifications</p>
<section style="position: releative;">
	<h2>Global Notification Banner</h2>
	<p>This is a notification banner that will sit at the top of a given window. It’s kind of predicated on how the app is constructed though which is, sub-optimal. If the containing element(s) the <code>rux-notification</code> is attached to have no explicit position, the notifiation becomes a global notification.</p>
	<rux-button on-click="_showNotification" data-notification="0">Toggle Notification Banner</rux-button>
	<rux-notification
		target="global"
		message="This is a global notification banner.">
	</rux-notification>
</section>

<section style="position: releative;">
	<h2>Localized Notification Banner</h2>
	<p>This is a notification banner display localized to its containing element, in this case the <code>section</code> element.</p>
	<rux-button on-click="_showNotification" data-notification="1">Toggle Notification Banner</rux-button>
	<rux-notification
			message="This is a local notification banner.">
	</rux-notification>
</section>

<section>
	<h2>Localized Notification Banner with Auto Close</h2>
	<p>Same as above, but will automatically close after 2 seconds. Timeout to close can be set within reason. Nothing shorter than 2 seconds or longer than 10 seconds currently.</p>
	<rux-button on-click="_showNotification" data-notification="2">Toggle Notification Banner</rux-button>
	<rux-notification
			close-after=2
			message="This is a local notification banner.">
	</rux-notification>
</section>

<section style="position: releative;">
	<h2>Localized Notification Banner with Push Down</h2>
	<p>This is a notification banner display localized to its containing element. Instead of overlaying content, it pushes the content down.</p>
	<rux-button on-click="_showNotification" data-notification="3">Toggle Notification Banner</rux-button>
	<rux-notification
			push=true
			message="This is a local notification that pushes content down.">
	</rux-notification>
</section>


<section>
	<h2>Localized Notification Banner with Status Color</h2>
	<p>This is a notification banner display that accepts a <code>status</code> paramater to match the six status color states.</p>
	<rux-button on-click="_showNotification" data-notification="4">Toggle Notification Banner</rux-button>
	<rux-notification
			status="emergency"
			message="This is a local notification banner.">
	</rux-notification>
</section>

</astro-sample-panel>

	<astro-sample-panel aria-labeledby="sample-pop-up-menus">
		<h1>Pop Up Menu</h1>
		<p>Pop Up Menu does neat stuff …</p>
		<section>
			<h2>Pop Up Menu</h2>
			<p>
				<a>Click here to see a standard popup menu.</a> This uses a single
				<code>rux-pop-up-menu</code> instance</p>
			<rux-pop-up-menu menu-items=[[_popMenuItems]] target={{_popMenuTarget}}></rux-pop-up-menu>
			<div>
				<p>You selected the [[_selectedMenuItem]]</p>
			</div>
		</section>
		<section>
			<rux-status icon="advanced-status:mission" status=[[_popMenuStatus]] label="Label" sublabel="Sub-label" on-click="_showPopUp">
		</section>
	</astro-sample-panel>

	<astro-sample-panel aria-labeledby="sample-toggle">
		<h1>Toggle & Push Buttons</h1>
		<p>Toggle and Push Buttons instances are fancy checkboxes</p>
		<section>
      <h2>Toggle Buttons</h2>
      <p>Toggle Buttons are effectively stylized checboxes and support the <code>checked</code> Boolean value</p>
			<ul class="toggle-buttons">
				<li>
					<div id="toggle1">Toggle 1:</div>
					<rux-toggle aria-labeledby="toggle1"></rux-toggle>
				</li>
				<li>
					<div id="toggle2">Toggle 2:</div>
					<rux-toggle checked aria-labeledby="toggle1">
						<rux-toggle>
				</li>
				<li>
					<div id="toggle3">Toggle 3:</div>
					<rux-toggle disabled aria-labeledby="toggle1"></rux-toggle>
				</li>
				<li>
					<div id="toggle4">Toggle 4:</div>
					<rux-toggle checked disabled aria-labeledby="toggle1"></rux-toggle>
				</li>
			</ul>
		</section>

		<section>
			<h2>Toggle Push Buttons</h2>
			<p>A push button does some other neat stuff …</p>
			<ul class="toggle-buttons">
				<li>
					<rux-push-button checked-label="Active" unchecked-label="Inactive Button"></rux-push-button>
				</li>
				<li>
					<rux-push-button checked-label="Active" unchecked-label="Inactive Button" checked>
						<rux-push-button>
				</li>
				<li>
					<rux-push-button checked-label="Disabled Active" unchecked-label="Disabled Inactive Button" disabled></rux-push-button>
				</li>
				<li>
					<rux-push-button checked-label="Disabled Active" unchecked-label="Disabled Inactive Button" checked disabled></rux-push-button>
				</li>
			</ul>
		</section>
	</astro-sample-panel>

	<astro-sample-panel aria-labeledby="sample-colors">
		<h1>Colors</h1>
		<p>This is a quick experiment in color palettes using the HSL color model which enables for a rich/complex color system, easily modified for other themes and uses without major restructuing of code. Aaron can speak to the specifics of the theory on color palettes.</p>
		<section>
			<h2>Default Icon Color</h2>
			<p>This is just a sample of the default icon color with its base hue with its tint/shade increased/decreased in 10% increments.</p>
			<ul class="color-palette">
				<li class="default-icon----4"></li>
				<li class="default-icon----3"></li>
				<li class="default-icon----2"></li>
				<li class="default-icon----1"></li>
				<li class="default-icon"></li>
				<li class="default-icon--1"></li>
				<li class="default-icon--2"></li>
				<li class="default-icon--3"></li>
				<li class="default-icon--4"></li>
			</ul>
		</section>
	</astro-sample-panel>

	<astro-sample-panel aria-labeledby="sample-slider">
		<h1>Slider</h1>
		<p>The slider does cool stuff … </p>
		<section>
			<h2>Slider (WIP)</h2>
			<code>&lt;rux-slider&gt;</code>
			</p>
			<div class="rux-slider-container">
				<rux-slider label="Label" val={{sliderObj.value}}></rux-slider>
			</div>
			<div class="output">Slider Value is = [[sliderObj.value]]</div>
		</section>
		<section>
			<h2>Slider Custom Range and Step(WIP)</h2>
			<code>&lt;rux-slider&gt;</code>
			</p>
			<div class="rux-slider-container">
				<rux-slider min={{sliderObjTwo.min}} max={{sliderObjTwo.max}} step={{sliderObjTwo.step}} val={{sliderObjTwo.value}}></rux-slider>
			</div>
			<div class="output">Slider Value is = [[sliderObjTwo.value]]</div>
		</section>
		<section>
			<h2>Slider with Labels</h2>
			<code>&lt;rux-slider&gt;</code>
			</p>
			<div class="rux-slider-container">
				<rux-slider axis-labels=[[sliderObjThree.labels]] val={{sliderObjThree.value}}></rux-slider>
			</div>
			<div class="output">Slider Value is = [[sliderObjThree.value]]</div>
		</section>
	</astro-sample-panel>

	<astro-sample-panel aria-labeledby="sample-segmented-button">
		<h1>Segmented Button</h1>
		<p>Segmented Buttons are just radio-buttons gussied up for the ball.</p>
		<section>
			<h2>Segmented Button (WIP)</h2>
			<code>&lt;rux-segmented-button&gt;</code> is highly stylized version of a radio button group offering a distinct user choice.
			Buttons are defined via a standard JavaScript Array of Objects. Each object must have a button label and supports additional
			key/value pairs. e.g.,
			<code>segmentedButtons = [{ "label" : "Hour" }, { "label" : "Day" }, { "label" : "Week" } }]</code> will produce the follwing
			segmented button</p>
			<rux-segmented-button data={{segmentOne}}></rux-segmented-button>
			<div class="output">Output = [[segmentOne.selected.label]]</div>

			<rux-segmented-button data={{segmentTwo}}></rux-segmented-button>
			<div class="output">Output = [[segmentTwo.selected.value.result]]</div>
		</section>
	</astro-sample-panel>

	<astro-sample-panel aria-labeledby="sample-icons">
		<h1>Icons</h1>
		<p>Icons can be used by themselves, but also form the basis of status and can be used in a variety of other components, like buttons.</p>
		<section>
			<h2>Test Icon from Sketch Library</h2>
			<p>This is an icon exported from the new Sketch document icon library (left) compared to the older icon (right). They appear to be visually indistinguishable.</p>
			<ul class="icon-library">
				<li>
					<figure>
						<rux-icon icon="test:mission"></rux-icon>
						<figcaption>mission</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status:mission"></rux-icon>
						<figcaption>mission</figcaption>
					</figure>
				</li>
			</ul>
		</section>

		<section>
			<h2>Default Icon Set</h2>
			<p>Standard Astro Icons that can be used across all types of Astro based applications.</p>
			<p>To use a defaul icon use the
				<code>default</code> namespace. E.g.,
				<code>&lt;rux-icon icon="default:settings"&gt;&lt/rux-icon&gt;</code>
			</p>
			<ul class="icon-library">
				<li>
					<figure>
						<rux-icon icon="default:settings"></rux-icon>
						<figcaption>settings</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="default:notifications"></rux-icon>
						<figcaption>notifications</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="default:caution"></rux-icon>
						<figcaption>caution</figcaption>
					</figure>
				</li>
			</ul>
		</section>

		<section>
			<h2>Advanced Status Icons</h2>
			<p>Advanced Status Icons for SATCOM based applications.</p>
			<p>To use a defaul icon use the
				<code>advanced-status</code> namespace. E.g.,
				<code>&lt;rux-icon icon="advanced-status:processor"&gt;&lt/rux-icon&gt;</code>
			</p>
			<ul class="icon-library">
				<li>
					<figure>
						<rux-icon icon="advanced-status:mission"></rux-icon>
						<figcaption>mission</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status:equipment"></rux-icon>
						<figcaption>equipment</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status:processor"></rux-icon>
						<figcaption>processor</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status:antenna"></rux-icon>
						<figcaption>antenna</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status:antenna-transmit"></rux-icon>
						<figcaption>antenna-transmit</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status:antenna-receive"></rux-icon>
						<figcaption>antenna-receive</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status:satellite"></rux-icon>
						<figcaption>satellite</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status:satellite-transmit"></rux-icon>
						<figcaption>satellite-transmit</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status:satellite-receive"></rux-icon>
						<figcaption>satellite-receive</figcaption>
					</figure>
				</li>
			</ul>
		</section>

		<section>
			<h2>EGS Advanced Status Icons</h2>
			<p>Advanced Status Icons for EGS based applications.</p>
			<p>To use a defaul icon use the
				<code>advanced-status-egs</code> namespace. E.g.,
				<code>&lt;rux-icon icon="advanced-status-egs:netcom"&gt;&lt/rux-icon&gt;</code>
			</p>
			<ul class="icon-library">
				<li>
					<figure>
						<rux-icon icon="advanced-status-egs:antenna"></rux-icon>
						<figcaption>antenna</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status-egs:payload"></rux-icon>
						<figcaption>payload</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status-egs:altitude"></rux-icon>
						<figcaption>altitude</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status-egs:propulsion-power"></rux-icon>
						<figcaption>propulsion-power</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status-egs:netcom"></rux-icon>
						<figcaption>netcom</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="advanced-status-egs:thermal"></rux-icon>
						<figcaption>thermal</figcaption>
					</figure>
				</li>
			</ul>
		</section>

		<section>
			<h2>Default Status Symbols</h2>
			<p>Note: It is recommended you use
				<code>&lt;rux-status status="ok"&gt;&lt/rux-status&gt;</code> instead of the raw status symbol icons.
				<code>&lt;rux-status&gt;</code> provides additional functionality beyond simple graphic represenations.</p>
			<p>Status icons have embedded fill colors as defined in the Astro UXDS Guideline. These colors cannot be overriden with the
				color property like other icons.
				<em>
					<strong>Only standard status colors are supported.</strong>
				</em>.</p>
			<ul class="icon-library">
				<li>
					<figure>
						<rux-icon icon="status:emergency"></rux-icon>
						<figcaption>emergency</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="status:caution"></rux-icon>
						<figcaption>caution</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="status:error"></rux-icon>
						<figcaption>error</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="status:ok"></rux-icon>
						<figcaption>ok</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="status:standby"></rux-icon>
						<figcaption>standby</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-icon icon="status:off"></rux-icon>
						<figcaption>off</figcaption>
					</figure>
				</li>
			</ul>
		</section>
	</astro-sample-panel>

	<astro-sample-panel aria-labeledby="sample-status-indicator">
		<section>
			<h2>Status Indicator</h2>
			<p>Standard status indicator symbols.</p>
			<ul class="icon-library">
				<li>
					<figure>
						<rux-status status="off"></rux-status>
						<figcaption>off</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status status="standby"></rux-status>
						<figcaption>standby</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status status="ok"></rux-status>
						<figcaption>ok</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status status="error"></rux-status>
						<figcaption>error</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status status="caution"></rux-status>
						<figcaption>caution</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status status="emergency"></rux-status>
						<figcaption>emergency</figcaption>
					</figure>
				</li>
			</ul>
		</section>
		<section>
			<h2>Advanced Status Icons</h2>
			<p>Advanced Status Icons extend beyond simple status to provide additional information and interactivity.</p>
			<ul class="icon-library">
				<li>
					<figure>
						<rux-status icon="advanced-status:mission" status="off" label="A Longer Label for Testing" sublabel="Sub-label">
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status:equipment" status="standby" label="Label" sublabel="Sub-label" notifications=10>
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status:processor" status="ok" label="Label" sublabel="Sub-label" notifications=100>
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status:antenna" status="error" label="Label" sublabel="Sub-label" notifications=1000>
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status:antenna-transmit" status="caution" label="Label" sublabel="Sub-label" notifications=10000>
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status:antenna-receive" status="emergency" label="Label" sublabel="Sub-label" notifications=100000>
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status:satellite" status="off" label="Label" sublabel="Sub-label" notifications=1000000>
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status:satellite-transmit" status="standby" label="Label" sublabel="Sub-label" notifications=1000000000>
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status:satellite-receive" status="ok" label="Label" sublabel="Sub-label" notifications=1000000000000>
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status-egs:antenna" status="off" label="Label" sublabel="Sub-label">
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status-egs:payload" status="standby" label="Label" sublabel="Sub-label" notifications=10>
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status-egs:altitude" status="ok" label="Label" sublabel="Sub-label" notifications=100>
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status-egs:propulsion-power" status="error" label="Label" sublabel="Sub-label" notifications=1000>
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status-egs:netcom" status="caution" label="Label" sublabel="Sub-label" notifications=10000>
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-status icon="advanced-status-egs:thermal" status="emergency" label="Label" sublabel="Sub-label" notifications=100000>
						</rux-status>
						<figcaption></figcaption>
					</figure>
				</li>



			</ul>
		</section>




	</astro-sample-panel>

	<astro-sample-panel aria-labeledby="sample-progress">
			<h1>Progress</h1>
			<p>Astro two types of progress bars …</p>
		<section>
			<h2>Indeterminate Progress</h2>
			<p>If no value paramater is passed (i.e., the current status of progress) it is assumed the progress of the event is indeterminate
				and the indeterminate spinning progress bar will be used. The default state of
				<code>&lt;rux-progress&gt;</code> is indeterminate.</p>
			<rux-progress></rux-progress>
		</section>
		<section>
			<h2>Determinate Progress</h2>
			<p>To display a progress indicator with relative indication of progress add a
				<code>value</code> param; the value param accepts a valid Number and uses a default range of 0-100.</p>
			<rux-progress value=50></rux-progress>
		</section>
		<section>
			<h2>Determinate Progress with Label</h2>
			<p>A numeric output can also be displayed to the right of the progress bar by passing in
				<code>label=true</code>.</p>
			<rux-progress value=50 label=true></rux-progress>
		</section>
		<section>
			<h2>Determinate Progress (Custom Max Range)</h2>
			<p>Determinate Progress also accepts custom max value for progress values that don’t reflect percentages. The following sample
				shows a progress bar with a max value of 50,000 and a value of 13,500.</p>
			<rux-progress max=50000 value=13500></rux-progress>
		</section>


	</astro-sample-panel>

	<astro-sample-panel aria-labeledby="sample-buttons">
			<h1>Buttons</h1>
			<p>There’s a lot to say about buttons.</p>
		<section>
			<h2>Standard Buttons</h2>
			<ul class="button-library">
				<li>
					<figure>
						<rux-button>Standard Button</rux-button>
						<figcaption>Button</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-button default>Standard Button</rux-button>
						<figcaption>Default</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-button disabled>Standard Button</rux-button>
						<figcaption>Disabled</figcaption>
					</figure>
				</li>
			</ul>
		</section>

		<section>
			<h2>Large Buttons</h2>
			<ul class="button-library">
				<li>
					<figure>
						<rux-button type="large">Large Button</rux-button>
						<figcaption>Button</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-button type="large" default>Large Button</rux-button>
						<figcaption>Default</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-button type="large" disabled>Large Button</rux-button>
						<figcaption>Disabled</figcaption>
					</figure>
				</li>
			</ul>
		</section>


		<section>
			<h2>Small Buttons</h2>
			<ul class="button-library">
				<li>
					<figure>
						<rux-button type="small">Small Btn</rux-button>
						<figcaption>Button</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-button type="small" default>Small Btn</rux-button>
						<figcaption>Default</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-button type="small" disabled>Small Btn</rux-button>
						<figcaption>Disabled</figcaption>
					</figure>
				</li>
			</ul>
		</section>

		<section>
			<h2>Button with Icon</h2>
			<ul class="button-library">
				<li>
					<figure>
						<rux-button icon="default:caution">Icon Button</rux-button>
						<figcaption>Button</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-button icon="default:caution" default>Icon Button</rux-button>
						<figcaption>Default</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-button icon="default:caution" disabled>Icon Button</rux-button>
						<figcaption>Disabled</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-button type="large" icon="default:caution">Large Icon Button</rux-button>
						<figcaption>Disabled</figcaption>
					</figure>
				</li>
			</ul>
		</section>


		<section>
			<h2>Icon Button</h2>
			<ul class="button-library">
				<li>
					<figure>
						<rux-button type="icon" icon="default:settings">Settings</rux-button>
						<figcaption>Button</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-button type="icon" icon="default:settings" default>Settings</rux-button>
						<figcaption>Default</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-button type="icon" icon="default:settings" disabled>Settings</rux-button>
						<figcaption>Disabled</figcaption>
					</figure>
				</li>
			</ul>
		</section>


		<section>
			<h2>Button as Icon (WIP)</h2>
			<ul class="button-library">
				<li>
					<figure>
						<rux-button icon="media-controls:play"></rux-button>
						<figcaption>Button</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-button icon="media-controls:play" default></rux-button>
						<figcaption>Default</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<rux-button icon="media-controls:play" disabled></rux-button>
						<figcaption>Disabled</figcaption>
					</figure>
				</li>
			</ul>
		</section>

		<section>
			<h2>Button Group (WIP)</h2>
			<ul class="button-group">
				<li>
					<rux-button icon="media-controls:pause"></rux-button>
				</li>
				<li>
					<rux-button icon="media-controls:play"></rux-button>
				</li>
			</ul>
		</section>

	</astro-sample-panel>


	<astro-sample-panel aria-labeledby="sample-clock">
		<h1>Clock</h1>
		<p>The clock tells time.</p>
		<section>
			<h2>Default Clock</h2>
			<p>The default setting for
				<code>rux-clock</code> without any attributes is to present a 24-hour clock set to UTC time and the current day of the year.
			</p>
			<rux-clock></rux-clock>
		</section>

		<section>
			<h2>Clock with LOS/AOS Options</h2>
			<p>
				<code>rux-clock</code> can be customized to include an Acquisition of Signal (AOS) and Loss of Signal (LOS) via the
				<code>aos</code> and
				<code>los</code> attributes. Expectec values are a JavaScript Date Object. AOS/LOS will not display is the respective attribute
				is not present or if the value is not a date.</p>
			<rux-clock aos=[[fakeAOS]] los=[[fakeLOS]]></rux-clock>
		</section>

		<section>
			<h2>Clock with Custom Time Zone</h2>
			<p>
				<code>rux-clock</code> can use custom timezones. Timezones must be formatted in "Country/City".</p>
			<rux-clock timezone="America/Los_Angeles"></rux-clock>
		</section>

		<section>
			<h2>Clock with Hidden Timezone and Date</h2>
			<p>Both the date and timezone fields can be hidden via the
				<code>hide-date</code> and
				<code>hide-timezone</code> attributes.</p>
			<rux-clock aos="bad data" hide-date="true" hide-timezone="true"></rux-clock>
		</section>

	</astro-sample-panel>


	<astro-sample-panel aria-labeledby="sample-dialog">
		<h1>Modal Dialog</h1>
		<p>Modal Dialogs are the final and most invasive notification element in the notification chain.</p>
		<section>
			<h2>Static Modal Dialog</h2>
			<p>A static modal dialog box has a single declarative message, standard accept/decline buttons and the default caution icon.</p>
			<rux-button class="rux-launch-button" on-click="_launchModal">Launch Modal</rux-button>
			<p>I’m just sitting here listening for a modal window event:
				<span class="look">[[modalMessage]]</span>
			</p>
		</section>

		<section>
			<h2>Modal Dialog (Customized via Object)</h2>
			<p>For more complicated notifications systems consider using a object to define the modal dialog box. This allows you to
				have a single modal dialog that can have its message, button text labels and listening event updated dynamically.</p>
			<rux-button class="rux-launch-button" on-click="_launchDynamicModal">Launch Custom Modal</rux-button>
			<form class='modal'>
				<ol>
					<li>
						<label>Message:</label>
						<input type="text" value="{{dynamicModal.message::input}}" />
					</li>
					<li>
						<label>Confirm Button Text:</label>
						<input type="text" value="{{dynamicModal.confirmText::change}}" />
					</li>
					<li>
						<label>Deny Button Text:</label>
						<input type="text" value="{{dynamicModal.denyText::change}}" />
					</li>
				</ol>
			</form>
			<p>I’m just sitting here listening for a modal window event:
				<span class="look">{{customModalMessage}}</span>
			</p>
		</section>

		<rux-modal message="This is a dialog box with a very long message to see what happens when it wraps to a second line." confirm-text="Ok"
		  deny-text="Cancel"></rux-modal>

		<rux-modal id="dynamic-modal" message=[[dynamicModal.message]] confirm-text=[[dynamicModal.confirmText]] deny-text=[[dynamicModal.denyText]]
		  icon=[[dynamicModal.icon]] custom-event=[[dynamicModal.customEvent]] </rux-modal>


	</astro-sample-panel>



	<astro-sample-panel aria-labeledby="sample-data-visualization">
		<rux-spectrum-analyzer></rux-spectrum-analyzer>
	</astro-sample-panel>


	<astro-sample-panel aria-labeledby="sample-form">
		<h2>Buttons</h2>
		<h2>Checkbox</h2>
		<h2>Input Fields</h2>
		<h2>Radio Button</h2>
	</astro-sample-panel>


	<astro-sample-panel aria-labeledby="sample-log">
	</astro-sample-panel>


	<astro-sample-panel aria-labeledby="sample-text-formatting">
	</astro-sample-panel>


	<astro-sample-panel aria-labeledby="sample-timeline">
		<h1>Timeline</h1>
		<p>The timeline does some cool stuff …</p>
		<rux-clock></rux-clock>

		<section>
		<h2>Timeline</h2>
		<p>The standard timeline will default to a 24 hour time period</p>
		<rux-timeline
				label="Timeline" 
				initial-scale=100
				tracks=[[tracks]]
				zoom-control=true
				selected-region={{timelineSelectedRegion}}>
			</rux-timeline>

			
		</section>
		<section>
		<h2>Timeline with Custom Duration</h2>
		<p>Adds a playback head</p>
		<rux-timeline
				duration=8
				label="8 Hour Timeline" 
				initial-scale=100
				data={{timelineSimple}}
				tracks=[[tracks]]
				playback-controls="footer" 
				zoom-control=true>
			</rux-timeline>
		</section>
		<section>
		<h2>Timeline with Playback Head</h2>
		<p>Adds a playback head</p>
		<rux-timeline
				label="Timeline" 
				initial-scale=100
				data={{timelineSimple}}
				tracks=[[tracks]]
				playback-controls="footer"  
				playhead-control=true>
			</rux-timeline>
		</section>
		<section>
			<h2>Timeline with Multitrack</h2>
			<p>A developer could also define a timeline with a custom duration. An example here with 12 hour time frame. Note Satellite 3 and Satellite 5 have timespans that expand beyond the duration set by the deveoper, the default and only behavior is to cut those time segments off.</p>
			<rux-timeline
				id="listenerTimeline"
				label="Timeline" 
				type="realtime" 
				initial-scale=100
				data={{timeline}}
				tracks=[[multiTrack]]
				playback-controls="footer" 
				zoom-control=true>
			</rux-timeline>
			
			<p>The following satellites are in the pass plan</p>
			<ul class="pass-plan__satellites">
				<template is="dom-repeat" id="pass-plan-sats" items=[[passPlanSatellites]]>
					<li><rux-status status=[[item.status]]></rux-status>[[item.title]]</li>
				</template>
			</ul>
			<br>
			<br>
			
			
		</section>
	</astro-sample-panel>
</astro-sample-panels>
</div>

    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: "astro-app"
      },
      dynamicModalMessage: {
        type: String,
        notify: true,
        value: "From Property"
      },
      dynamicModal: {
        type: Object,
        notify: true
      },
      timeline: {
        type: Object,
        notify: true
      },
      timelineSimple: {
        type: Object,
        notify: true
      },
      passPlanSatellites: {
        type: Array,
        notify: true
      },
      tracks: {
        type: Array,
        notify: true
      },
      multiTrack: {
        type: Array,
        notify: true
      }
    };
  }

  _showPopUp(e) {
    this._popMenuTarget = e.currentTarget;
  }

  constructor() {
    super();
    this.name = "3.0 preview";
    this._popMenuStatus = "off";
    this._popMenuItems = [
      {
        label: "Off",
        action: "off"
      },
      {
        label: "Stand By",
        action: "standby"
      },
      {
        label: "Ok",
        action: "ok"
      },
      {
        label: "Error",
        action: "error"
      },
      {
        label: "Caution",
        action: "caution"
      },
      {
        label: "Emergency",
        action: "emergency"
      }
    ];

    this.timelineSelectedRegion = { title: "Batman" };

    this.passPlanSatellites = new Array();
    this._pass = new Array();

    // this.passPlanSatellites.push({ name: "test", status: "ok" });

    window.addEventListener("pop-up-menu-event", e => {
      this._popMenuStatus = e.detail.action;
    });

    window.addEventListener("modal-event", e => {
      if (e.detail.confirm) {
        this.modalMessage = "You agreed!";
      } else {
        this.modalMessage = "You didn’t agree";
      }
    });

    window.addEventListener("custom-modal-event", e => {
      if (e.detail.confirm) {
        this.customModalMessage = "You’re damn right";
      } else {
        this.customModalMessage =
          "I pity the fool who doesn’t think components are cool";
      }
    });

    // this.modalMessage = "test";
    this.sliderObj = {
      value: 10
    };
    this.sliderObjTwo = {
      value: 0,
      min: -10,
      max: 10,
      step: 0.1,
      labels: "min,mid,max"
    };
    this.sliderObjThree = {
      value: 10,
      labels: "min,mid,max"
    };

    this.fakeAOS = Date.now() - 1000000;
    this.fakeLOS = new Date();
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

    const today = new Date();

    this.timeline = {
      tracks: [
        {
          label: "LEO",
          regions: [
            {
              label: "DSP-1 F17",
              status: "caution",
              startTime: new Date(
                today.getUTCFullYear(),
                today.getUTCMonth(),
                today.getUTCDate(),
                2,
                30,
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
              label: "GPS-IIA-17",
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
              label: "GPS-IIR-2",
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
              label: "DSP-1-18 F20",
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
      ]
    };

    this.tracks = this.timeline.tracks;
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

    this.dynamicModal = {
      message:
        "Oh what? Custom icons in the modal window? Yeah, because components are dope.",
      confirmText: "Yup",
      icon: "default:settings",
      denyText: "Nah",
      customEvent: "custom-modal-event"
    };

    this.segmentTwo = [
      {
        label: "Good",
        value: {
          result: "Can’t be fast."
        }
      },
      {
        label: "Fast",
        value: {
          result: "Can’t be good."
        }
      },
      {
        label: "Cheap",
        value: {
          result: "Can’t be fast."
        }
      }
    ];
  }

  _showNotification(e) {
    console.log(e.currentTarget.dataset.notification);

    const _notification = this.shadowRoot.querySelectorAll("rux-notification")[
      e.currentTarget.dataset.notification
    ];

    if (_notification.hasAttribute("opened")) {
      _notification.removeAttribute("opened");
    } else {
      _notification.setAttribute("opened", "");
    }
  }

  _showGlobalNotification() {
    const _notification = this.shadowRoot.querySelectorAll(
      "rux-notification"
    )[0];

    if (_notification.hasAttribute("opened")) {
      _notification.removeAttribute("opened");
    } else {
      _notification.setAttribute("opened", "");
    }
  }

  _showLocalNotification() {
    const _notification = this.shadowRoot.querySelectorAll(
      "rux-notification"
    )[1];

    if (_notification.hasAttribute("opened")) {
      _notification.removeAttribute("opened");
    } else {
      _notification.setAttribute("opened", "");
    }
  }

  _showLocalPushNotification() {
    const _notification = this.shadowRoot.querySelectorAll(
      "rux-notification"
    )[2];

    if (_notification.hasAttribute("opened")) {
      _notification.removeAttribute("opened");
    } else {
      _notification.setAttribute("opened", "");
    }
  }

  _launchDynamicModal() {
    const _modal = this.shadowRoot.getElementById("dynamic-modal");
    _modal.setAttribute("open", "");
  }
  _launchModal() {
    const _modal = this.shadowRoot.querySelectorAll("rux-modal")[0];
    _modal.setAttribute("open", "");
  }
  _stringIt(obj) {
    return JSON.stringify(obj);
  }
  _showStatus(e) {
    // this.root.getElementById('pop-menu').attribute('target',e.target)
    // console.log('pop-up-menu', this.root.getElementById('pop-menu'));

    this.root.getElementById("status-pop-up").setAttribute("target", {
      x: "test"
    });
  }
  connectedCallback() {
    super.connectedCallback();

    const _listenerTimeline = this.shadowRoot.getElementById(
      "listenerTimeline"
    );

    _listenerTimeline.addEventListener("collidedRegion", e => {
      // check to see if the event
      let _region = this.passPlanSatellites.find(sat => {
        return sat.id == e.detail.id;
      });

      // if it doesn’t then add it to the array
      if (!_region) {
        this.passPlanSatellites.push(e.detail);
        this.notifyPath("passPlanSatellites.*", this.passPlanSatellites);
        // console.log("added one", this.passPlanSatellites);
      }
    });

    _listenerTimeline.addEventListener("collidedRegionExited", e => {
      let _index = this.passPlanSatellites.findIndex(sat => {
        return sat.id === e.detail.id;
      });

      if (!isNaN(_index)) {
        this.passPlanSatellites.splice(_index, 1);
        this.notifyPath("passPlanSatellites.*", this.passPlanSatellites);
        // console.log("removed one", this.passPlanSatellites);
      }
    });
  }
  disconnectedCallback() {
    suer.disconnectedCallback();
  }
  ready() {
    super.ready();
  }
}
customElements.define("astro-app", AstroApp);
