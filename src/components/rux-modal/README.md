# Dialog Box
A Dialog Box interrupts app processing to prompt a user to confirm an action or acknowledge a piece of information. It displays information along with a set of buttons allowing users to “Accept or Cancel” the actions presented within the Dialog Box.

## Rules of Thumb
Use a Dialog Box to:

- Ask users to confirm irreversible, destructive or expensive actions.
- Notify the user of an urgent event.
- Use buttons within a Dialog Box to confirm or cancel actions. Avoid using links or other components.
- Use clearly titled action buttons to exit a Dialog Box. Don’t use a “close box.”
- Title buttons by choosing a verb that describes its action.
- Use Dialog Boxes sparingly as they interrupt critical workflow.
- Dialog Box text should be clearly written, brief and actionable.

##Guidelines

* [Astro UXDS: Dialog Box](https://astrouxds.com/ui-components/dialog-box)


## Web Components Usage

### 1. Installation
#### ** Install the Astro RUX Dialog package via Command Line** (Preferred Method)

The name of the package reflects its earlier history as Rux Modal.

```sh
npm i --save @astrouxds/rux-modal
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.


#### **Alternatively**, download the [Astro Component Library](https://bitbucket.org/rocketcom/astro-components/src/master/) source to your project.
Via CLI: 

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download Astro Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)


### 2. Import the RUX Dialog Box Web Component
This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxModal } from "@astro-components/rux-modal/rux-modal.js";
```

### 3. Render the RUX Dialog Box Web Component
At a minimum, RUX Dialog Box requires a message. In this instance, a single button labeled "Cancel" will be automatically rendered.

```xml
<rux-modal message="This is a message"></rux-modal>
```
4
RUX Modal supports customizing the Message, Title, Confirm/Deny button label strings as well as a custom Rux icon to display next to the message and a custom event name to listen for outside the component.

```xml
<rux-modal
  title="Modal title"
  message="Modal message"
  confirm-text="Ok"
  deny-text="Cancel"
  icon="default:settings"
  custom-event="listen-for-me">
</rux-modal>
```

###Event Listener
RUX Modal will emit a message using `modal-event` event and a detail message of `confirm` with a value of either `true` (confirm) or `false` (deny) depending on whether the user clicks the confirm or deny button.

###Properties

| Property       | Type     | Default | Required | Description |
| -------------- | -------- | ------- |- ------- | ----------- |
| `message`      | String | `''` | **Yes** | Message for the dialog box. |
| `title`        | String | `''` |  No | Title for the dialog box. |
| `confirm-text` | String | `''` | No | Will display a confirmation button with the supplied text. If both `confirm-text` and `deny-text` parameters are set, the confirm button will be solid and the deny button will have a secondary outline applied. If neither `confirm-text` or `deny-text` parameters are set, a deny button labeled "Cancel" will be provided to the user to dismiss the dialog and emit the close event.|
| `deny-text`    | String | `''` |  No | Will display a deny button with the provided text. If both `confirm-text` and `deny-text` parameters are set, the confirm button will be solid and the deny button will have a secondary outline applied. If neither `confirm-text` or `deny-text` parameters are set, a deny button labeled "Cancel" will be provided to the user to dismiss the dialog and emit the close event. |
| `icon`         | String | `'default:caution'` |  No | custom icon for the dialog. Defines the icon to be used. Adheres to the RUX Icon convention of `'namespace:icon-name'` See [Astro UXDS: Icons](https://astrouxds.com/ui-components/icons-and-symbols) for full list of possible icons. |
| `custom-event` | String |  `'modal-event'` |  No | Override the default event message with a custom event. Useful if you have more than one dialog. Note: Dialogs can be dynamically set, consider using a single instance of `rux-modal` assigning values via an object rather than creating multiple instances of `rux-modal`. |



## Revision History
##### **4.1**
- Added `title` property
- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.


##### **Notes**
RUX Dialog Box is based on the industry standard [WebComponents v1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html).

**Note:** RUX Dialog Box is available as a preview release and should not be used in production code.



