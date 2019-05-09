#Buttons

Buttons allow users to trigger actions.

Common button groupings follow these conventions:
- Cancel buttons are always presented to the left of actions such as “Submit.”
- Always group together “Ok/Cancel” buttons.

### Rules of Thumb
- Use only predefined button colors, sizes and fonts — don’t customize or alter them.
- Don’t design elements which look similar to buttons but act differently. Buttons are actionable elements.
- Don’t activate [Pop Up Menus](https://www.astrouxds.com/ui-components/pop-up) from buttons.
- Buttons within the same group should be the same size. Use the width of the widest button.
- Space buttons evenly.
- Clearly title buttons by choosing a verb that describes the action the user performs at precisely the moment the button is clicked: “Save, Close, Print, Delete, Change Password,” etc. 
- Resize button width to accommodate the title; do not abbreviate or truncate button titles. 
- Don’t use an outside label to introduce a button. Instead, clearly title the button.
- Add an ellipsis (…) to the button title if it opens another window, Dialog Box or app.
- Within [Dialog Boxes](https://www.astrouxds.com/ui-components/dialog-box), right-justify buttons.

### Outline Button
Outline Buttons are an alternative button style to be used in situations where a de-emphasized button is beneficial in guiding the user to a preferred option. For example, use an outline button for the less preferred option in Ok/Cancel button pairings.

##Guidelines

* [Astro UXDS: Buttons](http://www.astrouxds.com/library/buttons)


## Web Components Usage

### 1. Installation
#### ** Install the Astro RUX Button package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-button
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.


#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.
Via CLI: 

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)


### 2. Import the RUX Button Web Component
This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxButton } from "@astro-components/rux-button/rux-button.js";
```

### 3. Render the RUX Button Web Component

```xml
<rux-button>Submit</rux-button>
```
Apply properties as attributes on the component: 

```xml
<rux-button size="large" disabled outline>
  Large Disabled Outline Button
</rux-button>

```

---


## Basic HTML Usage
### 1. Include the Astro UXDS CSS file
Latest release is available in [Astro Styles repo](https://bitbucket.org/rocketcom/astro-styles/src/master/). 

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```
### 2. Markup using HTML5/CSS3

```xml
<button class="rux-button">Submit</button>
```
Apply properties as [BEM-style](http://getbem.com/introduction/) class suffixes after `rux-button--` or as native HTML attributes, where appropriate. 

```xml
<button class="rux-button rux-button--large rux-button--outline" disabled>
  Large Disabled Outline Button
</button>
```

The basic HTML/CSS usage supports icons if using Web Components (and importing the Rux Icon Component):

```xml
<button class="rux-button rux-button--icon">
  <rux-icon class="rux-icon rux-button__icon" icon="utility:caution" color="white"></rux-icon>
  Button with Icon using Rux Icon Web Component
</button>
```

Otherwise, wrap your icon SVG in an HTML element with the [BEM-style](http://getbem.com/introduction/) class `"rux-button__icon"`:

```xml
<button class="rux-button rux-button--icon">
  <div class="rux-button__icon">
    <svg ... ></svg>
  </div>
  Button with Local Icon
</button>
```

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)


## Properties

| Property          | Type      | Default | Required | Description                                             |
| ----------------- | --------- | ------- | -------- | ------------------------------------------------------- |
| `disabled` | `boolean` | `false` | no | Disables the button via HTML `disabled` attribute. Icon takes on a distinct visual state. Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored. |
| `outline` | `boolean` | `false` | no | Displays an outlined visual treatment suitable for secondary actions, such as a non-preferred alternative to an action identified by a standard button. |
| `icon-only` | `boolean` | `false` | no | Visually hides all text on the button, suitable for use cases where space is at a premium and the button intent is unambiguous, like a Play/Pause button. |
| `icon` | `string` | `''` | yes, if  `icon-only=true` | Defines the icon to be used. Adheres to the RUX Icon convention of `'namespace:icon-name'`. Note: Rux icons are only available when using the Web Component usage pattern, which imports the `<rux-icon>` component.|
| `size` | `string` |  `''` | no | Defines a size other than the Standard button. Currently accepts `'small'` and `'large'` as values. |


## Revision History
##### **TODO BEFORE RELEASE**
- Test icons when they're finished, possibly change "With Icon" storybook knob to select from list of icons
- Look at ditching class string manipulation happening in the template render function and replace with `:host`-level attributes. Keep existing class-based styles working for users of previous versions
- Look at adding `tabindex` property or example/docs
- Demonstrate adding click handlers/methods to buttons, possibly incorporating Storybook Actions
- Should `size` property have a default value of `'standard'` for the button size? we don't have classes for it

##### **4.1**
- Deprecated `type` attribute in favor of separate `size`, `icon-only`, and `outline` attributes. `default` type is no longer supoprted.
- Fixed the width of the small icon-only button and ensured icon-only buttons show no text, even if text is provided
- Fixed outline button icon color
- Re-enabled missing focus styles on buttons.
- Removed undocumented critical button style.
- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.

##### **3.0**
- Removed Master Off Button Style
- Replaced various properties with css custom properties to support
- Removed `.satcom` class definition
- Removed `narrow`/`short` definitions

##### **1.4**
- Added `rux_` prefixes and BEM-compatible classes to all `satcom_`-prefixed elements. NOTE: `satcom_` will be removed in a future version
- Disabled user selection of text on all buttons
- Removed redundant background hover from `disabled` state by using `:not()` on the `:hover` state
- Removed redundant background hover from `master off` by using `:not()` on the `:hover` state // deprecate after 1.4
- Fixed Firefox alignment issue where text was misaligned vertically
- Renamed `half-height` to `short` and `half-width` to `narrow` (Note: `rux_` only, `satcom_` retains old syntax)
- Removed `user-select` and placed it in astro.css to apply to all input types
- Embedded master off icon and removed the additional states required to handle icons and gradient backgrounds

##### **Notes**
RUX Button is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html).

**Note:** RUX Button is available as a preview release and should not be used in production code.



