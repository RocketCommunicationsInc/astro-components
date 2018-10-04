#Tabs
The RUX Tabs component allows for tabbed interfaces. **Note**: the current Tabs are only for use in the [Global Status Bar](https://bitbucket.org/rocketcom/astro-components/src/master/src/astro-components/global-status-bar/) as a main navigation interaction. In-page tabs are a forthcoming feature.

RUX Tabs are based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding.

RUX Tabs is available as a preview release and should not be used in production code.

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Tabs](http://www.astrouxds.com/library/tabs)

##Installation
Install the Astro Component Library.
`git clone https://bitbucket.org/rocketcom/astro-components.git`
###Dependencies

* [Polymer 3](https://www.polymer-project.com)

##Usage
Tabs make use of four interelated components:

* Tabs: handles the overall logic
* Tab: the actual tab element that displays the title and can be clicked
* Panesl: keeps track of the associated panes
* Panel: the actual panels that display the content

###Import the RUX Tabs Component

```javascript
import { RuxTabs } from "@astro-components/rux-tabs/rux-tabs.js";
```

###Basic HTML Usage
To create a RUX Tab interface start with a containing `rux-tabs` element with a united `id` attribute, inside of which add a `rux-tab` element for each Tab you need. The `rux-tab` element requires a unique `id` attribute. The user viewable tab label is set like standard HTML.

A corresponding `rux-tab-panels` containing element with an `aria-labeledby` attribute referencing the `id` of the associated `rux-tabs` element. Along with a matching `rux-tab-panel` element for each `rux-tab` element. `rux-tab-panel` elements require an `aria-labeledby` attribute with a value that matches the value of the matching `id` attribute value.

```xml
<rux-tabs id="tab-set-id-1">
	<rux-tab id="tab-id-1">Tab 1</rux-tab>
	<rux-tab id="tab-id-2">Tab 2</rux-tab>
	<rux-tab id="tab-id-3">Tab 3</rux-tab>
</rux-tabs>

<rux-tab-panels aria-labeledby="tab-set-id-1">
	<rux-tab-panel aria-labeledby="tab-id-1"> ... </rux-tab-panel>
	<rux-tab-panel aria-labeledby="tab-id-2"> ... </rux-tab-panel>
	<rux-tab-panel aria-labeledby="tab-id-3"> ... </rux-tab-panel>
</rux-tab-panels>
```
