#Timeline
The RUX Timeline component is a custom Timeline component relavant to SATCOM/SATOPS operations.

RUX Timeline is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and data binding.

RUX Timeline is available as a preview release and should not be used in production code.

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Timeline](http://cms.astrouxds.com/library/timeline)

##Installation
Install the Astro Component Library.
`git clone git@bitbucket.org:rocketcom/astro-components.git`

###Dependencies

* [Polymer 3](https://www.polymer-project.com)
* [Rux Icon](https://bitbucket.org/rocketcom/astro-components/src/master/src/astro-components/rux-icon/)
* [Rux Status](https://bitbucket.org/rocketcom/astro-components/src/master/src/astro-components/rux-status/)
* [Rux Slider](https://bitbucket.org/rocketcom/astro-components/src/master/src/astro-components/rux-slider/)

##Usage
###Import the RUX Timeline

```javascript
import { RuxTimeline } from "@astro-components/rux-timeline/rux-timeline.js";
```

###Basic HTML Usage
RUX Timeline will display a horizontal timeline with multiple tracks and multiple regions per track. RUX Timeline operates under the assumption all times are in UTC

```xml
<rux-timeline
	status="ok"
	duration=8
	label="8 Hour Timeline"
	initial-scale=100
	tracks=[[tracks]]
	zoom-control=true
	selected-region={{selectedRegion}}>
</rux-timeline>
```

###Properties

| Property          | Type      | Description                                                                                                                                                                                                                                                        |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `status`          | `string`  | The overall status of the timeline. See Astro UXDS for a detailed explanation on status bubbling. This could also be represented as a Polymer property in a comprehensive status service                                                                           |
| `duration`        | `number`  | Defines a time period. Default is 24 hours if no duration is supplied                                                                                                                                                                                              |
| `label`           | `string`  | Title that appears in the timeline header                                                                                                                                                                                                                          |
| `initial-scale`   | `number`  | Defines the initial scale of the timeline. Default is 100 and extends the visible width of the timeline’s containing element                                                                                                                                       |
| `tracks`          | `array`   | An array of track data. Timeline supports multiple tracks and multiple regions per track. See object detail below                                                                                                                                                  |
| `zoom-control`    | `boolean` | Shows a slider that scales the zoom level of the timeline. Minimum is 100, maximum is 500                                                                                                                                                                          |
| `selected-region` | `object`  | A selected region will bubble that object back to the containing element. A Polymer observer to check change value with two-way data binding could be used to act on the selected region. See the [Astro App Demo](https://astro-app.rocketcom.com) for an example |

###Track Array
The `tracks` is the primary data source in defining the number of tracks and the number of regions on each track. The array can be manually populated or updated via a web service. The following is an example of the expected format for a single track timeline with one region.

####Sample Array

```javascript
tracks = [{
	label: "LEO",
	regions: [{
		label: "DSP-1 F17",
		status: "caution",
		startTime: JAVASCRIPT DATE,
       endTime: JAVASCRIPT DATE
      }
    ]
  },
  {
	label: "LEO",
	regions: [{
		label: "DSP-2 F17",
		status: "ok",
		startTime: JAVASCRIPT DATE,
       endTime: JAVASCRIPT DATE
      }
    ]
  }
  …
];
```

####Tracks Properties

| Property  | Type     | Description                                                        |
| --------- | -------- | ------------------------------------------------------------------ |
| `label`   | `string` | Track label                                                        |
| `regions` | `array`  | An array of objects representing regions to appear on the timeline |

####Regions Properties

| Property    | Type     | Description                                                                                     |
| ----------- | -------- | ----------------------------------------------------------------------------------------------- |
| `label`     | `string` | Label for the region element                                                                    |
| `status`    | `string` | Status for the region. Valid options include `off`,`standby`,`ok`,`caution`,`error` and `alert` |
| `startTime` | `date`   | A valid JavaScript UTC date                                                                     |
| `endTime`   | `date`   | A valid JavaScript UTC date                                                                     |
