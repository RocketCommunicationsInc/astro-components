#Progress
The RUX Progress component is based on the progress concepts in Astro UXDS. There are several variants to be used. RUX Button is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding. 

RUX Button is supplied as-is and …

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines
* [Astro UXDS: Progress Determinate](https://www.astrouxds.com/library/progress-determinate)
* [RUX Progress Determinate Demo](https://www.astrouxds.com/library/progress-determinate)
* [Astro UXDS: Progress Indeterminate](https://www.astrouxds.com/library/progress-indeterminate)
* [RUX Progress Indeterminate Demo](https://www.astrouxds.com/library/progress-indeterminate)

##Installation
Install the Astro Component Library
`npm install --save @astro-components`
Or Install just the butto
`npm install --save @astro-components/rux-progress`
###Dependancies
* [Polymer 3](https://www.polymer-project.com)

##Usage
###Import the RUX Button

```javascript
import { RuxProgress } from "@astro-components/rux-progress/rux-progress.js";
```

###Basic HTML Usage

Indeterminate

```xml
<rux-progress></rux-progress>
```

Determinate with a value off 55

```xml
<rux-progress value=55></rux-progress>
```

Deterimnate with a value, max value and lable

```xml
<rux-progress value=55 max=300 label=true></rux-progress>
```

###Properties
| Property | Type | Description |
| -------- | ---- | ------------|
| `value` | `number` | Value of the progress bar. Note: if this paramater isn’t present it is assumed the progress bar is of indterminate value.
| `max` | `number` | Allows for progress bars with ranges greater than 100. |
| `label` | `boolean` | Displays the value of progress as a percentage value |


