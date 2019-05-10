#Global Status Bar
The Global Status Bar is a full width view across the top of an application — an area commonly reserved for global status, global command and top-level navigation. The Global Status Bar often includes: Application Name, Monitoring Icons, Top Level Navigation and an Emergency Button.

### Rules of Thumb
- Make Monitoring Icons interactive to reveal in-depth information.
- Make sure that Monitoring Icons use color coding, iconography and labels consistent with the standard design.
- Include the name of the application.

_Note: There is no light theme for the Global Status Bar. Ensure all elements within the Global Status Bar are using the dark theme._

##Guidelines

* [Astro UXDS: Global Status Bar](https://astrouxds.com/ui-components/global-status-bar)


## Web Components Usage

### 1. Installation
#### ** Install the Astro RUX Global Status Bar package via Command Line** (Preferred Method)

```sh
npm i -save @astrouxds/rux-global-status-bar
```


You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.


#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.
Via CLI: 

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)


### 2. Import the RUX Global Status Bar Web Component
This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxGlobalStatusBar } from "@astro-components/rux-global-status-bar/rux-global-status-bar.js";
```

### 3. Render the RUX Global Status Bar Web Component

```xml
 <rux-global-status-bar appname="Astro App" version="3.0"></rux-global-status-bar>
```

Status bar elements like the [Clock](https://www.astrouxds.com/ui-components/clock),  [Tabs](https://www.astrouxds.com/library/tabs) and [Buttons](https://www.astrouxds.com/library/buttons) and even plain HTML can be inserted into the body of the Global Status Bar:

```xml
 <rux-global-status-bar class="dark-theme" appname="Astro App" version="3.0">
	 <rux-clock></rux-clock>
	 <div><!-- Any HTML here --></div>
	 <rux-button>Master Off</rux-button>
 </rux-global-status-bar>
```



### Properties

| Property        | Type      | Default | Required | Description  |
| --------- | -------- | -------------------------------------- |
| `appname` | String | `''` | no | An optional name for the app           |
| `version` | String | `''` | no | An optional version number for the app |



## Revision History
##### **4.1**
- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.


##### **Notes**
RUX Global Status Bar is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html).

**Note:** RUX Global Status Bar is available as a preview release and should not be used in production code.




