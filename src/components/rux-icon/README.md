# Icons

Display icons used in the Astro Design System

## Guidelines

- [Astro UXDS: Icons and Symbols](https://astrouxds.com/ui-components/icons-and-symbols)

## Installation

`npm i -save @astrouxds/rux-icon`

## Web Components Usage

### 1. Installation

#### ** Install the Astro UXDS Icon package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-icon
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)

### 2. Import the Astro Icon Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxIcon } from "@astro-components/rux-icon/rux-icon.js";
```

### 3. Render the Astro Icon Web Component
Pass properties as attributes of the Astro Icon custom element:

```xml
<rux-icon icon="altitude" label="Altitude" color="#fff" ></rux-icon>
```

### Properties
| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `icon`    | String | `''` | Yes | Displays an icon matching this string.  For a [full list of available icons in the Astro default library, see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols) |
| `label`   | String | `''` | Yes | A descriptive label of the icon. |
| `library` | String | `'/icons/astro.svg'` | No | Defines the root-relative path for a specific icon library SVG for this icon. An icon library SVG document has individual icon elements identified by an `id` property on the node (usually on a `<g>` or `<path>`). If a value for `library` is not provided, the icon component assumes the Astro library SVG exists at the default path, and will look for the icon by `id` there. |
| `color`   | String | `'rgb(77, 172, 255)'` | No | Applies a custom fill color as a valid HTML color string, e.g., hexadecimal, RGBA or HSL value. |
| `size`    | String | `'normal'` | No| Adjusts icon size, supported values are `extra-small` (16px), `small` (32px), `normal` (44px) and `large` (64px)                                                                     

#### **Custom icons**
Access an external (non-Astro) icon library via the `library` attribute, which requires a root-relative path to an SVG file where the component's `icon` string attribute matches an element's `id`.

```xml
<rux-icon library="/icons/my-custom-icons.svg" icon="my-icon"></rux-icon>
```
In the SVG icon library file:

```svg
<svg>
	<defs>
		<g id="my-icon">...

```

## Revision History

##### **TODO BEFORE RELEASE**

- Look at ditching class string manipulation happening in the template render function and replace with `:host`-level attributes. Keep existing class-based styles working for users of previous versions

##### **4.1**

- Added support for external icon libraries via the `library` property
- Replaced the DOM manipulation library for loading icons in favor of an HTML5 template TODO: add support for template outside of WebComponents when browser’s support shadowDOM piercing
- Removed status indicators
- Added a default libaray via template method
- Removed the namespace:icon pattern in favor of supporting

- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.
