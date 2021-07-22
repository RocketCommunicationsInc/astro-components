# Radio Buttons

Radio Buttons allow users to mutually select an option from a predefined set of options. When one selection is made, the previous selection becomes deselected. One option should always be selected.

## Guidelines

-   [Astro UXDS: Radio Buttons](https://www.astrouxds.com/ui-components/radio-button)
-   [Astro UXDS: Toggles](http://www.astrouxds.com/ui-components/toggle)
-   [Astro UXDS: Form and Input Validation](https://www.astrouxds.com/ui-components/validation)

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in the [static css directory](https://github.com/RocketCommunicationsInc/astro-components/tree/master/static/css).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes

Astro CSS classes follow the [BEM-style](http://getbem.com/introduction/) naming convention.

Wrap an input field and its associated label in an element with the `rux-radio-button` class, ensuring the `for` and `id` attribute values match:

```xml
<div class="rux-radio-button">
  <input type="radio" name="radio1c" id="radio1c">
  <label for="radio1c">Radio button</label>
</div>
```

### Attributes

| Attribute  | Type    | Default | Required | Description                                                                                                                                                                                 |
| ---------- | ------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | Boolean | `false` | No       | Disables the button via HTML `disabled` attribute. Button takes on a distinct visual state. Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored. |
| `selected` | Boolean | —       | No       | If present on the `<input>` element, selects this segment rather than the first radio input element in the group.                                                                           |
| `required` | Boolean | `false` | No       | Follows native form element `required` behavior, preventing submission of the form until a valid value has been entered.                                                                    |

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://www.astrouxds.com/components/readme/#getting-started-with-html-%26-css)
