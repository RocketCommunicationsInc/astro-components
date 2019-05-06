#Toggle
The RUX toggle allows for a dialog style toggle box in the style of …

RUX Toggle is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding.

RUX Toggle is available as a preview release and should not be used in production code.

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Toggle](http://www.astrouxds.com/library/toggle)

##Installation
Install the Astro Component Library.
`git clone https://bitbucket.org/rocketcom/astro-components.git`

###Dependencies

* [Polymer 3](https://www.polymer-project.com)

##Usage
###Import the RUX Toggle

```javascript
import { RuxToggle } from "@astro-components/rux-toggle/rux-toggle.js";
```

###Basic HTML Usage
```xml
<rux-toggle></rux-toggle>
```

###Advanced HTML Usage
```xml
<rux-toggle disabled="false" checked="false"></rux-toggle>
```


###Properties

| Property          | Type      | Default | Required | Description                                             |
| ----------------- | --------- | ------- | -------- | ------------------------------------------------------- |
| `disabled`        | `Boolean` | false      | no    | |
| `checked`         | `Boolean` | false      | no    | |



## Revision History

##### **3.0**

- Breaking change to markup of toggle button

##### **2.1**

- Moved Pushbuttons to its own style sheet

##### **1.4**

- Added `rux_` prefixes and BEM-compatible classes to all `satcom_`-prefixed elements. NOTE: `satcom_` will be removed in a future version
- Removed prefixed linear gradients
- Removed prefixed transition
- Fixed added colon to checked pseudo class (e.g., checked became :checked)
- Alignment issue fixed on toggle button label
- Updated to WCAG colors
- Updated transition speed
