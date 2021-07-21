# Progress

A visual indicator of a tasks progress. When indicating progress with a finite duration, use determinate progress. When indicating progress with an indefinite duration, use indeterminate progress.

-   [Astro UXDS: Progress](https://astrouxds.com/ui-components/progress)

## Web Components Usage

### 1. Installation

#### Install the Astro RUX Progress package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-progress
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro Component Library](https://github.com/RocketCommunicationsInc/astro-components/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download Astro Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Astro Template Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxProgress } from '@astrouxds/rux-progress/rux-progress.js'
```

### 3. Render the Astro Template Web Component

Indeterminate progress

```xml
<rux-progress></rux-progress>
```

Determinate progress

```xml
<rux-progress value="50" max="150" label></rux-progress>
```

### Properties

| Property    | Type    | Default | Required | Description                                                                                                                                                                                         |
| ----------- | ------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`     | Number  | ``      | no       | Displays current progress value between 1 and 100 (or the max, if defined below). Note: if this paramater isn’t present or if it is set to 0 the progress bar will display its indeterminate state. |
| `max`       | Number  | `100`   | no       | For use with progress bars that have maximum value greater or less than 100.                                                                                                                        |
| `hideLabel` | Boolean | `false` | no       | Displays text output of progress as a percentage. Note: when using a max value other than 100 output is displated as value/max (e.g., 1450/2000)                                                    |

## Basic HTML Usage

For projects where Web Components are not a viable option use the Astro CSS and standard [HTML Progress Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) to create an Astro styled progress bar.

### 1. Include the Astro UXDS CSS file

Latest release is available in the [static css directory](https://github.com/RocketCommunicationsInc/astro-components/tree/master/static/css).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes

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

| Property | Type   | Default | Required | Description                                                                                                                                                                                |
| -------- | ------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`  | Number | ``      | yes      | Current progress value between 1 and 100 (or the max, if defined below). Note: if this paramater isn’t present or if it is set to 0 the progress bar will display its indeterminate state. |
| `max`    | Number | `100`   | no       | For progress bars where progress bars have a maximum value greater or less than 100                                                                                                        |

## Revision History

##### **4.0.2**

-   fixed broken property `hideLabel`

##### **4.0**

-   Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.

##### 2.0 Notes

-   Updated indeterminate progress to use animated SVG and the :indeterminate pseudo class

##### 1.4 Notes

-   Added rux* and BEM compatible classes to all satcom* NOTE: satcom\_ will be removed in a future version
-   In addition to rux\_ added the correct spelling of indeterminate as an additional selector
-   Combined indeterminate and determinate progress styles
-   Made container a flex element
-   Made percentage readout have an appropriate margin (NOTE: without a text rep the progress bar will scale to full width. Flexbox is neat.
-   Fixed alignment issue in Safari/Chrome where the progress bar was 2-3 pixels too low
-   Fixed width (on Chrome/Safari) of 100% width progress bar expanding past the border of the track
-   Removed prefixed animation. Safari 8 was the last browser that required it
-   Removed Embeded SVG graphics embeded SVG graphic stopped working
