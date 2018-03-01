#Buttons
The RUX Button component is based on the buttons concepts in Astro UXDS. There are several variants to be used.
##Guidelines

##Installation
`npm install --save @astro-components/rux-button`
##Usage
###Import the RUX Button

```javascript
import { RuxButton } from "@astro-components/rux-button/rux-button.js";
```

###Basic HTML Usage

```html
<rux-button>Button Label</rux-button
```

###Customizing the Button
Buttons have a variety of types for use in different situations and can be set viat the `type` attribute.
`<rux-button type="small">Small Button</rux-button>`
###Button Types
| Type | Description |
| -----| ------------|
| `small` | A small variant. Useful for small spaces |
| `large` | A large variant. Useful for calls to action |
| `icon` | An icon without background or borders that behaves like a button |
| `icon-contained` | Standard button and behavior but uses only an icon. E.g., A Play/Pause button would use `icon-contained` |

###Additional Properties
| Property | Description |
| ----- | ------------|
| `icon` | Defines the icon to be used. Adheres to the RUX Icon convention of `namespace:icon-name`. Using `icon` alone will create a standard button with an icon and label contained within the standard button area. `icon` used in conjunction with `type="icon"` will create an icon without border or background.
| `default` | Will add a highlight outline around the button. Best practice when giving an area focus that has a `default` button is to programmatically assign focus |
| `disabled` | Disables the button. Icon takes on a distinct visual state. Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored |

###Events
RUX Button supports all standard mouse and keyboard events
