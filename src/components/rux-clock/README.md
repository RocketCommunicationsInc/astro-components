# Clock

Clock shows the current date and time, and optional AOS and LOS timers. It will typically be positioned on the Global Status Bar.

## Guidelines

-   [Astro UXDS: Clock](https://www.astrouxds.com/ui-components/clock)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Clock package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-clock
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Clock Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxClock } from '@astrouxds/rux-clock/rux-clock.js'
```

### 3. Render the Astro Clock Web Component

Apply properties as attributes of the Astro Clock custom element:

```xml
<rux-clock timezone="Pacific/Guam" hideTimezone hideDate small></rux-clock>
```

Define AOS and LOS with valid [Unix Time Stamp](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16) or [ISO 8601 Datetime String](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) and apply via `aos` and `los` attributes on the component:

```xml
<rux-clock aos="1557503698781" los="2019-05-10T16:21:12.000Z" small></rux-clock>
```

### Properties

| Property       | Type    | Default | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------- | ------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aos`          | String  | —       | No       | When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax) displays a timestamp labeled "AOS" next to the standard clock.                                                                                                                                                                                                                                                                                                                               |
| `los`          | String  | —       | No       | When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax), displays a timestamp labeled "LOS" next to the standard clock.                                                                                                                                                                                                                                                                                                                              |
| `timezone`     | String  | `'UTC'` | No       | Accepts the [IANA timezone string format](https://www.iana.org/time-zones) such as `'America/Los_Angeles'` or any single-character designation for a [military timezones](https://en.wikipedia.org/wiki/List_of_military_time_zones) (`'A'` through `'Z'`, excluding `'J'`), both case-insensitive. If no value for timezone is provided, the clock will use `'UTC'`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details. |
| `hideTimezone` | Boolean | `false` | No       | Hides the timezone in the main 24-hour clock. Timezone does not display on AOS/LOS.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `hideDate`     | Boolean | `false` | No       | Hides the day of the year.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `small`        | Boolean | `false` | No       | Applies a smaller clock style. Previously `compact`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Revision History

##### **4.1**

-   Added moment.js for date/time calculations, fixing Day of Year count error at EOD
-   Added the 24 military timezone designations

##### **4.0**

-   Renamed `compact` property to `small`
-   Swapped kebab-cased `hide-timezone` and `hide-date` attributes for standard camelCase `hideTimezone` and `hideDate`
-   Fixed duplicated `aria-labelledby` value when using AOS and/or LOS.
-   Removed `locale` property. All time displays assume `us-EN` locale.
-   Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.
