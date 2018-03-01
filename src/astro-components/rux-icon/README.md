#Icons
The RUX Icon component is … RUX Icon is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding. 

RUX Icon is supplied as-is and …

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines
* [Astro UXDS: Buttons](https://cms.astrouxds.com/library/icons)
* [RUX Icon Demo](https://cms.astrouxds.com/library/icons)

##Installation
Install the Astro Component Library
`npm install --save @astro-components`
Or Install just the icon
`npm install --save @astro-components/rux-icon`
###Dependancies
* [Polymer 3](https://www.polymer-project.com)


##Usage
###Import the RUX Button

```javascript
import { RuxIcon } from "@astro-components/rux-icon/rux-icon.js";
```

###Basic HTML Usage

```xml
<rux-icon icon="default:settings"></rux-icon>
```

###Properties
| Property | Type | Description |
| -------- | ---- | ------------|
| `icon` | `string` | Defines the icon to be used. RUX Icon uses the convention of `namespace:icon-name` to avoid potential namespace collision. RUX ships with the following icon sets: `default`,`advanced-status` and `status`. For a [full list of icon symbols see the Icons section in Astro UXDS Guidelines]((https://cms.astrouxds.com/library/buttons))
| `color` | `string` | Changes the icon color. Accepted values can be entered as hex, rgba, hsl and HTML string. **Caution: the `status` icon set cannot and should not be overidden** |
| `size` | `string` | Allows for large icon variants  |


###Events
RUX Icons do not support events. If you need an Icon button use the RUX Button Icon type
