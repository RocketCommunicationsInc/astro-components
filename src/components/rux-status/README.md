# Status

The Status Symbol combines color and shape to create a standard and consistent way to indicate the status of a device or feature.

**Note**: Starting with Astro 4.1 Rux Status only includes the simple status indicators. The previously included Advanced Status Icons are now available in the [Rux Monitoring Icon component](https://bitbucket.org/rocketcom/astro-components/src/master/src/packages/rux-monitoring-icon).

## Guidelines

- [Astro UXDS: Status Symbols](http://www.astrouxds.com/library/status-symbol)

## Web Components Usage

### 1. Installation

#### ** Install the Astro RUX Status package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-status
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)

### 2. Import the RUX Status Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxStatus } from '@astro-components/rux-status/rux-status.js';
```

### 3. Render the RUX Button Web Component

```xml
<rux-status status="critical"></rux-status>
```

---

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in [Astro Styles repo](https://bitbucket.org/rocketcom/astro-styles/src/master/).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup using HTML5/CSS3

```xml
<div class="rux-status rux-status--critical"></div>
```

Status is determined via [BEM-style](http://getbem.com/introduction/) class suffixes after `rux-status--`. Valid options for status are `critical`, `serious`, `caution`, `normal`, `standby` and `off`

## Web Component Properties

| Property | Type     | Default | Required | Description                                                                                               |
| -------- | -------- | ------- | -------- | --------------------------------------------------------------------------------------------------------- |
| `status` | `string` | `n/a`   | yes      | Sets the status symbol, valid options are `critical`, `serious`, `caution`, `normal`, `standby` and `off` |

## Revision History

##### **4.1**

- Replaced SVG status elements with PNG sprite for improved performance
- Moved Advanced Status to its own component Rux Monitoring ICon
- Removed satcom prefix from HTML/CSS versions
- Removed ::after psuedo class in HTML/CSS version in favor of simpler background image
- Removed undocumented small status variant
- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.

##### **3.0**

- Removed Master Off Button Style
- Replaced various properties with css custom properties to support
- Removed `.satcom` class definition
- Removed `narrow`/`short` definitions

##### **1.4**

- Added `rux_` prefixes and BEM-compatible classes to all `satcom_`-prefixed elements. NOTE: `satcom_` will be removed in a future version
- Disabled user selection of text on all buttons
- Removed redundant background hover from `disabled` state by using `:not()` on the `:hover` state
- Removed redundant background hover from `master off` by using `:not()` on the `:hover` state // deprecate after 1.4
- Fixed Firefox alignment issue where text was misaligned vertically
- Renamed `half-height` to `short` and `half-width` to `narrow` (Note: `rux_` only, `satcom_` retains old syntax)
- Removed `user-select` and placed it in astro.css to apply to all input types
- Embedded master off icon and removed the additional states required to handle icons and gradient backgrounds

##### **Notes**

RUX Button is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html).

**Note:** RUX Button is available as a preview release and should not be used in production code.
