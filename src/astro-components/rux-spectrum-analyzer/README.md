# Spectrum Analyzer (aka "Spec A")

RUX Spectrum Analyzer leverages both Web Components and the D3 data visualization library to create classic, animated "Spec A" instances.

##Guidelines

* [Astro UXDS: Spectrum Analyzer](http://www.astrouxds.com/library/spectrum-analyzer)

##Installation
Install the Astro Component Library.
`git clone https://bitbucket.org/rocketcom/astro-components.git`

###Dependencies

* [Polymer 3](https://www.polymer-project.com)
* [D3](https://d3js.org/)

##Usage
###Import the RUX Spectrum Analyzer

```javascript
import { RuxSpectrumAnalyzer } from "../astro-components/rux-spectrum-analyzer/rux-spectrum-analyzer.js";
```

###Basic HTML Usage
RUX Spectrum Analyzer

```xml
<rux-spectrum-analyzer chart-legend-x="freq" chart-legend-y="pwr" chart-title="signals" height="384" width="900" x-scale-min="900" x-scale-max="2301" x-scale-step="175" y-scale-min="-30" y-scale-max="0" data-source="wss://satellite-1.astrouxds.com" data-source-type="web-socket"></rux-spectrum-analyzer>
```

###Properties

| Property           | Type      | Default | Required | Description                                              |
| ------------------ | --------- | ------- | -------- | ---------------------------------------------------------|
| `chart-legend-x`   | `String`  | N/A     | true     | Text value for labeling x axis                           |
| `checked-legend-y` | `String`  | N/A     | true     | Text value for labeling y axis                           |
| `chart-title`      | `String`  | N/A     | true     | Text value for graph label                               |
| `height`           | `Integer` | N/A     | true     | Height of graph in pixels                                |
| `width`            | `Integer` | N/A     | true     | Width of graph in pixels                                 |
| `x-scale-min`      | `Integer` | N/A     | true     | Starting point for x scale                               |
| `x-scale-max`      | `Integer` | N/A     | true     | Ending point for x scale                                 |
| `x-scale-step`     | `Integer` | N/A     | true     | Interval between labels on x axis                        |
| `y-scale-min`      | `Integer` | N/A     | true     | Starting point for y scale                               |
| `y-scale-max`      | `Integer` | N/A     | true     | Ending point for y scale                                 |
| `y-scale-step`     | `Integer` | N/A     | false    | Interval between labels on y axis                        |
| `data-source`      | `String`  | N/A     | true     | URL of data source (currently only supports Web Sockets) |
| `data-source-type` | `String`  | N/A     | false    | For future use                                           |