#Clock
The RUX Clock component is a custom clock instance relavant to SATCOM/SATOPS operations running a constant 24 hour clock set to UTC along with the day of the year. RUX Clock also supports displaying AOS (Acquisition of Signal), LOS (Loss of Signal) and timezone support.

RUX Clock is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding.

RUX Clock is supplied as-is and …

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Clock](https://cms.astrouxds.com/library/clock)
* [RUX Clock Demo](https://cms.astrouxds.com/library/clock)

##Installation
Install the Astro Component Library
`npm install --save @astro-components`
Or Install just the clock
`npm install --save @astro-components/rux-clock`
###Dependancies

* [Polymer 3](https://www.polymer-project.com)

##Usage
###Import the RUX Clock

```javascript
import { RuxClock } from "@astro-components/rux-clock/rux-clock.js";
```

###Basic HTML Usage
RUX Clock can be used without any properties and will display a 24-hour clock in HH:MM:SS UTC format along with the day of the year.

```xml
<rux-clock></rux-clock>
```

###Advanced HTML Usage
The following example shows a more advanced RUX Clock instance with data-bound __aos__ and __los__ values as well as hiding the timezone and day of year display. 

```xml
<rux-clock
	aos=[[sat1.aos]]
	los=[[sat1.los]]
	hide-timezon=true
	hide-date=true></rux-clock>
```

###Properties

| Property | Type | Description |
| -------- | ---- | ------------|
| `aos` | `date` | If a valid JavaScript Date object is passed in the AOS time will display next to the standard 24-hour clock. Updates to the passed in date object will be displayed immediately.
| `los` | `date` | If a valid JavaScript Date object is passed in the LOS time will display next to the standard 24-hour clock. Updates to the passed in date object will be displayed immediately.
| `timezone` | `string` | Optional timzone setting. Accepted format is `Country/City` e.g., `America/San_Francisco`. Default timezone is UTC.
| `locale` | `string` | Optional locale setting to format time in local time format. e.g., `us-en`. Default locale is us-en.
| `hide-timezone` | `boolean` | Hides the timezone in the main 24-hour clock. Defaults to `false`
| `hide-date` | `boolean` | Hides the day of the year. Defaults to `false`.