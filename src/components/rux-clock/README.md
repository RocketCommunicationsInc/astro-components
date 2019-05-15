#Clock

Clock shows the current date and time, and optional AOS and LOS timers. It will typically be positioned on the Global Status Bar.

### Appearance and Behavior
The clock is not an interactive component. Date and Time are always present. AOS, and LOS are optional. The time is UTC by default, but can be configured for any time zone.

All digits should be displayed in the Roboto Mono font. This font's monospace number characters ensure that the display will not jitter as it changes. The font is already built into the Clock web component, but may be downloaded for design use.


##Guidelines

* [Astro UXDS: Clock](https://www.astrouxds.com/ui-components/clock)


## Web Components Usage

### 1. Installation
#### ** Install the Astro RUX Clock package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-clock
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.


#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.
Via CLI: 

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)


### 2. Import the RUX Clock Web Component
This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxClock } from "@astro-components/rux-clock/rux-clock.js";
```

### 3. Render the RUX Clock Web Component

```xml
<rux-clock></rux-clock>
```
Apply properties as attributes on the component: 

```xml
<rux-clock timezone="Pacific/Guam" hide-timezone hide-date compact></rux-clock>
```

Define AOS and LOS via [JavaScript Date objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Several_ways_to_create_a_Date_object) and apply via `aos` and `los` attributes on the component:


```javascript
import { RuxClock } from "@astro-components/rux-clock/rux-clock.js";

const myAos = new Date(1557503698781); // date from Unix Time Stamp number
const myLos = new Date('2019-05-10T16:21:12.000Z'); // date from ISO 8601 string format

// ...

render() {
	return `<rux-clock aos="${myAos}" los="${myLos}" compact></rux-clock>`;
}
```

## Properties

| Property        | Type      | Default | Required | Description  |
| --------------- | --------- | ------- | -------- | ------------ |
| `aos`           | Date    | — | no | When supplied with a JavaScript [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, displays a timestamp labeled "AOS" next to the standard clock. |
| `los`           | Date    | — | no | When supplied with a JavaScript [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, displays a timestamp labeled "LOS" next to the standard clock. |
| `timezone`      | String  | `'UTC'` | no | Accepts [IANA timezone string format](https://www.iana.org/time-zones) such as ``America/Los_Angeles``. Default timezone is `UTC`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.                                                  |
| `locale`        | String  | `'en-US'` | no | Formats time in local time format, such as `'en-US'`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details. <br>**Note:** 24-hour time is always enforced. |
| `hide-timezone` | Boolean | `false` | no | Hides the timezone in the main 24-hour clock. |
| `hide-date`     | Boolean | `false` | no |  Hides the day of the year. |
| `compact`       | Boolean | `false` | no |  Applies a smaller clock style. |



## Revision History
##### **4.1**
- Fixed duplicated `aria-labelledby` value when using AOS and/or LOS.
- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.


##### **Notes**
RUX Clock is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html).

**Note:** RUX Clock is available as a preview release and should not be used in production code.



