# Progress

A visual indicator of a tasks progress. When indicating progress with a finite duration use determinate progress. When indicating progress with an indefinite duration use indeterminate progress.

- [Astro UXDS: Progress](https://astrouxds.com/ui-components/progress)

## Web Components Usage

### 1. Installation

#### ** Install the Astro RUX Progress package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-progress
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)

### 2. Import the RUX Progress Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxProgress } from '@astro-components/rux-progress/rux-progress.js';
```

### 3. Render the RUX Progress Web Component

Indeterminate progress

```xml
<rux-progress></rux-progress>
```

Determinate progress

```xml
<rux-progress value="50" max="150" label></rux-progress>
```

### Properties

| Property | Type    | Default | Required | Description                                                                                                                                  |
| -------- | ------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`  | Number  | -       | no       | Value of the progress bar. Note: if this paramater isn’t present or if it is set to 0 the progress bar will display its indeterminate state. |
| `max`    | Number  | 100     | no       | Allows for progress bars with ranges greater than 100.                                                                                       |
| `label`  | Boolean | false   | no       | Displays a text based representation of progress as a percentage. Progress values should be between 1 and 100.                               |

## Basic HTML Usage
Progress styling is also included in the standard Astro CSS library for use in projects that don’t support Web Components.

### 1. Include the Astro UXDS CSS file

Latest release is available in [Astro Styles repo](https://bitbucket.org/rocketcom/astro-styles/src/master/).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup using HTML5/CSS3

Determinate progress

```xml
<div class="rux-progress">
 <progress value="50"></progress>
 <output class="rux-progress__value">50</output>
</div>
```

Indeterminate progress

```xml
<div class="rux-progress">
 <progress></progress>
</div>
```

## Attributes

| Property | Type   | Default | Required | Description                                            |
| -------- | ------ | ------- | -------- | ------------------------------------------------------ |
| `value`  | Number | -       | yes      | Current progress                                       |
| `max`    | Number | 100     | no       | Allows for progress bars with ranges greater than 100. |

## Revision History

##### **4.1**

- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.

##### 2.0 Notes

- Updated indeterminate progress to use animated SVG and the :indeterminate pseudo class

##### 1.4 Notes

- Added rux* and BEM compatible classes to all satcom* NOTE: satcom\_ will be removed in a future version
- In addition to rux\_ added the correct spelling of indeterminate as an additional selector
- Combined indeterminate and determinate progress styles
- Made container a flex element
- Made percentage readout have an appropriate margin (NOTE: without a text rep the progress bar will scale to full width. Flexbox is neat.
- Fixed alignment issue in Safari/Chrome where the progress bar was 2-3 pixels too low
- Fixed width (on Chrome/Safari) of 100% width progress bar expanding past the border of the track
- Removed prefixed animation. Safari 8 was the last browser that required it
- [REMOVED] Embeded SVG graphics embeded SVG graphic stopped working

```

```
