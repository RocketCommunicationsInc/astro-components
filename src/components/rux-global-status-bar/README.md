# Global Status Bar

The Global Status Bar is a full width view across the top of an application — an area commonly reserved for global status, global command and top-level navigation. The Global Status Bar often includes: Application Name, Monitoring Icons, Top Level Navigation and an Emergency Button.

## Guidelines

-   [Astro UXDS: Global Status Bar](https://astrouxds.com/ui-components/global-status-bar)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Global Status Bar package via Command Line (Preferred Method)

```sh
npm i -save @astrouxds/rux-global-status-bar
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Global Status Bar Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxGlobalStatusBar } from '@astrouxds/rux-global-status-bar/rux-global-status-bar.js'
```

### 3. Render the Astro Global Status Bar Web Component

Pass properties as attributes of the Astro Global Status custom element:

```xml
 <rux-global-status-bar appname="Astro App" version="3.0"></rux-global-status-bar>
```

Status bar elements like the [Clock](https://www.astrouxds.com/ui-components/clock), [Tabs](https://www.astrouxds.com/ui-components/tabs) and [Buttons](https://www.astrouxds.com/ui-components/buttons) and even plain HTML can be inserted into the body of the Global Status Bar using the component’s [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot).

```xml
 <rux-global-status-bar class="dark-theme" appname="Astro App" version="3.0">
	 <rux-clock></rux-clock>
	 <div><!-- Any HTML here --></div>
	 <rux-button>Master off</rux-button>
 </rux-global-status-bar>
```

### Properties

| Property  | Type   | Default | Required | Description                                                                                                                    |
| --------- | ------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `appname` | String | `''`    | No       | Displays an optional name for the app in the left side of the Global Status Bar                                                |
| `version` | String | `''`    | No       | Displays an optional label, typically a [Semantic Version number](https://semver.org/) such as `"v1.4.2"`, below the app name. |

## Revision History

##### **4.0**

-   Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.
