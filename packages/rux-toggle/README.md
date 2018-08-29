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
RUX Toggle …

```xml
<rux-toggle></rux-toggle>
```

```xml
<rux-toggle></rux-toggle>
```

###Event Listener
RUX Toggle …

###Properties

| Property          | Type      | Default | Required | Description                                             |
| ----------------- | --------- | ------- | -------- | ------------------------------------------------------- |
| `pushbutton`      | `Boolean` | false   | false    | Renders the button as a pushbutton rather than a toggle |
| `checked-label`   | `string`  | On      | false    |                                                         | … |
| `unchecked-label` | `string`  | Off     | false    | …                                                       |  |
| `checked`         | `Boolean` | false   | false    |                                                         | Checked status of the toggle button |
