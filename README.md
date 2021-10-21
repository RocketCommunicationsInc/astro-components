# NOTE: The Astro Component using Lit Element are in maintenace mode

Please see new improved Stencil based components available at https://github.com/RocketCommunicationsInc/astro/blob/main/packages/web-components/readme.md and have your voice heard before release. The updated components are quite mature and we would encourage new projects to seriously consider using the updated Stencil components moving forward.

- If you find any bugs or issues, please file them here https://github.com/RocketCommunicationsInc/astro/issues
- If you have any questions or requests please ask them here https://github.com/RocketCommunicationsInc/astro/discussions


# Astro Web Component and CSS Library

The Astro Web Component and CSS Library provides a starting point to begin developing Astro-compliant applications.

> NOTE: The Astro Component Library is still new and tends to release breaking changes, but follows semver so you can control when you incorporate them. We typically follow a 6 month release schedule which includes two major release per year with breaking changes, and intermediate patch releases with bug fixes.



## Download and Install for all Astro Web Components and Styles

The directions below assume basic knowledge of NodeJS. Make sure you have installed both globally before continuing. An example can be seen on the [Astro Storybook site](https://astro-components.netlify.com)

Create a new directory and change directory

```
mkdir astro
cd astro
```

Clone this repository

```
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Install NPM modules for this project

```
npm i
```

Run the Storybook Server

```
npm run storybook
```

Visit the site locally, the Storybook CLI process will notify you of the correct URL, but you can typically view the site in your browser at **http://localhost:9001/**

To make use of this repository as a basis for your application you will need to implement your own build system. We recommend [Open WC](https://open-wc.org) as a starting point.

## Download and Install for CSS Library

For projects that won’t use the Web Component Library you only need the contents of the `static` directory.

Clone this repository

```
git@github.com:RocketCommunicationsInc/astro-components.git
```

Copy the contents of the `static` directory (css, fonts, icons, img, favicon.ico) to your project directory. Create a link to the CSS.

**For development**

```html
<link rel="stylesheet" href="./css/astro.css" />
```

**For production**

```html
<link rel="stylesheet" href="./css/astro.min.css" />
```

## Using NPM

Follow the instructions for downloading and installing the CSS Library

Use npm to install the UI Library Elements required for your project. For example to intall an Astro Button

```
npm i -D @astrouxds/rux-button
```

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

The folders in `/src/components/*` contain the Web Components, which are tested using matching Stories in `/stories/*`. The Story files create instances of the components with various properties exposed via Storybook Knobs. All component variations should be demonstrated using Knobs before publishing or updating to ensure that the properties work as intended. There are heavily commented templates for Stories (`/stores/__rux-.stories.template.js`) and Components (`/src/components/__rux-template/`) to enable maintainers to quickly scaffold new Components. These component folders are what are ultimately published on NPM under the [AstroUXDS org](https://www.npmjs.com/org/astrouxds).

[Further information on Contributing to Astro Web Components](https://astro-components.netlify.app/?path=/story/astro-uxds-welcome--contributing)

### Astro CSS

The Astro CSS library is used to style native HTML Elements and to set theme styles that are inherited throughout the application, even when developers do not use the Web Components themselves. The CSS is divided into partials in `/src/css/*`, which is concatenated into the `/static/css/` files using [PostCSS](https://postcss.org/) when the project builds using [Gulp](https://gulpjs.com/). See `/gulpfile.js` for more details.

**Note:** Changes to the Astro CSS should never be made directly to the `/static/css/*` files, as those are for distribution only.

Be sure to demonstrate any new or changed HTML elements using a Story. The Form Elements story (`/stories/rux-form-elements.stories.js`) shows how, even without a Web Component to mount, the functionality and variations can be displayed. If both Web Components and native HTML Elements can be used, such as in the case of Buttons (`/stories/rux-button.stories.js`), be sure to demonstrate both options.
