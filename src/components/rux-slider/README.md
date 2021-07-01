# Slider

A Slider allows users to choose from a range of continuous and discrete values. The Slider displays the range of possible values and the Slider’s indicator displays the current value.

## Guidelines

-   [Astro UXDS: Slider](http://www.astrouxds.com/ui-components/slider)
-   [MDN: HTML Input Range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Slider package via Command Line (Preferred Method)

```sh
npm i -save @astrouxds/rux-slider
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Slider Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxSlider } from '@astrouxds/rux-slider/rux-slider.js'
```

### 3. Render the Astro Slider Web Component

Pass properties via attributes similar to the native [HTML Input Range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) attributes:

```xml
<rux-slider
  min="0"
  max="400"
  step="5"
  val="200"
  label="Flow"
  axisLabels="['Low', 'Medium', 'High']"
  disabled
  hideInput
  >
</rux-slider>
```

### Properties

| Property     | Type    | Default | Required | Description                                                                                                                                                                                                           |
| ------------ | ------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `val`        | Number  | `0`     | Yes      | When passed in, declares the default value for the slider on mount. Updates a reflected property `val` on the component whenever changed.                                                                             |
| `min`        | Number  | `0`     | No       | Overrides the default value of 0. Can be a positive or negative number.                                                                                                                                               |
| `max`        | Number  | `100`   | No       | Overrides the default value of 100. Can be a positive or negative number.                                                                                                                                             |
| `step`       | Number  | `1`     | No       | Can be used to customize each step (e.g., count by 10) or to force an input to accept float values. Note: accepting float values in the input does not make existing code expecting integers understand float values. |
| `axisLabels` | Array   | `[]`    | No       | Adds a row of labels below the range slider. Placement is approximate and should not be used for precise indicators. Labels will be force-justified across available horizontal space.                                |
| `label`      | String  | `''`    | No       | Label for the slider element                                                                                                                                                                                          |
| `hideInput`  | Boolean | `false` | No       | Hides the input field from view                                                                                                                                                                                       |
| `disabled`   | Boolean | `false` | No       | Sets a disabled state on the component, which prevents typical user action from changing the value.                                                                                                                   |

## Revision History

##### **5.0**

-   Removed fallback CSS properties

##### **4.0**

-   clarified docs/code regarding `value` vs `val` property name
-   added flex styling to make Astro UXDS Slider inherit width of containing element.
-   renamed `axis-labels` property to `axisLabels`, and changed the type from comma-delimited String to Array.
-   documented `hideInput` property
-   Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.
