# Monitoring Progress Icon

The Monitoring Progress Icon is a unique instance of the Monitoring Icon for displaying live progress of a monitored item. The Monitoring Progress Icon uses a "donut"-style progress meter rather than a specific icon.

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

Or, [download Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Monitoring Progress Icon Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project. Status is assigned via a range object.

```javascript
import { RuxMonitoringProgressIcon } from '@astrouxds/rux-monitoring-icon/rux-monitoring-progress-icon.js'
```

### 3. Render the Astro Monitoring Progress Icon Web Component

Pass properties as attributes of the Astro Monitoring Progress Icon custom element:

```xml
<rux-monitoring-progress-icon
 label="Battery level"
 progress="50">
</rux-monitoring-progress-icon>
```

### Properties (for the Monitoring Progress Icon)

| Property        | Type   | Default                   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------- | ------ | ------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`         | String | `'icon'`                  | Yes      | Displays a label below the icon                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `progress`      | Number | `0`                       | Yes      | Displays this value as a percentage in the center of the donut graph, and styles a proportional segment of the graph. Progress can be positive or negative (the later useful for countdowns). The progress value must exist within the thresholds specified in the `range` property below.                                                                                                                                                                                                                                                                       |
| `range`         | Array  | (see default array below) | No       | Items in this Array define thresholds for changing the status style of the progress icon. For each item in the Array, the icon will be styled with the given status while the `progress` value is less than the Array item’s `threshold` and equal to or greater than the next largest item‘s `threshold`. Both `progress` and the Array items’ `threshold` values can be positive or negative, so long as they are consistent and the `threshold` values span no more than 100 numbers. The component assumes the Array's first status threshold begins at `0`. |
| `sublabel`      | String | `''`                      | No       | Displays a smaller label underneath the icon label                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `notifications` | Number | `0`                       | No       | If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon. Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands, `'1.5M'` for millions, and `'1.5B'` for billions. The badge uses `'∞'` for one trillion or higher.                                                                                                                                                                                                                                                                |

### Sample `range` Array

A sample of a `range` Array. This sample is also the default value for `range`. Note: `range` Arrays can have as few as one threshold for items that may need progress observation, but won't have an associated status.

```json
[
    {
        // for progress values from 0 to 16:
        "threshold": 17,
        "status": "off"
    },
    {
        // for progress values from 17 to 32:
        "threshold": 33,
        "status": "standby"
    },
    {
        // for progress values from 33 to 48:
        "threshold": 49,
        "status": "normal"
    },
    {
        // for progress values from 49 to 64:
        "threshold": 65,
        "status": "caution"
    },
    {
        // for progress values from 64 to 80:
        "threshold": 81,
        "status": "serious"
    },
    {
        // for progress values from 81 to 99:
        "threshold": 100,
        "status": "critical"
    }
]
```

### `range` Array Item Properties

| Property    | Type   | Default  | Required | Description                                                                                                                                                 |
| ----------- | ------ | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `threshold` | Number | —        | Yes      | This value is the upper limit, exclusive, of the range for which the `status` below will style the progress icon.                                           |
| `status`    | String | `normal` | Yes      | Styles the icon according to the Astro Status colors. Valid options are the Astro statuses `critical`, `serious`, `caution`, `normal`, `standby`, and `off` |

## Revision History

##### **4.1**

-   Added `library` property to the Monitoring Icon component, enabling the use of custom SVG icon libraries.

##### **4.0**

-   Moved Advanced Status to its own component, Astro UXDS Monitoring Icon (see [Astro 4 migration note](#astro-4-migration) below)
-   Added the Monitoring Progress Icon variant
-   Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.

<a name="astro-4-migration">

## Important Astro 4 Migration Note:

Prior to Astro 4, the Astro UXDS Status Component was responsible for both the [small status indicators](https://astrouxds.com/ui-components/status-symbol) and the more complicated [monitoring icon](https://astrouxds.com/ui-components/icons-and-symbols). Astro 4 seperates these two use cases into distinct components. The [Astro UXDS Status Component](../rux-status/) is solely responsible for the status indicators. This component, Astro UXDS Monitoring Icon, replaces the previous "Advanced Status" features of Astro UXDS Status.

To upgrade to Astro 4, any instance of `<rux-status>` used as an "Advanced Status" or "Monitoring Icon" should replace `<rux-status>` with `<rux-monitoring-icon>`. For example:

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
