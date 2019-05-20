# Monitoring Icon

These icons represent objects, equipment, and concepts that are being administered or monitored. The purpose of these icons is to easily, concisely, and clearly visually communicate their status to be to users.

## Guidelines

- [Astro UXDS: Icons and Symbols](https://astrouxds.com/ui-components/icons-and-symbols)

## Installation

`npm i -save @astrouxds/rux-monitoring-icon`

## Web Components Usage

### 1. Installation

#### ** Install the Astro RUX Icon package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux--monitoring-icon
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
import { RuxMonitoringIcon } from '@astro-components/rux-monitoring-icon/rux-monitoring-icon.js';
```

### 3. Render the RUX Icon Web Component

```xml
<rux-monitoring-icon
 icon="altitude"
 label="Altitude for Satellite X"
 sublabel="10000m"
 status="normal"
 notifications="10">
</rux-monitoring-icon>
```

---

## Properties

| Property        | Type     | Required | Description                                                                                                                                                    |
| --------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `icon`          | `string` | `true`   | Defines the icon to be used. For a [full list of icon symbols see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/library/icons-and-symbols) |
| `label`         | `string` | `true`   | A descriptive label of the icon, **Required for ARIA/Accessibility**                                                                                           |
| `status`        | `string` | `true`   | Valid options are `critical`, `serious`, `caution`, `normal`, `standby` and `off`                                                                              |
| `sublabel`      | `string` | `false`  | An optional string value appearing underneath the primary label                                                                                                |  |
| `notifications` | `number` | `false`  | Indicates notifications for a give status. Values beyond 9,999 are shorthanded 10K, 100K, 1.5M, 1.5B and ∞ for numbers greater than 999,999,999,999            |

# Monitoring Progress Icon

The Monitoring Progress Icon is a unique instance of the Monitoring Icon displaying live progress of a monitored item. The Monitoring Progress Icon uses a "donut" style progress meter rather than specific icons.

## Guidelines

- [Astro UXDS: Icons and Symbols](https://astrouxds.com/ui-components/icons-and-symbols)

## Installation

`npm i -save @astrouxds/rux-monitoring-icon`

## Web Components Usage

Note: The Rux Monitoring Progress Icon variant is installed alongside the standard Rux Monitoring Icon. For installation instructions see above.

### 1. Import the RUX Icon Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project. Status is assigned via a range object.

```javascript
import { RuxMonitoringProgressIcon } from '@astro-components/rux-monitoring-progress-icon/rux-monitoring-progress-icon.js';
```

### 2. Render the RUX Icon Web Component

```xml
<rux-monitoring-progress-icon
 label="Battery Level"
 progress="50">
</rux-monitoring-progress-icon>
```

---

## Properties

| Property   | Type     | Required   | Description                                                                                                                                                    |
| ---------- | -------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`    | `string` | `true`     | Defines the icon to be used. For a [full list of icon symbols see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/library/icons-and-symbols) |
| `progress` | `number` | `true`     | Progress of the monitored item as a percentage. increment. Note: progress may be a positive or negative integer                                                |
| `range`    | `array`  | `optional` | An optional array of objects defining the number of statuses and threshold each should execute                                                                 |

### Sample `range` Array

A sample of a range array. This sample is also the default range of a Monitoring Progress Icon. Note: range objects can have as few as one threshold for items that may need progress observation, but not have an associated status.

```json
[
  {
    "threshold": 17,
    "status": "off"
  },
  {
    "threshold": 33,
    "status": "standby"
  },
  {
    "threshold": 81,
    "status": "serious"
  },
  {
    "threshold": 49,
    "status": "normal"
  },
  {
    "threshold": 65,
    "status": "caution"
  },
  {
    "threshold": 100,
    "status": "critical"
  }
]
```

## `range` Object Properties

| Property    | Type     | Required | Description                                                                               |
| ----------- | -------- | -------- | ----------------------------------------------------------------------------------------- |
| `threshold` | `number` | `true`   | Status applied to component until progress exceeds threshold                              |
| `status`    | `number` | `true`   | Valid options are `critical`, `serious`, `caution`, `normal`, `standby`, `off` and `null` |

## Revision History

##### **4.1**

- Added the Monitoring Progress Icon variant
- Originally part of Rux Status
- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.
