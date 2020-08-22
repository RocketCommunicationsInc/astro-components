# Astro Web Component and CSS Library

The Astro Web Component and CSS Library provides a starting point to begin developing Astro-compliant applications.


> NOTE: The Astro Component Library is still new and tends to release breaking changes, but follows semver so you can control when you incorporate them. We typically follow a 6 month release schedule which includes two major release per year with breaking changes, and intermediate patch releases with bug fixes.

This respository contains all of the individual Astro Web Component packages as well as a development environment that provides testing and interacting with the components in isolation, via the [Astro Storybook](https://astro-components.netlify.com). It also provides individual asset downloads for projects that do not use the Web Component library.


## Download and Install the Astro Web Component Storybook
If you would like to run the Astro Storybook locally, you may download and run this project, provided you have already installed [NodeJS](https://nodejs.org/en/download/):

```
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Install NPM modules for this project

```sh
npm i
```

Start the Storybook server

```sh
npm run storybook
```

Visit the site locally, the Storybook CLI process will notify you of the correct URL, but you can typically view the site in your browser at **http://localhost:9001/**

## Use the Astro Web Components in a NodeJS Project
You will need to be familiar with NodeJS and have a build process that transpiles ES6 to use the Web Component packages. Check out the [Open Web Components Quickstart](https://open-wc.org/guide/#quickstart) for a basic development config using [litElement](https://lit-element.polymer-project.org/).

### 1. Install litElement
LitElement provides a minimal Web Components framework for the components:
```sh
npm i lit-element --save
```
Import the package into your ES6 project:

```js
/* in your src/app.js, main.js. or similar main entry point */

import { LitElement } from 'lit-element';
```

### 2. Add Astro Components

Then, install the individual Astro Components you need in your application, beginning with the [Astro Static Assets](src/components/rux-assets/README.md) (`@astrouxds/rux-assets`).

```sh
npm i @astrouxds/rux-assets @astrouxds/rux-button --save
```

Import the component packages into your ES6 project:

```js
/* in your src/app.js, main.js. or similar main entry point */

import '@astrouxds/rux-button';
```

And render the custom elements in your app's templates:

```html
<main id="app">
  <rux-button>Click me</rux-button>
</main>
```


## Use the Astro UXDS without Web Components

In addition to Web Components, Astro includes a CSS Library, SVG icons, fonts, and an Astro favicon.

### Astro CSS
Astro CSS files are available depending on your project styling needs:

| Filename | Theme Vars & Fonts | Native Elements | Custom Elements |
| :-- | :--: | :--: | :--: |
| [astro.css](src/components/rux-assets/css/astro.css) | ✅ | ✅ | ✅ |
| [astro.core.css](src/components/rux-assets/css/astro.core.css)  | ✅ | ✅ |  |
| [astro.tokens.css](ssrc/components/rux-tatic/css/astro.tokens.css) | ✅ |  |  |

These CSS files are also offered in minified versions for production environments. You should use only one file; for most CSS-only users, we recommend **astro.css**. The **astro.tokens.css** file includes variables that inform the light and dark Astro themes, but does not include any direct element styles. The tokens file is already included in every Astro Web Component package's dependencies, so you need not include it in your application unless you plan to extend the use of the properties.

If you are using a package manager, you can include up-to-date versions of these and other assets in your managed application by installing the Astro Static Assets package:

```sh
npm i @astrouxds/rux-assets --save
```

You may need to set up the appropriate loaders for each of the static asset types, depending on your build process. For simple projects, the [Copy Webpack Plugin](https://www.npmjs.com/package/copy-webpack-plugin) can quickly copy the Astro assets to your build folder:

```js

/* in webpack.config.js */
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        // if you want the entire folder, minus some extras
        { 
          from: 'node_modules/@astrouxds/rux-assets/', 
          ignore: ['package.json', 'README.md', 'LICENSE.md', '.DS_Store' ]
          to: '/dist',
          toType: 'dir' 
        },
        // if you want to copy just what you need, and specify separate output paths
        { 
          from: 'node_modules/@astrouxds/rux-assets/favicon.ico',
          to: '/dist'
        },
        { 
          from: 'node_modules/@astrouxds/rux-assets/css/astro.core.css',
          to: '/dist/assets/styles'
        },
        { 
          from: 'node_modules/@astrouxds/rux-assets/icons/astro.svg',
          to: '/dist/assets/icons'
        },
      ],
    }),
  ],
  ...
}
```


Note that while you may download the static assets directly from this project, you will not automatically receive future updates as the Astro team adds features or pushes fixes. Please see the notes under [Special Circumstances for Offline Use](src/components/rux-assets/README.md#special-circumstances-for-offline-use) for more information.






## New in Astro 4

- All components have been updated to [LitElement](https://lit-element.polymer-project.org) from Polymer
- Updated documentation
- [Storybook Component Sandbox](https://astro-components.netlify.com)
- Merged Astro Style Library in to Astro Components


## Backwards Compatibility

The Astro Component Library is designed for use on modern browsers that support the [W3C Custom Elements Standard](https://caniuse.com/#feat=custom-elementsv1). For backwards compatibility with Pre-Chromium Edge and Firefox versions prior to Firefox 63 you will need to use the [web components polyfill](https://www.webcomponents.org/polyfills)

## Documentation

| Component             | Package (if available as Web Component)                                                            | Documentation                                            | Guidelines                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------- |
| `Accordion`           | [@astrouxds/rux-accordion](https://www.npmjs.com/package/@astrouxds/rux-accordion)                 |                                                          | [Guidelines](https://astrouxds.com/ui-components/accordion)           |
| `Buttons`             | [@astrouxds/rux-button](https://www.npmjs.com/package/@astrouxds/rux-button)                       | [Docs](./src/components/rux-button/README.md)            | [Guidelines](https://astrouxds.com/ui-components/button)              |
| `Checkbox`            | n/a                                                                                                |                                                          | [Guidelines](https://astrouxds.com/ui-components/checkbox)            |
| `Clock`               | [@astrouxds/rux-clock](https://www.npmjs.com/package/@astrouxds/rux-clock)                         | [Docs](./src/components/rux-clock/README.md)             | [Guidelines](https://astrouxds.com/ui-components/clock)               |
| `Dialog Box / Modal`  | [@astrouxds/rux-modal](https://www.npmjs.com/package/@astrouxds/rux-modal)                         | [Docs](./src/components/rux-modal/README.md)             | [Guidelines](https://astrouxds.com/ui-components/dialog-box)          |
| `Global Status Bar`   | [@astrouxds/rux-global-status-bar](https://www.npmjs.com/package/@astrouxds/rux-global-status-bar) | [Docs](./src/components/rux-global-status-bar/README.md) | [Guidelines](https://astrouxds.com/ui-components/global-status-bar)   |
| `Icons`               | [@astrouxds/rux-icon](https://www.npmjs.com/package/@astrouxds/rux-icon)                           | [Docs](./src/components/rux-icon/README.md)              | [Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)   |
| `Input Field`         | n/a                                                                                                |                                                          | [Guidelines](https://astrouxds.com/ui-components/input-field)         |
| `Links`               | n/a                                                                                                |                                                          | [Guidelines](https://astrouxds.com/ui-components/link)                |
| `Log`                 | [@astrouxds/rux-log](https://www.npmjs.com/package/@astrouxds/rux-log)                             | [Docs](./src/components/rux-log/README.md)               | [Guidelines](https://astrouxds.com/ui-components/log)                 |
| `Notification Banner` | [@astrouxds/rux-notification](https://www.npmjs.com/package/@astrouxds/rux-notification)           | [Docs](./src/components/rux-notification/README.md)      | [Guidelines](https://astrouxds.com/ui-components/notification-banner) |
| `Pagination`          | n/a                                                                                                |                                                          | [Guidelines](https://astrouxds.com/ui-components/pagination)          |
| `Pop Up Menu`         | [@astrouxds/rux-pop-up-menu](https://www.npmjs.com/package/@astrouxds/rux-pop-up-menu)             | [Docs](./src/components/rux-pop-up-menu/README.md)       | [Guidelines](https://astrouxds.com/ui-components/pop-up)              |
| `Progress`            | [@astrouxds/rux-progress](https://www.npmjs.com/package/@astrouxds/rux-progress)                   | [Docs](./src/components/rux-progress/README.md)          | [Guidelines](https://astrouxds.com/ui-components/progress)            |
| `Push Buttons`        | [@astrouxds/rux-push-button](https://www.npmjs.com/package/@astrouxds/rux-push-button)             | [Docs](./src/components/rux-push-button/README.md)       | [Guidelines](https://astrouxds.com/ui-components/push-button)         |
| `Radio Button`        | n/a                                                                                                |                                                          | [Guidelines](https://astrouxds.com/ui-components/radio-button)        |
| `Search`              | n/a                                                                                                |                                                          | [Guidelines](https://astrouxds.com/ui-components/search)              |
| `Select Menu`         | n/a                                                                                                |                                                          | [Guidelines](https://astrouxds.com/ui-components/drop-down)           |
| `Segmented Button`    | [@astrouxds/rux-segmented-button](https://www.npmjs.com/package/@astrouxds/rux-segmented-button)   | [Docs](./src/components/rux-segmented-button/README.md)  | [Guidelines](https://astrouxds.com/ui-components/segmented-button)    |
| `Slider`              | [@astrouxds/rux-slider](https://www.npmjs.com/package/@astrouxds/rux-slider)                       | [Docs](./src/components/rux-slider/README.md)            | [Guidelines](https://astrouxds.com/ui-components/slider)              |
| `Status Symbol`       | [@astrouxds/rux-status](https://www.npmjs.com/package/@astrouxds/rux-status)                       | [Docs](./src/components/rux-status/README.md)            | [Guidelines](https://astrouxds.com/ui-components/status-symbol)       |
| `Table`               | n/a                                                                                                |                                                          | [Guidelines](https://astrouxds.com/ui-components/table)               |
| `Tabs`                | [@astrouxds/rux-tabs](https://www.npmjs.com/package/@astrouxds/rux-tabs)                           | [Docs](./src/components/rux-tabs/README.md)              | [Guidelines](https://astrouxds.com/ui-components/tabs)                |
| `Timeline`            | [@astrouxds/rux-timeline](https://www.npmjs.com/package/@astrouxds/rux-timeline)                   |                                                          | [Guidelines](https://astrouxds.com/ui-components/timeline)            |
| `Toggle`              | [@astrouxds/rux-toggle](https://www.npmjs.com/package/@astrouxds/rux-toggle)                       | [Docs](./src/components/rux-toggle/README.md)            | [Guidelines](https://astrouxds.com/ui-components/toggle)              |
| `Tree`                | [@astrouxds/rux-tree](https://www.npmjs.com/package/@astrouxds/rux-tree)                           | [Docs](./src/components/rux-tree/README.md)              | [Guidelines](https://astrouxds.com/ui-components/tree)                |


## Contributing
Follow the style defined in `/.eslintrc`, installing such tools as your IDE supports for revealing discrepencies before committing. 

### Astro Web Components
The folders in `/src/components/*` contain the Web Components, which are tested using matching Stories in  `/stories/*`. The Story files create instances of the components with various properties exposed via Storybook Knobs. All component variations should be demonstrated using Knobs before publishing or updating to ensure that the properties work as intended. There are heavily commented templates for Stories (`/stores/__rux-.stories.template.js`) and Components (`/src/components/__rux-template/`) to enable maintainers to quickly scaffold new Components. These component folders are what are ultimately published on NPM under the [AstroUXDS org](https://www.npmjs.com/org/astrouxds).

[Further information on Contributing to Astro Web Components](https://astro-components.netlify.app/?path=/story/astro-uxds-welcome--contributing)

### Astro CSS
The Astro CSS library is used to style native HTML Elements and to set theme styles that are inherited throughout the application, even when developers do not use the Web Components themselves. The CSS is divided into partials in `/src/css/*`, which is concatenated into the `/src/components/rux-assets/css/` folder using [PostCSS](https://postcss.org/) when the project builds using [Gulp](https://gulpjs.com/). See `/gulpfile.js` for more details.

**Note:** Changes to the Astro CSS should never be made directly to the `/src/components/rux-assets/css/*` files, as those are for distribution only.

Be sure to demonstrate any new or changed HTML elements using a Story. The Form Elements story (`/stories/rux-form-elements.stories.js`) shows how, even without a Web Component to mount, the functionality and variations can be displayed. If both Web Components and native HTML Elements can be used, such as in the case of Buttons (`/stories/rux-button.stories.js`), be sure to demonstrate both options.
