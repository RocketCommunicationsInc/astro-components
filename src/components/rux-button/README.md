# Buttons

Buttons allow users to trigger actions.

## Guidelines

- [Astro UXDS: Buttons](http://www.astrouxds.com/ui-components/buttons)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Button package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-button
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Button Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxButton } from '@astrouxds/rux-button/rux-button.js';
```

### 3. Render the Astro Button Web Component

Pass properties as attributes of the Astro Button custom element:

```xml
<rux-button size="large" disabled outline>
  Large Disabled Outline Button
</rux-button>

```

The component auto-imports the default Astro Icon Web Component for icons, if you specify one:

```xml
<rux-button icon="caution">
  Button with Icon using Astro UXDS Icon Web Component
</rux-button>
```
Also, you can use [Slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#Adding_flexibility_with_slots) to define icons within buttons. This method is best if you need to override the default icon library SVG file:

```xml
  <rux-button>
    <rux-icon icon="custom" library="/icons/custom.svg"></rux-icon>
    Slotted Icon Button
  </rux-button>
```
In this situation, you do not need to specify a size for the icon component -- the button's size attribute will define the appropriate size of the icon.



### Properties

| Property   | Type    | Default | Required | Description                                                                                                                                                                                                                                                                |
| ---------- | ------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | Boolean | `false` | No       | Disables the button via HTML `disabled` attribute. Icon takes on a distinct visual state. Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored.                                                                                  |
| `outline`  | Boolean | `false` | No       | Displays an outlined visual treatment suitable for secondary actions, such as a non-preferred alternative to an action identified by a standard button. For example, use an outline button for the less preferred option in Ok/Cancel button pairings.                     |
| `iconOnly` | Boolean | `false` | No       | Visually hides all text on the button, suitable for use cases where space is at a premium and the button intent is unambiguous, like a Play/Pause button. Requires the `icon` attribute to be set as well.                                                                 |
| `icon`     | String  | `''`    | No       | Displays an Astro icon matching this string to the left of the button text. For a [full list of available icons, see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols). Required when the `iconOnly` attribute is `true`. Note that you can also use the Slot to add an icon. |
| `size`     | String  | `''`    | No       | Displays the button as a `'small'` or `'large'` variant.                                                                                                                                                                                                                   |

---

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in the [static css directory](https://github.com/RocketCommunicationsInc/astro-components/tree/master/static/css).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes

Astro CSS classes follow the [BEM-style](http://getbem.com/introduction/) naming convention.

Configure the component using native HTML attributes or [BEM-style](http://getbem.com/introduction/) class suffixes after `rux-button--`.

```xml
<button class="rux-button">Submit</button>

<button class="rux-button rux-button--large rux-button--outline" disabled>
  Large Disabled Outline Button
</button>
```

The basic HTML/CSS usage supports icons if using Web Components (and importing the Astro Icon Component):

```xml
<button class="rux-button rux-button--icon">
  <rux-icon class="rux-icon rux-button__icon" icon="caution" color="white"></rux-icon>
  Button with Icon using Astro UXDS Icon Web Component
</button>
```

Otherwise, wrap your icon SVG in an HTML element with the [BEM-style](http://getbem.com/introduction/) classes `"rux-icon rux-button__icon"`:

```xml
<button class="rux-button rux-button--icon">
  <div class="rux-icon rux-button__icon">
    <svg ... ></svg>
  </div>
  Button with Local Icon
</button>
```

### Attributes

| Attribute               | Type    | Default | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------- | ------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`              | Boolean | `false` | No       | Disables the button via HTML `disabled` attribute. Icon takes on a distinct visual state. Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored.                                                                                                                                                                                                                                 |
| `outline`               | Boolean | `false` | No       | Displays an outlined visual treatment suitable for secondary actions, such as a non-preferred alternative to an action identified by a standard button. For example, use an outline button for the less preferred option in Ok/Cancel button pairings.                                                                                                                                                                    |
| `rux-button--icon-only` | Class   | —       | No       | Visually hides all text on the button, suitable for use cases where space is at a premium and the button intent is unambiguous, like a Play/Pause button. Must be used with the `rux-button--icon` class.                                                                                                                                                                                                                 |
| `rux-button--icon`      | Class   | —       | No       | Displays an Astro icon matching this string to the left of the button text. Required when element also has the class `rux-button--icon-only`. For a [full list of available icons, see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols) Note: Astro UXDS icons are only available when using the Web Component usage pattern, which imports the `<rux-icon>` component. |
| `rux-button--size`      | Class   | —       | No       | Displays the button as a `'small'` or `'large'` variant.                                                                                                                                                                                                                                                                                                                                                                  |

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://www.astrouxds.com/components/readme/#getting-started-with-html-%26-css)

---

## Revision History

##### **TODO BEFORE RELEASE**

- Test icons when they're finished, possibly change "With Icon" storybook knob to select from list of icons
- Look at ditching class string manipulation happening in the template render function and replace with `:host`-level attributes. Keep existing class-based styles working for users of previous versions
- Look at adding `tabindex` property or example/docs
- Demonstrate adding click handlers/methods to buttons, possibly incorporating Storybook Actions
- Should `size` property have a default value of `'standard'` for the button size? we don't have classes for it

##### **4.1**
- Add styles for and example of using slots for Icon child component

##### **4.0**

- Swapped kebab-cased `icon-only` attribute for standard camelCase `iconOnly`
- Deprecated `type` attribute in favor of separate `size`, `iconOnly`, and `outline` attributes. `default` type is No longer supoprted.
- Fixed the width of the small icon-only button and ensured icon-only buttons show No text, even if text is provided
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
