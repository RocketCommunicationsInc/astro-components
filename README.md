# Astro Web Component and CSS Library

The Astro Web Component and CSS Library provides a starting point to begin developing Astro Compliant applications.

To review the entire Astro Library

> NOTE: The Astro Component Library is still new and tends to release breaking changes, but follows semver so you can control when you incorporate them. We typically follow a 6 month release schedule which includes two major release per year with breaking changes, and intermediate patch releases with bug fixes.

#### New to Astro 4

- All components have been updated to [LitElement](https://lit-element.polymer-project.org) from Polymer
- Updated documentation
- [Storybook Component Sandbox](https://astro-storybook.netlify.com)
- Merged [Astro Style Library](https://bitbucket.org/rocketcom/astro-styles/src/master/) in to Astro Components

## Download and Install for all Astro Web Components and Styles

The directions below assume basic knowledge of NodeJS. Make sure you have installed both globally before continuing. An example can be seen on the [Astro Storybook site](https://astro-storybook.netlify.com)

Clone this repository

```
git clone git@bitbucket.org:rocketcom/astro-components.git
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
git clone git@bitbucket.org:rocketcom/astro-components.git
```

Copy the contents of the `static` directory (css, fonts, icons, img, favicon.ico) to your project directory. Create a link to the CSS.

**For development**

```html
<link rel="stylsheet" href="./css/astro.css" />
```

**For production**

```html
<link rel="stylsheet" href="./css/astro.min.css" />
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

| Component             | Status        | Notes                                                              | Package                                                                                            | Documentation                                            | Guidelines                                                            |
| --------------------- | ------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------- |
| `Accordion`           | `in progress` |                                                                    | [@astrouxds/rux-accordion](https://www.npmjs.com/package/@astrouxds/rux-accordion)                 |                                                          | [Gudielines](https://astrouxds.com/ui-components/accordion)           |
| `Buttons`             | `4.0`         |                                                                    | [@astrouxds/rux-button](https://www.npmjs.com/package/@astrouxds/rux-button)                       | [Docs](./src/components/rux-button/README.md)            | [Gudielines](https://astrouxds.com/ui-components/button)              |
| `Checkbox`            | `not planned` | Use standard style sheets to define style                          | n/a                                                                                                |                                                          | [Gudielines](https://astrouxds.com/ui-components/checkbox)            |
| `Clock`               | `4.0`         |                                                                    | [@astrouxds/rux-clock](https://www.npmjs.com/package/@astrouxds/rux-clock)                         | [Docs](./src/components/rux-clock/README.md)             | [Gudielines](https://astrouxds.com/ui-components/clock)               |
| `Modal Window`        | `4.0`         |                                                                    | [@astrouxds/rux-modal](https://www.npmjs.com/package/@astrouxds/rux-modal)                         | [Docs](./src/components/rux-modal/README.md)             | [Gudielines](https://astrouxds.com/ui-components/dialog-box)          |
| `Drop Downs`          | `not planned` | Use standard style sheets to define style                          | n/a                                                                                                |                                                          | [Gudielines](https://astrouxds.com/ui-components/drop-down)           |
| `Global Status Bar`   | `4.0`         |                                                                    | [@astrouxds/rux-global-status-bar](https://www.npmjs.com/package/@astrouxds/rux-global-status-bar) | [Docs](./src/components/rux-global-status-bar/README.md) | [Gudielines](https://astrouxds.com/ui-components/global-status-bar)   |
| `Icons`               | `4.0`         | Icons in Astro 4 are a breaking change                             | [@astrouxds/rux-icon](https://www.npmjs.com/package/@astrouxds/rux-icon)                           | [Docs](./src/components/rux-icon/README.md)              | [Gudielines](https://astrouxds.com/ui-components/icons-and-symbols)   |
| `Input Field`         | `not planned` | Use standard style sheets to define style                          | n/a                                                                                                |                                                          | [Gudielines](https://astrouxds.com/ui-components/input-field)         |
| `Links`               | `not planned` |                                                                    | n/a                                                                                                |                                                          | [Gudielines](https://astrouxds.com/ui-components/link)               |
| `Log`                 | `4.0`         |                                                                    | [@astrouxds/rux-log](https://www.npmjs.com/package/@astrouxds/rux-log)                             | [Docs](./src/components/rux-log/README.md)               | [Gudielines](https://astrouxds.com/ui-components/log)                 |
| `Notification Banner` | `4.0`         |                                                                    | [@astrouxds/rux-notification](https://www.npmjs.com/package/@astrouxds/rux-notification)           | [Docs](./src/components/rux-notification/README.md)              | [Gudielines](https://astrouxds.com/ui-components/notification-banner) |
| `Pagination`          | `not planned` | Angular component is deprecated. Refer to Astro styles             | n/a                                                                                                |                                                          | [Gudielines](https://astrouxds.com/ui-components/pagination)          |
| `Pop Ups`             | `4.0`         |                                                                    | [@astrouxds/rux-pop-up-menu](https://www.npmjs.com/package/@astrouxds/rux-pop-up-menu)             | [Docs](./src/components/rux-pop-up-menu/README.md)       | [Gudielines](https://astrouxds.com/ui-components/pop-up)              |
| `Progress`            | `4.0`         |                                                                    | [@astrouxds/rux-progress](https://www.npmjs.com/package/@astrouxds/rux-progress)                   | [Docs](./src/components/rux-progress/README.md)          | [Gudielines](https://astrouxds.com/ui-components/progress)            |
| `Radio Button`        | `not planned` | Use standard style sheets to define style                          | n/a                                                                                                |                                                          | [Gudielines](https://astrouxds.com/ui-components/radio-button)        |
| `Search`              | `not planned` | Use standard style sheets to define style                          | n/a                                                                                                |                                                          | [Gudielines](https://astrouxds.com/ui-components/search)              |
| `Segmented Button`    | `4.0`         |                                                                    | [@astrouxds/rux-segmented-button](https://www.npmjs.com/package/@astrouxds/rux-segmented-button)   | [Docs](./src/components/rux-segmented-button/README.md)  | [Gudielines](https://astrouxds.com/ui-components/segmented-button)    |
| `Slider`              | `4.0`         |                                                                    | [@astrouxds/rux-slider](https://www.npmjs.com/package/@astrouxds/rux-slider)                       | [Docs](./src/components/rux-slider/README.md)            | [Gudielines](https://astrouxds.com/ui-components/slider)              |
| `Spectrum Analyzer`   | `3.0`         | Spectrum Analyzer has not been updated to Astro 4                  | n/a                                                                                                |  | [Gudielines](https://astrouxds.com/ui-components/spectrum-analyzer)   |
| `Status Symbol`       | `4.0`         | Astro 4 introduces a new status component. It is a breaking change | [@astrouxds/rux-status](https://www.npmjs.com/package/@astrouxds/rux-status)                       | [Docs](./src/components/rux-status/README.md)            | [Gudielines](https://astrouxds.com/ui-components/status-symbol)       |
| `Table`               | `not started` | No start until 2019                                                | n/a                                                                                                |                                                          | [Gudielines](https://astrouxds.com/ui-components/table)               |
| `Tabs`                | `4.0`         | Tabs are main navigation tabs. Internal tab interfaces coming 2019 | [@astrouxds/rux-tabs](https://www.npmjs.com/package/@astrouxds/rux-tabs)                           | [Docs](./src/components/rux-tabs/README.md)              | [Gudielines](https://astrouxds.com/ui-components/tabs)                |
| `Timeline`            | `in progress` |                                                                    | [@astrouxds/rux-timeline](https://www.npmjs.com/package/@astrouxds/rux-timeline)                   |           | [Gudielines](https://astrouxds.com/ui-components/timeline)            |
| `Toggle`              | `4.0`         |                                                                    | [@astrouxds/rux-toggle](https://www.npmjs.com/package/@astrouxds/rux-toggle)                       | [Docs](./src/components/rux-toggle/README.md)            | [Gudielines](https://astrouxds.com/ui-components/toggle)              |
| `Tree`                | `4.0`         |                                                                    | [@astrouxds/rux-tree](https://www.npmjs.com/package/@astrouxds/rux-tree)                           | [Docs](./src/components/rux-tree/README.md)            | [Gudielines](https://astrouxds.com/ui-components/tree)                |
