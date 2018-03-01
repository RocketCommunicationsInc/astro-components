#Buttons
The RUX Button component is based on the buttons concepts in Astro UXDS. There are several variants to be used. RUX Button is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding. 

RUX Button is supplied as-is and …

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines
* [Astro UXDS: Buttons](https://cms.astrouxds.com/library/buttons)
* [RUX Button Demo](https://cms.astrouxds.com/library/buttons)

##Installation
Install the Astro Component Library
`npm install --save @astro-components`
Or Install just the butto
`npm install --save @astro-components/rux-button`
###Dependancies
* [Polymer 3](https://www.polymer-project.com)
* [RUX Button](https://bitbucket.org/rocketcom/astro-components/src/32401d605b383b2df5f0a0bd540a2b38814f452b/src/astro-components/rux-icon/?at=master)


##Usage
###Import the RUX Button

```javascript
import { RuxButton } from "@astro-components/rux-button/rux-button.js";
```

###Basic HTML Usage

```xml
<rux-button>Button Label</rux-button
```

###Properties
| Property | Type | Description |
| -------- | ---- | ------------|
| `icon` | `string` | Defines the icon to be used. Adheres to the RUX Icon convention of `namespace:icon-name`. Using `icon` alone will create a standard button with an icon and label contained within the standard button area. `icon` used in conjunction with `type="icon"` will create an icon without border or background.
| `default` | `attribute` | Will add a highlight outline around the button. Best practice when giving an area focus that has a `default` button is to programmatically assign focus |
| `disabled` | `attribute` | Disables the button. Icon takes on a distinct visual state. Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored |

###Customizing the Button
Buttons have a variety of types for use in different situations and can be set viat the `type` attribute. 
`<rux-button type="small">Small Button</rux-button>`

####Supported Types
| Type | Description |
| -----| ------------|
| `small` | A small variant. Useful for small spaces. |
| `large` | A large variant. Useful for calls to action. Master Off |
| `icon` | An icon without background or borders that behaves like a button. |
| `icon-contained` | Standard button and behavior but uses only an icon. E.g., A Play/Pause button would use `icon-contained` |

###Button Groups
Use a `<div class="rux-button-group"></div>` as a wrapper element.


###Events
RUX Button supports all standard mouse and keyboard events
