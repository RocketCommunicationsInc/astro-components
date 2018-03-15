#Modal
The RUX Modal component allows for a dialog style modal box in the style of …

RUX Modal is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding.

RUX Modal is supplied as-is and …

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Modal](https://www.astrouxds.com/library/modal)
* [RUX Modal Demo](https://www.astrouxds.com/library/modal)

##Installation
Install the Astro Component Library
`npm install --save @astro-components`
Or Install just the modal
`npm install --save @astro-components/rux-modal`
###Dependancies

* [Polymer 3](https://www.polymer-project.com)

##Usage
###Import the RUX Modal

```javascript
import { RuxModal } from "@astro-components/rux-modal/rux-modal.js";
```

###Basic HTML Usage
RUX Modal requires a message. In this instance a single button will be rendered labeled cancel.

```xml
<rux-modal
	message="This is a message"></rux-modal>
```

###Advanced HTML Usage
RUX Modal supports customizing the Confirm/Deny button labels as well as defining a custom icon and a custom listener event to listen to

```xml
<rux-modal
	confirm-text="Ok"
	deny-text="Cancel"
	icon="default:settings"
	custom-event"listen-for-me"></rux-modal>
```

###Event Listener
RUX Modal will emit a message using `modal-event` event and a detail message of `confirm` with a value of either `true` (confirm) or `false` (deny) depending on whether the user clicks the 

###Properties

| Property        | Type      | Description                                                                                                                                                                      |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `confirm-text`           | `string`    | Optional. Will display a confirmation button with the supplied text. If no `confirm-text` and `deny-text` paramaters are set a default Cancel button will be provided to the user to dismiss the modal window. |
| `deny-text`           | `string`    | Optional. Will display a deny button with the provided text. If no `deny-text` and `confirm-text` paramaters are set a default Cancel button will be provided to the user to dismiss the modal window. |
| `icon`      | `string`  | Optional custom icon for the modal window.                                                              |
| `custom-event`        | `string`  | Override the default event message with a custom event. Useful if you have more than one modal dialog. Note: Modal windows can be dynamically set, consider using a single instance of `rux-modal` assigning values via an object rather than creating multiple instances of `rux-modal`.