# Segmented Button

Segmented Buttons allow users to select one item at a time from two to four options. Selecting one option automatically turns off the last selection made. Segmented Buttons are mutually exclusive.

## Guidelines

- [Astro UXDS: Segmented Button](https://astrouxds.com/ui-components/segmented-button)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Segmented Button package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-segmented-button
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Segmented Button Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxSegmentedButton } from '@astrouxds/rux-segmented-button/rux-segmented-button.js';
```

### 3. Render the Astro Segmented Button Web Component

Pass an Array of segments via the `data` attribute on the Segmented Button custom element. Segment items in the `data` Array must be objects with a `label` string. The first item in the Array will be auto-selected unless another segment item has a `selected` property with a truthy value:

```javascript
import { RuxSegmentedButton } from '@astrouxds/rux-segmented-button/rux-segmented-button.js';

const myButtonSegments = [
  { label: "First Segment" },
  { label: "Second Segment", selected: true },
  { label: "Third Segment" }
];

// ...

render() {
	return `<rux-segmented-button data="${myButtonSegments}"></rux-segmented-button>`;
}
```

### Properties (for the Segmented Button component)

| Property | Type  | Default | Required | Description                                             |
| -------- | ----- | ------- | -------- | ------------------------------------------------------- |
| `data`   | Array | `[]`    | Yes      | Items in this Array are the individual button segments. |

### Sample Astro UXDS Segmented Button `data` Array

```js
[{ label: 'First Segment' }, { label: 'Second Segment', selected: true }, { label: 'Third Segment' }];
```

### Properties for items within the `data` Array

| Property   | Type    | Default | Required | Description                                                                                                                                                                                                             |
| ---------- | ------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`    | String  | —       | Yes      | Defines the label for the button segment.                                                                                                                                                                               |
| `selected` | Boolean | —       | No       | If true, selects this segment rather than the first segment in the `data` Array on mount. If more than one segment has a truthy `selected` value, the earliest one in the Array will register and the rest are ignored. |

---

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in the [static css directory](https://github.com/RocketCommunicationsInc/astro-components/tree/master/static/css).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes

Astro CSS classes follow the [BEM-style](http://getbem.com/introduction/) naming convention. Using Astro's CSS classes `rux-segmented-button`, `rux-segmented-button__segment`, compose your segmented button using styled HTML radio input elements.

Configure the component using native HTML attributes. For each group of radio buttons, the input elements representing choices must have the same value for their `name` attributes. Each `<input>` needs unique a `id` that matches the `for` attribute of a `<label>`.

```xml
<ul class="rux-segmented-button">
  <li class="rux-segmented-button__segment">
    <input type="radio" id="segment1" name="rux-group" />
    <label for="segment1">Segment 1</label>
  </li>
  <li class="rux-segmented-button__segment">
    <input type="radio" id="segment2" name="rux-group" />
    <label for="segment2">Segment 2</label>
  </li>
  <li class="rux-segmented-button__segment">
    <input type="radio" id="segment3" name="rux-group" />
    <label for="segment3">Segment 3</label>
  </li>
</ul>
```

### Attributes

| Attribute  | Type    | Default | Required | Description                                                                                                              |
| ---------- | ------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| `selected` | Boolean | `false` | No       | If present on the `<input>` element, selects this segment rather than the first radio input element in the group.        |
| `name`     | String  | —       | Yes      | Associates a group of Radio Button choices. All `<input>` elements in the group must have identical `name` values.       |
| `required` | Boolean | `false` | No       | Follows native form element `required` behavior, preventing submission of the form until a valid value has been entered. |

## Revision History

##### **4.0**

- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.
