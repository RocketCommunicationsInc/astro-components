# Astro Web Component v1 Library (Preview Release)

### NOT PRODUCTION CODE

The Astro Web Component v1 Library is provided as a preview release. It should not be used in production code.

Starting with Astro 2.0 Rocket will be transitioning the Astro Component Library to Web Components v1. **IMPORTANT** Rocket will continue to maintain the original HTML/CSS library in parity with the Web Component Library. For current production use or for projects unable to use Web Components please see the [latest Astro UXDS Stylesheet](https://bitbucket.org/rocketcom/astro-styles)

#### Benefits

- Style scope isolation, styles will exist as defined and cannot be overridden by other stylesheets
- Code is portable with self contained HTML/CSS/JS
- Eliminates future CSS class name changes
- Code is "generic" it follows a similar format to where popular frameworks like Angular and React are headed without being prescriptive. The code provided should be used as a sample not production
- All the major frameworks were built reflecting the ideas of WebComponents and/or influenced the Web Component v1
- Minimizes/eliminates the need for complicated CSS naming structures e.g., .rux-button-small\_\_light
- Web Components are a W3 standard, no vendor lock-in or decisions about which frameworks to use. Chrome and Safari support Web Components v1 without the need for polyfills. [Firefox added native support in r63 released 2018-10-27](https://wiki.mozilla.org/Release_Management/Calendar) and Microsoft has committed to supporting the standard in a future version of Edge. **Note**: IE11+ support Web Components via polyfills, but does require some additional work

### Why Web Components?

There are several reasons. When SATCOM components were initially created they were specific to the SATCOM domain. The scope of use has expanded to include other domains in space, changing to Astro allows us to create a more agnostic set of components for use across a wider spectrum of space systems. Additionally the initial components were created very specifically as framework agnostic which limited the demonstrated versions to pure HTML/CSS implementations, we want to provide more practical demonstrations that can be used across a wide variety of frameworks, WebComponents v1 provide us with that opportunity to deliver functional examples that can be incorporated in a variety of frameworks (Angular 2+, React, Ember) or simply used as a more relevant example of implementing Astro Guidelines in a modern framework.

## Download and Install for Development

The directions below assume basic knowledge of NodeJS and Gulp. Make sure you have installed both globally before continuing.

Clone this repository

```
git clone git@bitbucket.org:rocketcom/astro-components.git
```

Install the Polymer CLI

```
npm i -g polymer-cli
```

Install NPM modules for this project

```
npm i
```

Build and hsot the site locally

```
polymer serve
```

Visit the site locally, the polymer CLI process will notify you of the correct URL, but you can typically view the site in your browser at **http://127.0.0.1:8081/**

## Documentation

| Component             | Status        | Notes                                                              | Documentation                                      |
| --------------------- | ------------- | ------------------------------------------------------------------ | -------------------------------------------------- |
| `Accordion`           | `not started` | Planned 2019                                                       |                                                    |
| `Buttons`             | `preview`     |                                                                    | [Docs](./packages/rux-button/README.md)            |
| `Checkbox`            | `not planned` | Use standard style sheets to define style                          |                                                    |
| `Clock`               | `preview`     |                                                                    | [Docs](./packages/rux-clock/README.md)             |
| `Modal Window`        | `preview`     |                                                                    | [Docs](./packages/rux-modal/README.md)             |
| `Drop Downs`          | `not planned` | Use standard style sheets to define style                          |                                                    |
| `Global Status Bar`   | `preview`     |                                                                    | [Docs](./packages/rux-global-status-bar/README.md) |
| `Icons`               | `preview`     |                                                                    | [Docs](./packages/rux-icon/README.md)              |
| `Input Field`         | `not planned` | Use standard style sheets to define style                          |                                                    |
| `Links`               | `not planned` |                                                                    |                                                    |
| `Log`                 | `preview`     |                                                                    | [Docs](./packages/rux-log/README.md)               |
| `Notification Banner` | `preview`     |                                                                    | [Docs](./packages/rux-icon/README.md)              |
| `Pagination`          | `not planned` |                                                                    |                                                    |
| `Pop Ups`             | `incomplete`  |                                                                    | [Docs](./packages/rux-pop-up-menu/README.md)       |
| `Progress`            | `preview`     |                                                                    | [Docs](./packages/rux-progress/README.md)          |
| `Radio Button`        | `not planned` | Use standard style sheets to define style                          |                                                    |
| `Search`              | `not planned` | Use standard style sheets to define style                          |                                                    |
| `Segmented Button`    | `preview`     |                                                                    | [Docs](./packages/rux-segmented-button/README.md)  |
| `Slider`              | `preview`     |                                                                    | [Docs](./packages/rux-slider/README.md)            |
| `Spectrum Analyzer`   | `preview`     |                                                                    | [Docs](./packages/rux-spectrum-analyzer/README.md) |
| `Status Symbol`       | `preview`     |                                                                    | [Docs](./packages/rux-status/README.md)            |
| `Table`               | `not started` | No start until 2019                                                |                                                    |
| `Tabs`                | `preview`     | Tabs are main navigation tabs. Internal tab interfaces coming 2019 | [Docs](./packages/rux-tabs/README.md)              |
| `Timeline`            | `preview`     |                                                                    | [Docs](./packages/rux-timeline/README.md)          |
| `Toggle`              | `preview`     |                                                                    | [Docs](./packages/rux-toggle/README.md)            |
| `Tree`                | `preview`     |                                                                    | [Docs](./packages/rux-toggle/README.md)            |
