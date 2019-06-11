# Clock

Clock shows the current date and time, and optional AOS and LOS timers. It will typically be positioned on the Global Status Bar.


## Guidelines

* [Astro UXDS: Clock](https://www.astrouxds.com/ui-components/clock)


## Web Components Usage

### 1. Installation
#### ** Install the Astro UXDS Clock package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-clock
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.


#### **Alternatively**, download the [Astro UXDS Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.
Via CLI: 

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)


### 2. Import the Astro Clock Web Component
This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxClock } from "@astro-components/rux-clock/rux-clock.js";
```

### 3. Render the Astro Clock Web Component
Apply properties as attributes of the Astro Clock custom element: 

```xml
<rux-clock timezone="Pacific/Guam" hideTimezone hideDate small></rux-clock>
```

Define AOS and LOS via [JavaScript Date objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Several_ways_to_create_a_Date_object) and apply via `aos` and `los` attributes on the component:


```javascript
import { RuxClock } from "@astro-components/rux-clock/rux-clock.js";

const myAos = new Date(1557503698781); // date from Unix Time Stamp number
const myLos = new Date('2019-05-10T16:21:12.000Z'); // date from ISO 8601 string format

// ...

render() {
	return `<rux-clock aos="${myAos}" los="${myLos}" small></rux-clock>`;
}
```

### Properties

| Property        | Type      | Default | Required | Description  |
| --------------- | --------- | ------- | -------- | ------------ |
| `aos`           | Date    | — | No | When supplied with a JavaScript [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, displays a timestamp labeled "AOS" next to the standard clock. |
| `los`           | Date    | — | No | When supplied with a JavaScript [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, displays a timestamp labeled "LOS" next to the standard clock. |
| `timezone`      | String  | `'UTC'` | No | Accepts [IANA timezone string format](https://www.iana.org/time-zones) such as ``America/Los_Angeles``. Default timezone is `UTC`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.                                                  |
| `hideTimezone` | Boolean | `false` | No | Hides the timezone in the main 24-hour clock. Timezone does not display on AOS/LOS. |
| `hideDate`     | Boolean | `false` | No |  Hides the day of the year. |
| `small`       | Boolean | `false` | No |  Applies a smaller clock style. Previously `compact` |



## Revision History
##### **4.1**
- Renamed `compact` property to `small`
- Swapped kebab-cased `hide-timezone` and `hide-date` attributes for standard camelCase `hideTimezone` and `hideDate`
- Fixed duplicated `aria-labelledby` value when using AOS and/or LOS.
- Removed `locale` property. All time displays assume `us-EN` locale.
- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.

