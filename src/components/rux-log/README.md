#Log
RUX Log is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding.

RUX Log is available as a preview release and should not be used in production code.

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Log](http://www.astrouxds.com/library/log)


## Web Components Usage

### 1. Installation
#### ** Install the Astro RUX Log package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-log
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.


#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.
Via CLI: 

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)


### 2. Import the RUX Log Web Component
This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxLog } from "@astro-components/rux-log/rux-log.js";
```

### 3. Render the RUX Log Web Component
Pass an array of log entries via the `data` attribute. Log entries must be objects with a `timestamp` in JS Date Object format, a `status` matching one of the specified [Rux Status](https://astrouxds.com/design-guidelines/status-system) values, and a `message` string:

```javascript
import { RuxLog } from "@astro-components/rux-log/rux-log.js";

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

## Rux Log Component Properties

| Property        | Type      | Default | Required | Description  |
| --------------- | --------- | ------- | -------- | ------------ |
| `data`           | Array    | `[]` | Yes | An array of objects to display as log entries. |
| `timezone`      | String  | `'UTC'` | no | Accepts [IANA timezone string format](https://www.iana.org/time-zones) such as ``America/Los_Angeles``. Default timezone is `UTC`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.                                                  |
| `locale`        | String  | `'en-US'` | no | Formats time in local time format, such as `'en-US'`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details. <br>**Note:** 24-hour time is always enforced. |
| `_filterValue`     | String    | `''` | No | A string to filter the array to return only the children whose `message` property contains a case-insensitive substring match. |

### Sample Rux Log `data` Array

```js
[
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
  {
    timestamp: new Date(1557503698781),
    status: "caution",
    message: "USA-168 suffered power degradation."
  },
  {
    timestamp: new Date(1557503698781),
    status: "standby",
    message: "Antenna DGS 2 has weak signal."
  },
  {
    timestamp: new Date(1557503698781),
    status: "off",
    message: "Black FEP 121 is offline."
  }
];
```
### Rux Log `data` Array Object Properties

| Property        | Type      | Default | Required | Description  |
| --------------- | --------- | ------- | -------- | ------------ |
| `timestamp`     | Date    | — | Yes | A JavaScript [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object which displays a timestamp in the log entry's row. Displays in UTC, 24-hour time by default, configurable in the `timezone` and `locale` Rux Log component properties. |
| `status`     | String    | — | Yes | A string corresponding to an available [Rux Status](https://astrouxds.com/design-guidelines/status-system) value, which displays the associated status icon in the log entry's row.  Possible values include `'off'`, `'standby'`, `'normal'`, `'caution'`, `'serious'`, and `'critical'`|
| `message`     | String    | — | Yes | A message which displays in the log entry's row. When a filter is applied to the log, the filter is a case-insensitive substring match against this string. |



## Revision History
##### **4.1**
- Removed max-lines property. Suggest using flexbox and overflow to control visible lines and scrollable areas of components.
- Renamed `entry` property to `message` for `data` array items.
- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.


##### **Notes**
RUX Log is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html).

**Note:** RUX Log is available as a preview release and should not be used in production code.



