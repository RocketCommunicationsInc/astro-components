#Status
The RUX Status component is … RUX Icon is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding.

RUX Status is supplied as-is and …

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Status Indicator](https://www.astrouxds.com/library/status-indicator)
* [RUX Status Indicator Demo](https://www.astrouxds.com/library/status-indicator)

##Installation
Install the Astro Component Library
`npm install --save @astro-components`
Or Install just the status indicator
`npm install --save @astro-components/rux-status`
###Dependancies

* [Polymer 3](https://www.polymer-project.com)
* [RUX Icon](https://bitbucket.org/rocketcom/astro-components/src/32401d605b383b2df5f0a0bd540a2b38814f452b/src/astro-components/rux-icon/?at=master)

##Usage
###Import RUX Status Indicator

```javascript
import { RuxStatus } from "@astro-components/rux-status/rux-status.js";
```

###Basic HTML Usage
Rux Status supports both [simple status indicators](www.astrouxds.com/library/status-indicator) and [advanced status indicators](www.astrouxds.com/library/icon-symbols). RUX Status is assumed to be a simple status symbol if _only_ the status paramter is passed in. If any other param is passed the advanced status pattern is used.

```xml
<rux-status status="error"></rux-status>
```

###Properties
| Property | Type | Description |
| -------- | ---- | ------------|
| `status` | `string` | Valid options are `off`, `standby`, `ok`, `caution`, `error` and `emergency`.
| `label` | `string` | Primary label for an advanced status indicator. Labels exceeding width of the icon will be truncated with an ellipsis |
| `sublabel` | `string` | An optional string value appearing underneath the primary label |
| `notifications` | `number` | Indicates notifications for a give status. Values beyond 9,999 are shorthanded 10K, 100K, 1.5M, 1.5B and ∞ for numbers greater than 999,999,999,999 |

