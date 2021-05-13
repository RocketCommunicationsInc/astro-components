# Switch

A Switch toggles between two mutually exclusive states such as "On" or "Off." Unlike a checkbox, a switch initiates an action with immediate effect without requiring a "Save" or "Submit" action.

## Guidelines

- [Astro UXDS: Switch](http://www.astrouxds.com/ui-components/switch)

## Web Components Usage

### 1. Installation

#### ** Install the Astro UXDS Switch package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-switch
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)

### 2. Import the Astro Switch Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxSwitch } from "@astro-components/rux-switch/rux-switch.js";
```

### 3. Render the Astro Switch Web Component
Pass properties as attributes of the Astro Switch custom element:

```xml
<rux-switch disabled="false" checked="false"></rux-switch>
```

### Properties

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `disabled` | Boolean | `false` | No | Disables the button via HTML `disabled` attribute. Button takes on a distinct visual state. Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored. |
| `checked`  | Boolean | `false` | No | Checks the button via HTML `checked` attribute. Button takes on a distinct "enabled" or "selected" visual state.                                                                            |

---

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in [Astro UXDS Styles repo](https://bitbucket.org/rocketcom/astro-styles/src/master/).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes
Astro CSS classes follow the [BEM-style](http://getbem.com/introduction/) naming convention.

Configure the component using native HTML attributes.

```xml
 <div class="rux-switch">
    <input class="rux-switch__input" disabled id="switch1" type="checkbox">
    <label class="rux-switch__button" for="switch1"></label>
</div>
```
### Attributes

| Attribute | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `disabled` | Boolean | `false` | No | Disables the button via HTML `disabled` attribute. Button takes on a distinct visual state. Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored. |
| `checked`  | Boolean | `false` | No | Checks the button via HTML `checked` attribute. Button takes on a distinct "enabled" or "selected" visual state. |

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)


## Revision History

##### **4.1**

- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.

##### **3.0**

- Breaking change to markup of switch button

##### **2.1**

- Moved Pushbuttons to its own style sheet

##### **1.4**

- Added `rux_` prefixes and BEM-compatible classes to all `satcom_`-prefixed elements. NOTE: `satcom_` will be removed in a future version
- Removed prefixed linear gradients
- Removed prefixed transition
- Fixed added colon to checked pseudo class (e.g., checked became :checked)
- Alignment issue fixed on switch button label
- Updated to WCAG colors
- Updated transition speed
