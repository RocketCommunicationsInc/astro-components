# Icons

Display icons used in the Astro Design System

## Guidelines

- [Astro UXDS: Icons and Symbols](https://astrouxds.com/ui-components/icons-and-symbols)

## Installation

`npm i -save @astrouxds/rux-icon`

## Web Components Usage

### 1. Installation

#### ** Install the Astro RUX Icon package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-icon
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)

### 2. Import the RUX Icon Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxIcon } from '@astro-components/rux-icon/rux-icon.js';
```

### 3. Render the RUX Icon Web Component

```xml
<rux-icon icon="altitude" label="Altitude for Satellite X"></rux-icon>
```

External icon sets are supported via the `library` attribute. External icon libraries must be SVGs and each icon must have its own unique id. Icon library properties should be the root relative path to your icons

```xml
<rux-icon library="icons/my-custom-icons.svg" icon="my-icon"></rux-icon>

```

Icons support color and size overrides. The color property supports any CSS3 valid color value.

```xml
<rux-icon icon="caution" color="#fff" >
</rux-icon>
```

---

## Properties

| Property  | Type     | Required | Description                                                                                                                                                     |
| --------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `icon`    | `string` | `true`   | Defines the icon to be used. For a [full list of icon symbols see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/library/icons-and-symbols)  |
| `label`   | `string` | `true`   | A desscriptive label of the icon, **Required for ARIA/Accessibility**                                                                                           |
| `library` | `string` | `false`  | Load an external icon set. Icons must be an SVG with individual icons having their own unique `id` attribute.                                                   |
| `color`   | `string` | `false`  | Changes the icon color. Accepted values can be entered as hex, rgba, hsl and HTML string. **Caution: the `status` icon set cannot and should not be overidden** |
| `size`    | `string` | `false`  | Allows for large icon variants                                                                                                                                  |

### Standard Icons

## Revision History

##### **TODO BEFORE RELEASE**

- Look at ditching class string manipulation happening in the template render function and replace with `:host`-level attributes. Keep existing class-based styles working for users of previous versions
- Are sizes dynamic or a set series of icon sizes?

##### **4.1**

- Added support for external icon libraries viat the `library` property
- Replaced the DOM manipulation library for loading icons in favor of an HTML5 template TODO: add support for template outside of WebComponents when browser’s support shadowDOM piercing
- Removed status indicators
- Added a default libaray via template method
- Removed the namespace:icon pattern in favor of supporting

- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.
