# Template

[Describe the component purpose. Include UX description.]

## Guidelines

-   [Astro UXDS: Template](https://www.astrouxds.com/ui-components/template)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Template package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-template
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Template Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro UXDS Components directory in your project.

```javascript
import { RuxTemplate } from '@astrouxds/rux-template/rux-template.js'
```

### 3. Render the Astro Template Web Component

Pass properties as attributes of the Astro Template custom element:

```xml
<rux-template propertyOne propertyTwo="value"></rux-template>
```

### Properties

| Property      | Type    | Default | Required | Description                           |
| ------------- | ------- | ------- | -------- | ------------------------------------- |
| `propertyOne` | Boolean | `false` | No       | When set, what does this property do? |
| `propertyTwo` | String  | `''`    | No       | When set, what does this property do? |

---

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in the [static css directory](https://github.com/RocketCommunicationsInc/astro-components/tree/master/static/css).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes

Astro CSS classes follow the [BEM-style](http://getbem.com/introduction/) naming convention.

Configure the component using native HTML attributes or [BEM-style](http://getbem.com/introduction/) class suffixes after `rux-template--`.

```xml
<div class="rux-template rux-template--attribute" disabled>
   Disabled Template
</div>
```

### Attributes

| Attribute                 | Type    | Default | Required | Description                           |
| ------------------------- | ------- | ------- | -------- | ------------------------------------- |
| `disabled`                | Boolean | `false` | No       | When set, what does this property do? |
| `rux-template--attribute` | Class   | `''`    | No       | When set, what does this property do? |

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://www.astrouxds.com/components/readme/#getting-started-with-html-%26-css)

## Revision History

##### **4.0**

-   [List any changes made here]
-   Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.
