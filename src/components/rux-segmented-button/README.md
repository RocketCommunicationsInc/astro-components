# Segmented Button

Segmented Buttons allow users to select one item at a time from two to four options. Selecting one option automatically turns off the last selection made. Segmented Buttons are mutually exclusive.

### Rules of Thumb

- Use Segmented Buttons to **filter a grid or table**, or to **switch a view's display mode**.
- One option must always be selected.

##Guidelines

- [Astro UXDS: Segmented Button](https://astrouxds.com/ui-components/segmented-button)

## Web Components Usage

### 1. Installation

#### ** Install the Astro RUX Segmented Button package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-segmented-button
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)

### 2. Import the RUX Segmented Button Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxSegmentedButton } from "@astro-components/rux-segmented-button/rux-segmented-button.js";
```

### 3. Render the RUX Segmented Button Web Component

Pass an array of choices via the `data` attribute. Log entries must be objects with a `label` string. The first option will be auto-selected unless another item has `selected: true`:

```javascript
import { RuxSegmentedButton } from "@astro-components/rux-segmented-button/rux-segmented-button.js";

const myButtonArray = [
	{ label: "First Item" },
	{ label: "Second Item" },
	{ label: "Third Item" }
];

// ...

render() {
	return `<rux-segmented-button data="${myButtonArray}"></rux-segmented-button>`;
}
```

## Rux Segmented Button Component Properties

| Property | Type  | Default | Required | Description                                       |
| -------- | ----- | ------- | -------- | ------------------------------------------------- |
| `data`   | Array | `[]`    | Yes      | An array of choices to display as button options. |

### Sample Rux Segmented Button `data` Array

```js
[
  { label: "First Item" },
  { label: "Second Item", selected: true },
  { label: "Third Item" }
];
```

### Rux Segmented Button `data` Array Object Properties

| Property   | Type    | Default | Required | Description                                                                                                                                                                                          |
| ---------- | ------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`    | String  | —       | Yes      | The label for the button segment.                                                                                                                                                                    |
| `selected` | Boolean | —       | No       | If true, selects this item rather than the first item in the component's `data` array on mount. If true on more than one item in the array, the earliest one will register and the rest are ignored. |

---

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in [Astro Styles repo](https://bitbucket.org/rocketcom/astro-styles/src/master/).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup using HTML5/CSS3

Using Astro's CSS classes `rux-segmented-button`, `rux-segmented-button__segment`, and `rux-group`, compose your segmented button using styled HTML radio buttons.

```xml
<ul class="rux-segmented-button">
  <li class="rux-segmented-button__segment">
    <input type="radio" name="rux-group" id="segment1" />
    <label for="segment1">Segment 1</label>
  </li>
  <li class="rux-segmented-button__segment">
    <input type="radio" name="rux-group" id="segment2" />
    <label for="segment2">Segment 2</label>
  </li>
  <li class="rux-segmented-button__segment">
    <input type="radio" name="rux-group" id="segment3" />
    <label for="segment3">Segment 3</label>
  </li>
</ul>
```

## Revision History

##### **4.1**

- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.

##### **Notes**

RUX Segmented Button is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html).

**Note:** RUX Segmented Button is available as a preview release and should not be used in production code.
