# Accordion

An Accordion is a device which presents a hierarchical set of items in which only a single branch of that hierarchy may be exposed at one time. Accordions are not commonly used for direct action or data manipulation. Use Accordions for navigation within a master-detail navigational pattern. Consider [Trees](https://astrouxds.com/ui-components/tree) for more complex navigation.

## Guidelines

-   [Astro UXDS: Accordion](http://www.astrouxds.com/ui-components/accordion)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Accordion package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-accordion
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Accordion Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxAccordion } from '@astrouxds/rux-accordion/rux-accordion.js'
```

### 3. Render the Astro Accordion Web Component

Render any HTML or string within the named [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot).
The Boolean `open` attribute of the Astro UXDS Accordion custom element expands that accordion on load or mount:

```xml
<rux-accordion open>
  <span slot="label">Accordion title</span>
  <span slot="content">Accordion content</span>
</rux-accordion>
<rux-accordion>
  <span slot="label">
    Another accordion title, with <b>HTML</b>
  </span>
  <span slot="content">
    <div>Accordion <b>HTML</b> here</div>
  </span>
</rux-accordion>
```

### Properties

| Property | Type    | Default | Required | Description                                                                                                                                                |
| -------- | ------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `open`   | Boolean | `false` | No       | When set to `true`, opens this accordion item on mount or update. By default, all accordions are closed. Multiple accordions can be open at the same time. |

---

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in the [static css directory](https://github.com/RocketCommunicationsInc/astro-components/tree/master/static/css).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes

Astro CSS classes follow the [BEM-style](http://getbem.com/introduction/) naming convention.

The Boolean `open` attribute of the`<details>` HTML element sets an accordion's open state, as defined by default browser behavior for the [HTML Details/Summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) pattern.

```xml
 <div class="rux-accordion">
  <details class="rux-accordion__item" open>
    <summary class="rux-accordion__label">
      Accordion title
    </summary>
    <div class="rux-accordion__content">
      Accordion content
    </div>
  </details>
</div>
```

### Attributes

| Attribute | Type    | Default | Required | Description                                                                                                                                                        |
| --------- | ------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `open`    | Boolean | `false` | No       | While this attribute is present on the component, this accordion is open. By default, all accordions are closed. Multiple accordions can be open at the same time. |

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://www.astrouxds.com/components/readme/#getting-started-with-html-%26-css)

## Revision History

##### **4.0**

-   Introduced new Details/Summary pattern and flattened usage to support a simple parent/child relationship. Recursive child accordions not supported at this time, but may come in a future update.
-   Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.
