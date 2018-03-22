#Push Button
…

RUX Push Button is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and implemented with [Polymer Project 3](https://www.polymer-project.org) for backwards compatibility and document binding.

RUX Push Button is supplied as-is and …

For stylesheet usage outside of a WebComponent environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

##Guidelines

* [Astro UXDS: Push Button](https://www.astrouxds.com/library/push-button)
* [RUX Push Button Demo](https://www.astrouxds.com/library/push-button)

##Installation
Install the Astro Component Library
`npm install --save @astro-components`
Or Install just the push-button
`npm install --save @astro-components/rux-push-button`
###Dependancies

* [Polymer 3](https://www.polymer-project.com)

##Usage
###Import the RUX Push Button

```javascript
import { RuxPush Button } from "@astro-components/rux-push-button/rux-push-button.js";
```

###Basic HTML Usage
RUX Push Button …

```xml
<rux-push-button></rux-push-button>
```


###Event Listener
RUX Push Button …

###Properties

| Property          | Type      | Default | Required | Description                                                  |
| ----------------- | --------- | ------- | -------- | ------------------------------------------------------------ |
| `pushbutton`      | `Boolean` | false   | false    | Renders the button as a pushbutton rather than a push-button |
| `checked-label`   | `string`  | On      | false    |                                                              | … |
| `unchecked-label` | `string`  | Off     | false    | …                                                            |  |
| `checked`         | `Boolean` | false   | false    |                                                              | Checked status of the push-button button |
