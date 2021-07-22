# Tree

A Tree navigation element presents a hierarchical set of related items, and allow users to explore and select items within that hierarchy. Each item can have a number of subitems.

An item can be expanded to reveal subitems, if any exist, and collapsed to hide subitems.

## Guidelines

-   [Astro UXDS: Tree](http://www.astrouxds.com/library/tree)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Tree package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-tree
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro Component Library](https://github.com/RocketCommunicationsInc/astro-components/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download Astro Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Tree Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxTree } from '@astrouxds/rux-tree/rux-tree.js'
```

### 3. Render the Astro Tree Web Component

```xml
<rux-tree .data="${dataArray}"></rux-tree>
```

### Properties

| Property | Type  | Default | Required | Description                                                                 |
| -------- | ----- | ------- | -------- | --------------------------------------------------------------------------- |
| `data`   | Array | `[]`    | yes      | An array of objects defining the tree structure. See a sample object below. |

#### Sample `data` object

```json
[
 {
  label: "Option 1",
  status: "critical",
  expanded: true,
  children: [{
   label: "Option 1.1",
   status: "normal",
   selected: true,
   children: [ …] }]
 },
 {
  label: "Option 1.2",
  status: "normal",
  children: [ …]
 },
 {
  label: "Option 2",
  status: "normal",
 }
]
```

### Object Properties

| Property   | Type    | Required | Description                                                                                                                                 |
| ---------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`    | String  | yes      | The label for the tree item                                                                                                                 |
| `id`       | String  | no       | An optional property to help identify individual tree elements                                                                              |
| `selected` | Boolean | no       | If set to `true`, this item shows a selected style. When a new item is selected by user click, all other selected items are unselected.     |
| `expanded` | Boolean | no       | If set to `true`, this item is expanded. Multiple items can be expanded at the same time.                                                   |
| `status`   | String  | no       | An optional property to assign status. See [Astro Status](http://www.astrouxds.com/library/tree) for valid status options                   |
| `children` | Array   | no       | An array of child elements. Children use the same structure as parents and may include their own `children` array to create nested elements |

### Component Events

Tree emits a `tree-updated` event whenever the selected tree item changes. Events contain a composed path to the element that triggered the event and two objects in the the `detail` property.

#### Sample Tree event

```javascript
window.addEventListener('tree-updated', (event) => {
    // an array that reflects the current state of the tree
    console.log('Tree data', event.detail.data)

    // an object representing the currently selected tree item
    console.log('Selected tree item', event.detail.selected)
})
```

#### `detail` Properties

| Property   | Type   | Description                                                |
| ---------- | ------ | ---------------------------------------------------------- |
| `data`     | Array  | An updated array reflecting the current state of the array |
| `selected` | Object | The currently selected element                             |

## Revision History

##### **4.0**

-   Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.
-   Tree supports multiple nested child tree element
-   Added keyboard support
-   Added support for assigning status to each tree item

##### **3.0**

-   Added a light theme

##### **2.1**

-   Converted to Web Component

##### Notes

RUX Tree is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html).

**Note:** RUX Tree is available as a preview release and should not be used in production code.
