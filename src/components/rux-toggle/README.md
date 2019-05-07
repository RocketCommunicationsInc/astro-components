#Toggle

A Toggle describes a state or value. Similar to a checkbox, a toggle allow users to change a setting between two states such as “On" or "Off.” Unlike a checkbox, a toggle button initiates an action with immediate effect.


## Guidelines

* [Astro UXDS: Toggle](http://www.astrouxds.com/library/toggle)


## Web Components Usage

### 1. Installation
#### ** Install the Astro RUX Toggle package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-toggle
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.


#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.
Via CLI: 

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)


### 2. Import the RUX Toggle Web Component
This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxToggle } from "@astro-components/rux-toggle/rux-toggle.js";
```
### 3. Use the RUX Toggle Web Component

```xml
<rux-toggle disabled="false" checked="false"></rux-toggle>
```


## Basic HTML Usage
### 1. Include the Astro UXDS CSS file
Latest release is available in [Astro Styles repo](https://bitbucket.org/rocketcom/astro-styles/src/master/). 

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```
### 2. Markup using HTML5/CSS3

```xml
 <div class="rux-toggle">
    <input class="rux-toggle__input" disabled="false" checked="false" id="toggle1" type="checkbox">
    <label class="rux-toggle__button" for="toggle1"></label>
</div>
```

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)


###Properties

| Property          | Type      | Default | Required | Description                                             |
| ----------------- | --------- | ------- | -------- | ------------------------------------------------------- |
| `disabled`        | `Boolean` | false      | no    | |
| `checked`         | `Boolean` | false      | no    | |



## Revision History
##### **4.1**
- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.

##### **3.0**

- Breaking change to markup of toggle button

##### **2.1**

- Moved Pushbuttons to its own style sheet

##### **1.4**

- Added `rux_` prefixes and BEM-compatible classes to all `satcom_`-prefixed elements. NOTE: `satcom_` will be removed in a future version
- Removed prefixed linear gradients
- Removed prefixed transition
- Fixed added colon to checked pseudo class (e.g., checked became :checked)
- Alignment issue fixed on toggle button label
- Updated to WCAG colors
- Updated transition speed

##### Notes
RUX Toggle is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html).

**Note:** RUX Toggle is available as a preview release and should not be used in production code.

