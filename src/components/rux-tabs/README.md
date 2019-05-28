#Tabs
Tabs  are used to divide major areas of content and to indicate work process.

### Rules of Thumb
- Use only one row of Tabs.
- Use Higher Level Tabs only on top of the panel.
- Tab labels should not be more than two words and should accurately reflect what underlying content the user can expect to reveal.
- Use title-style capitalization for labels.
- High level tabs are often used to organize an application by work process.


## Guidelines

* [Astro UXDS: Tabs](https://www.astrouxds.com/ui-components/tabs)


## Web Components Usage

### 1. Installation
#### ** Install the Astro RUX Tabs package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-tabs
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.


#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.
Via CLI: 

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)


### 2. Import the RUX Tabs Web Component
This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxTabs } from "@astro-components/rux-tabs/rux-tabs.js";
```

### 3. Render the RUX Tabs Web Component

The RUX Tabs pattern makes use of four components via [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot):

1. **Tabs:** Container for the tab bar, handles tabs logic and state
2. **Tab:** Individual tab title element
3. **Panels:** Container for the tab content panels
4. **Panel:** Individual tab content element

Note that you only need to import the first component (RUX Tabs) in your application. The other three are automatically imported by the RUX Tabs component.

Make sure that you set unique id's for `<rux-tabs>` and it's children `<rux-tab>`, and associate each with corresponding `aria-labelledby` attributes, as indicated below:

```xml
<rux-tabs id="tab-set-id-1">
	<rux-tab id="tab-id-1">Tab 1</rux-tab>
	<rux-tab id="tab-id-2">Tab 2</rux-tab>
	<rux-tab id="tab-id-3">Tab 3</rux-tab>
</rux-tabs>

<rux-tab-panels aria-labelledby="tab-set-id-1">
	<rux-tab-panel aria-labelledby="tab-id-1">Tab 1 HTML Content</rux-tab-panel>
	<rux-tab-panel aria-labelledby="tab-id-2">Tab 2 HTML Content</rux-tab-panel>
	<rux-tab-panel aria-labelledby="tab-id-3">Tab 3 HTML Content</rux-tab-panel>
</rux-tab-panels>
```

The RUX Tabs pattern can be further configured using attributes passed into the custom elements at either the top level or at the child level.

## RUX Tabs Properties

| Property          | Type      | Default | Required | Description                                             |
| ----------------- | --------- | ------- | -------- | ------------------------------------------------------- |
| `small`        | String | ''      | no    | If passed, displays the tabs in a smaller style, suitable for limited-space uses. Previously `compact`. |

## RUX Tab (child) Properties
RUX Tab properties are passed as simple attributes on the individual tabs themselves.
```xml
<rux-tabs id="tab-set-id-1">
	<rux-tab id="tab-id-1">Tab 1</rux-tab>
	<rux-tab id="tab-id-2" selected>Tab 2</rux-tab>
	<rux-tab id="tab-id-3" disabled>Tab 3</rux-tab>
</rux-tabs>
...
```
| Property          | Type      | Default | Required | Description                                             |
| ----------------- | --------- | ------- | -------- | ------------------------------------------------------- |
| `selected`        | Boolean | `false`   | no    | If present, overrides which tab is selected on load / mount. By default, the first `<rux-tab>` item is selected. |
| `disabled`        | Boolean | `false`   | no    | If present, sets a disabled state on this tab item, indicating it cannot be selected by user action. |



## Revision History
##### **4.1**
- Renamed `compact` property to `small`.
- Removed/deprecated undocumented `interior` and `transparent` tab styles.
- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.

##### **1.4**
- Added `rux_` and BEM compatible classes to all `satcom_` NOTE: `satcom_` will be removed in a future version
- Removed prefixed transitions
- Removed prefixed gradients
- Updated colors for WCAG compliance
- Swapped condensed font for standard

