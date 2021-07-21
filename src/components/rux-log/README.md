# Log

A Log is a tabular representation of application events and may include username, priority, equipment type, signal type, etc. As part of the [Notification System](https://www.astrouxds.com/design-guidelines/notifications), Logs provide sorting and filtering function for examining events.

## Guidelines

-   [Astro UXDS: Log](http://www.astrouxds.com/ui-components/log)
-   [Astro UXDS: Notification System](https://www.astrouxds.com/design-guidelines/notifications)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Log package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-log
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Log Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxLog } from '@astrouxds/rux-log/rux-log.js'
```

### 3. Render the Astro Log Web Component

Pass an Array of log entries via the `data` attribute. Log entries must be Objects with a `timestamp` in [JavaScript Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) format, a `status` String matching one of the specified [Astro UXDS Status](https://astrouxds.com/design-guidelines/status-system) values, and a `message` String:

```javascript
import { RuxLog } from '@astrouxds/rux-log/rux-log.js';

const myLogData = [
  {
    timestamp: new Date(1557503698781), // date from Unix Time Stamp number
    status: "off",
    message: "Antenna DGS 1 went offline."
  },
  {
    timestamp: new Date('2019-05-10T16:21:12.000Z'), // date from ISO 8601 string format
    status: "serious",
    message: "USA-177 experienced solar panel misalignment."
  },
];

// ...

render() {
	return `<rux-log data="${myLogData}"></rux-log>`;
}
```

### Properties (for the Log component)

| Property       | Type   | Default | Required | Description                                                                                                                                                                                                                                                                                             |
| -------------- | ------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`         | Array  | `[]`    | Yes      | An array of objects to display as log entries.                                                                                                                                                                                                                                                          |
| `timezone`     | String | `'UTC'` | No       | Accepts [IANA timezone string format](https://www.iana.org/time-zones) such as `America/Los_Angeles`. Default timezone is `UTC`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details. |
| `_filterValue` | String | `''`    | No       | A string to filter the array to return only the children whose `message` property contains a case-insensitive substring match.                                                                                                                                                                          |

### Sample `data` Array

```js
;[
    {
        timestamp: new Date(1557503698781), // date from Unix Time Stamp number
        status: 'off',
        message: 'Antenna DGS 1 went offline.',
    },
    {
        timestamp: new Date('2019-05-10T16:21:12.000Z'), // date from ISO 8601 string format
        status: 'serious',
        message: 'USA-177 experienced solar panel misalignment.',
    },
    {
        timestamp: new Date(1557503698781),
        status: 'caution',
        message: 'USA-168 suffered power degradation.',
    },
    {
        timestamp: new Date(1557503698781),
        status: 'standby',
        message: 'Antenna DGS 2 has weak signal.',
    },
    {
        timestamp: new Date(1557503698781),
        status: 'off',
        message: 'Black FEP 121 is offline.',
    },
]
```

### `data` Array Item Properties

| Property    | Type   | Default | Required | Description                                                                                                                                                                                                                                                                                     |
| ----------- | ------ | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp` | Date   | —       | Yes      | A JavaScript [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object which displays a timestamp in the log entry's row. Displays in UTC, 24-hour time by default, configurable in the `timezone` and `locale` Astro UXDS Log component properties. |
| `status`    | String | —       | Yes      | Displays an icon from the [Astro UXDS Status System](https://astrouxds.com/design-guidelines/status-system) in the log entry's row. Possible values include `'off'`, `'standby'`, `'normal'`, `'caution'`, `'serious'`, and `'critical'`                                                        |
| `message`   | String | —       | Yes      | A message which displays in the log entry's row. When a filter is applied to the log, the filter is a case-insensitive substring match against this string.                                                                                                                                     |

## Revision History

##### **4.0**

-   Removed `max-lines` property. Suggest using flexbox and overflow to control visible lines and scrollable areas of components.
-   Removed `locale` property. All time displays assume `us-EN` locale.
-   Renamed `entry` property to `message` for `data` array items.
-   Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.
