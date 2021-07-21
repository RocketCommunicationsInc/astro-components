# Monitoring Icon

These icons represent objects, equipment, and concepts that are being administered or monitored. The purpose of these icons is to easily, concisely, and clearly visually communicate their status to be to users.

## Guidelines

-   [Astro UXDS: Icons and Symbols](https://astrouxds.com/ui-components/icons-and-symbols)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Monitoring Icon package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux--monitoring-icon
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Monitoring Icon Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxMonitoringIcon } from '@astrouxds/rux-monitoring-icon/rux-monitoring-icon.js'
```

### 3. Render the Astro Monitoring Icon Web Component

Pass properties as attributes of the Astro Monitoring Icon custom element:

```xml
<rux-monitoring-icon
 icon="altitude"
 label="Altitude for satellite X"
 sublabel="10000m"
 status="normal"
 notifications="10">
</rux-monitoring-icon>
```

### Properties

| Property        | Type   | Default              | Required | Description                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ------ | -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `icon`          | String | `''`                 | Yes      | Displays an Astro icon matching this string. For a [full list of available icons, see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)                                                                                                                                                                                              |
| `library`       | String | `'/icons/astro.svg'` | No       | Defines the root-relative path for a specific icon library SVG for this icon. An icon library SVG document has individual icon elements identified by an `id` property on the node (usually on a `<g>` or `<path>`). If a value for `library` is not provided, the icon component assumes the Astro library SVG exists at the default path, and will look for the icon by `id` there. |
| `label`         | String | `'icon'`             | Yes      | Displays a label below the icon                                                                                                                                                                                                                                                                                                                                                       |
| `status`        | String | `'normal'`           | Yes      | Styles the icon according to the Astro Status colors. Valid options are the Astro statuses `critical`, `serious`, `caution`, `normal`, `standby`, and `off`                                                                                                                                                                                                                           |
| `sublabel`      | String | `''`                 | No       | Displays a smaller label underneath the icon label                                                                                                                                                                                                                                                                                                                                    |
| `notifications` | Number | `0`                  | No       | If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon. Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands, `'1.5M'` for millions, `'1.5B'` for billions, and `'∞'` for one trillion or higher.                                                                                                    |

## Revision History

##### **4.1**

-   Added `library` property to the Monitoring Icon component, enabling the use of custom SVG icon libraries.

##### **4.0**

-   Moved Advanced Status to its own component, Astro UXDS Monitoring Icon (see [Astro 4 migration note](#astro-4-migration) below)
-   Added the Monitoring Progress Icon variant
-   Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.

<a name="astro-4-migration">

## Important Astro 4 Migration Note:

Prior to Astro 4, the Astro UXDS Status Component was responsible for both the [small status indicators](https://astrouxds.com/ui-components/status-symbol) and the more complicated [monitoring icon](https://astrouxds.com/ui-components/icons-and-symbols). Astro 4 seperates these two use cases in to distinct components. The [Astro UXDS Status Component](../rux-status/) is solely responsible for the status indicators. This component, Astro UXDS Monitoring Icon, replaces the previous "Advanced Status" features of Astro UXDS Status.

To upgrade to Astro 4 any instance of `<rux-status>` used as an "Advanced Status" or "Monitoring Icon" should replace `<rux-status>` with `<rux-monitoring-icon>`. For example:

```xml
<rux-status
  icon="some-icon"
  status="critical"
  label="Icon label"
  sublabel="Sub-label"
  notifications="10">
</rux-status>
```

Would become this

```xml
<rux-monitoring-icon
  icon="some-icon"
  status="critical"
  label="Icon label"
  sublabel="Sub-label"
  notifications="10">
</rux-monitoring-icon>
```
