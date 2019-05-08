#Accordion
The RUX Accordion component …

RUX Accordion is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding.

RUX Accordion is available as a preview release and should not be used in production code.

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Accordion](https://www.astrouxds.com/ui-components/accordion)

##Installation
`npm i -S @astrouxds/rux-accordion`
###Dependancies
=======
Install the Astro Component Library.
`git clone https://bitbucket.org/rocketcom/astro-components.git`

###Dependencies

* [Polymer 3](https://www.polymer-project.com)
* [Astro 3 Core CSS](https://bitbucket.org/rocketcom/astro-styles/src/master/)

##Usage
###Import the RUX Accordion

```javascript
import { RuxAccordion } from "@astro-components/rux-accordion/rux-accordion.js";
```

###Advanced HTML Usage

```xml
<rux-accordion label="Accordion Label">
  Accordion Content
</rux-accordion>
```

###Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| label         | String     | Content for the always-visible accordion header            |  
