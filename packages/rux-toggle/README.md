#Toggle
RUX Toggle is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding.

RUX Toggle is available as a preview release and should not be used in production code.

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Toggle](http://www.astrouxds.com/library/toggle)

##Installation
`npm i -S @astrouxds/rux-toggle`

###Dependancies

* [Polymer 3](https://www.polymer-project.com)
* [Astro 3 Core CSS](https://bitbucket.org/rocketcom/astro-styles/src/master/)

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

###Properties

| Property          | Type      | Default | Required | Description                                             |
| ----------------- | --------- | ------- | -------- | ------------------------------------------------------- |
| `checked`         | `Boolean` | false   | false    |                                                         | Checked status of the toggle button |
