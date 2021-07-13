# Dialog Box

A Dialog Box interrupts the app experience to prompt a user to confirm an action or acknowledge a piece of information. It displays information along with a set of buttons allowing users to “Accept or Cancel” the actions presented within the Dialog Box.

## Guidelines

-   [Astro UXDS: Dialog Box](https://astrouxds.com/ui-components/dialog-box)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Dialog package via Command Line (Preferred Method)

The name of the package reflects its earlier history as Astro UXDS Modal.

```sh
npm i --save @astrouxds/rux-modal
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Dialog Box Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxModal } from '@astrouxds/rux-modal/rux-modal.js'
```

### 3. Render the Astro Dialog Box Web Component

At a minimum, Astro UXDS Dialog Box requires a message. In this instance, a single button labeled "Cancel" will be automatically rendered.

```xml
<rux-modal message="This is a message"></rux-modal>
```

Pass properties as attributes of the Astro Dialog Box custom element:

```xml
<rux-modal
  title="Modal title"
  message="Modal message"
  confirmText="Ok"
  denyText="Cancel"
  customEvent="listen-for-me">
</rux-modal>
```

### Properties

| Property      | Type   | Default | Required | Description                                                                                                                                                                                                                                                                                                                                                                     |
| ------------- | ------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message`     | String | `''`    | Yes      | Displays a text for the message area of the dialog box.                                                                                                                                                                                                                                                                                                                         |
| `title`       | String | `''`    | No       | Displays a title for the top of the dialog box.                                                                                                                                                                                                                                                                                                                                 |
| `confirmText` | String | `''`    | No       | Displays a confirmation button with the given text. If both `confirmText` and `denyText` parameters are set, the confirm button will have a solid style and the deny button will have a secondary style. If neither `confirmText` or `denyText` parameters are set, a deny button labeled "Cancel" will be provided to the user to dismiss the dialog and emit the close event. |
| `denyText`    | String | `''`    | No       | Displays a deny button with the given text. If both `confirmText` and `denyText` parameters are set, the confirm button will have a solid style and the deny button will have a secondary style. If neither `confirmText` or `denyText` parameters are set, a deny button labeled "Cancel" will be provided to the user to dismiss the dialog and emit the close event.         |

### Event Listener

When closed, the Dialog Box Web Component will emit a message using the `'modalClosed'` event name and a detail message of `confirm` with a value of `true` (confirm) or `false` (deny) depending on whether the user clicks the confirm or deny button.

## Revision History

##### **5.0**

-   Added `--modalTitleColor` color variable for Modal Title Color
-   Removed CSS Fallback properties

##### **4.1**

-   Removed mention of Icon component

##### **4.0**

-   Swapped kebab-cased `comfirm-text` and `deny-text` attributes for standard camelCase `confirmText` and `denyText`
-   Added `title` property
-   Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.
