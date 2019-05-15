#Accordion

An Accordion is a device which presents a hierarchical set of items in which only a single branch of that hierarchy may be exposed at one time. Accordions are not commonly used for direct action or data manipulation. Use Accordions for navigation within a master-detail navigational pattern. Consider [Trees](https://astrouxds.com/ui-components/tree) for more complex navigation.


## Guidelines

* [Astro UXDS: Accordion](http://www.astrouxds.com/library/accordion)


## Web Components Usage

### 1. Installation
#### ** Install the Astro RUX Accordion package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-accordion
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.


#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.
Via CLI: 

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)


### 2. Import the RUX Accordion Web Component
This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxAccordion } from "@astro-components/rux-accordion/rux-accordion.js";
```

### 3. Render the RUX Accordion Web Component
You may render any HTML or string within a [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot).

```xml
<rux-accordion open="true">
  <span slot="label">Accordion Title</span>
  <span slot="content">Accordion Content</span>
</rux-accordion>
<rux-accordion open="true">
  <span slot="label">
    Another Accordion Title, with <b>HTML</b>
  </span>
  <span slot="content">
    <div>Accordion <b>HTML</b> Here</div>
  </span>
</rux-accordion>
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
 <div class="rux-accordion">
  <details open="true" class="rux-accordion__item">
    <summary class="rux-accordion__label">
      Accordion Title
    </summary>
    <div class="rux-accordion__content">
      Accordion Content
    </div>
  </details>
</div>
```

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)


##Properties

| Property          | Type      | Default | Required | Description                                             |
| ----------------- | --------- | ------- | -------- | ------------------------------------------------------- |
| `open`        | `Boolean` | false      | no    | controls whether the accordion is open on load / mount |



## Revision History
##### **4.1**
- Introduced new Details/Summary pattern and flattened usage to support a simple parent/child relationship. Recursive child accordions not supported at this time, but may come in a future update. 
- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.

##### **Notes**
RUX Accordion is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html) and the [HTML Details/Summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) pattern.

**Note:** RUX Accordion is available as a preview release and should not be used in production code.

