#Slider
The RUX Slider component is … RUX Slider is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding.

RUX Status is available as a preview release and should not be used in production code.

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Slider](http://www.astrouxds.com/library/slider)

##Installation
`npm i -S @astrouxds/rux-slider`

###Dependancies

* [Polymer 3](https://www.polymer-project.com)
* [Astro 3 Core CSS](https://bitbucket.org/rocketcom/astro-styles/src/master/)

##Usage
###Import RUX Slider

```javascript
import { RuxSlider } from "@astro-components/rux-slider/rux-slider.js";
```

###Basic HTML Usage
At its most basica the `rux-slider` can work with just a value paramater.

```xml
<rux-slider value={{sliderObj.value}}></rux-slider>
```

###Properties
| Property | Type | Description |
| -------- | ---- | ------------|
| `val` | `number` | Should be passed in as a two-way bound property of an object
| `min` | `number` | Optional. Overrides the default value of 0. Can be a positive or negative number. |
| `max` | `number` | Optional. Overrides the default value of 100. Can be a positive or negative number. |
| `step` | `number` | Optional. Can be used to customize each step (e.g., count by 10) or to force an input to accept float values. Note: accepting float values in the input does not make existing code expecting integers understand float values. |
| `axis-labels` | `string` | Optional. A comma delimited string of labels. Note label placement is approximate and should not be used for precise indicators. Layout is based on `flex-box` with `justify-content: space-between` meaning with three labels the first will appear at flush left the second will appear roughly halfway and the last will appear flush right. |
| `label` | `string` | Optional. Label for the slider element |
