# Pop Up Menu

A Pop-Up Menu provides users with a quick way to access common actions for a highlighted item.

## Guidelines

-   [Astro UXDS: Pop Up Menu](http://www.astrouxds.com/library/pop-up-menu)

### 1. Installation

#### Install the Astro UXDS Pop Up Menu package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-pop-up-menu
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Pop Up Menu Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxPopUpMenu } from '@astrouxds/rux-pop-up-menu/rux-pop-up-menu.js'
```

### 3. Render the Astro Pop Up Menu Web Component

Pass properties as attributes of the Astro Pop Up Menu custom element:

```xml
<rux-pop-up-menu
 id="popup-menu-1"
 .onPopUpMenuItemSelected="${_onItemUpdated}"
 .onPopUpMenuExpandedChange="${_onMenuExpanded}"
 .data="${data}">
</rux-pop-up-menu>
```

Create a triggering element to initiate the pop up menu. **Note**: The trigger element _must_ have an `aria-controls` attribute with a value equal to the `id` of the `rux-pop-up-menu`.

```xml
<button
 aria-controls="popup-menu-1"
 aria-haspopup="true"
>Open pop up menu
</button>
```

Extending Astro Pop Up Menu with custom content. Any additional content that is passed into Astro Pop Up Menu will not be styled and will require cutom styling.

```xml
<rux-pop-up-menu id="popup-menu-7" .data="${data}">
  <div class="demo-slot">
      <a href="/sign-up">Sign Up</a>
      <rux-button @click="${login()}">Login</rux-button>
  </div>
</rux-pop-up-menu>
```

### Properties

| Property | Type   | Default | Required | Description                                                                                                                                          |
| -------- | ------ | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`     | String | `-`     | Yes      | A unique identifier to associate the pop up menu with a triggering element                                                                           |
| `data`   | Array  | `-`     | Yes      | An array of objects that defines the pop up menu’s labels. **Note:** when used in an Angular environment you may need to stringify the data property |

### Sample `data` Array

A sample of a `data` Array.

```json
[
  {
    "id": "item1",
    "label": "Item 1"
  },
  {
    "id": "item2",
    "label": "Item 2"
  },
  {
    "role": "separator"
  },
  {
    "id": "item3",
    "label": "Item 3"
  }
]
```

### `data` Array Item Properties

| Property | Type   | Default | Required | Description                                                                                           |
| -------- | ------ | ------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `id`     | String | `-`     | Yes      | A unique identifier. If not supplied the component will auto-generate and `id`                        |
| `label`  | String | `-`     | Yes      | The menu item’s label                                                                                 |
| `role`   | String | `-`     | No       | Add `"role": "separator"` property to an empty object to create a cosmetic separator line in the menu |

### Component Events

Pop Up Menu emits a `pop-up-menu-item-selected` event whenever a user clicks on an menu item. Events contain a composed path to the element that triggered the event and an object in the the `detail.selected` event property.

#### Sample Tree event

```javascript
window.addEventListener('pop-up-menu-item-selected', (e) => {
    console.log('Pop Up Menu Item Selected', e.detail.selected)
})
```

#### Event Properties

| Property   | Type   | Description                    |
| ---------- | ------ | ------------------------------ |
| `selected` | Object | The currently selected element |
