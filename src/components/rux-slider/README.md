# Slider
A Slider allows users to choose from a range of continuous and discrete values. The Slider displays the range of possible values and the Slider’s indicator displays the current value.

### Rules of Thumb
Use a slider:

- When users need to set defined, contiguous values (like volume or brightness), or a range of discrete values (like screen resolution).
- To display abstracted values like “Low, Medium,” or “High.”
- To reflect discrete numeric values by adding labels.
- To give users immediate feedback on selection such as screen contrast.

Further advice can be found on the [HTML Input Range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) article on MDN:

> `<input>` elements of type "range" let the user specify a numeric value which must be no less than a given value, and no more than another given value. The precise value, however, is not considered important. This is typically represented using a slider or dial control rather than a text entry box like the number input type. Because this kind of widget is imprecise, it shouldn't typically be used unless the control's exact value isn't important.

## Guidelines

* [Astro UXDS: Slider](http://www.astrouxds.com/library/slider)


## Web Components Usage

### 1. Installation
#### ** Install the Astro RUX Slider package via Command Line** (Preferred Method)

```sh
npm i -save @astrouxds/rux-slider
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.


#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.
Via CLI: 

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)


### 2. Import the RUX Slider Web Component
This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxSlider } from "@astro-components/rux-slider/rux-slider.js";
```


### 3. Render the RUX Slider Web Component
The Rux Slider component needs a number value passed in via the `val` property:

```xml
<rux-slider val="50"></rux-slider>
```
Additional element configuration is available via properties similar to the native [HTML Input Range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) attributes:

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

## Rux Slider Component Properties
| Property        | Type      | Default | Required | Description  |
| --------------- | --------- | ------- | -------- | ------------ |
| `val` | Number | `0` | Yes | When passed in, declares the default value for the slider on mount. Updates a reflected property `val` on the  component whenever changed.
| `min` | Number | `0` | No | Overrides the default value of 0. Can be a positive or negative number. |
| `max` | Number | `100` | No | Overrides the default value of 100. Can be a positive or negative number. |
| `step` | Number | `1` | No | Can be used to customize each step (e.g., count by 10) or to force an input to accept float values. Note: accepting float values in the input does not make existing code expecting integers understand float values. |
| `axisLabels` | Array | `[]` |  No | Adds a row of labels below the range slider. Placement is approximate and should not be used for precise indicators. Labels will be force-justified across available horizontal space. |
| `label` | String | `''` | No | Label for the slider element |
| `hideInput` | Boolean | `false` | No | Hides the input field from view |
| `disabled` | Boolean | `false` | No | Sets a disabled state on the component, which prevents typical user action from changing the value. |




## Revision History
##### **4.1**
- clarified docs/code regarding `value` vs `val` property name
- added flex styling to make Rux Slider inherit width of containing element.
- renamed `axis-labels` property to `axisLabels`, and changed the type from comma-delimited String to Array.
- documented `hideInput` property
- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.


##### **Notes**
RUX Slider is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and [HTML Input Range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range).

**Note:** RUX Slider is available as a preview release and should not be used in production code.

