#Global Status Bar
The RUX Global Status Bar component is a standard status bar for Astro based applications

RUX Global Status is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and data binding.

RUX Global Status is available as a preview release and should not be used in production code.

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Global Status Bar](http://www.astrouxds.com/library/global-status-bar)

##Installation
Install the Astro Component Library.
`git clone https://bitbucket.org/rocketcom/astro-components.git`

###Dependencies

* [Polymer 3](https://www.polymer-project.com)

##Usage
###Import the RUX Timeline

```javascript
import { RuxGlobalStatusBar } from "@astro-components/rux-global-status-bar/rux-global-status-bar.js";
```

###Basic HTML Usage
Global Status has minimal properties, just an optional app name and version. Status bar elements like [Tabs](https://www.astrouxds.com/library/tabs) and [Buttons](https://www.astrouxds.com/library/buttons) are supported via Web Componet `<slots>` and can be added like standard HTML, indeed even standard HTML can be added.

```xml
 <rux-global-status-bar
 	appname="Astro App"
	version="2.0a"></rux-global-status-bar>
```

###Properties

| Property  | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `appname` | `string` | An optional name for the app           |
| `version` | `string` | An optional version number for the app |
