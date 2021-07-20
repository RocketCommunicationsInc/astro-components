# Checkboxes

A Checkbox describes a state or value that can be either “On or Off.” Checkboxes are not mutually exclusive. More than one Checkbox may be checked at the same time.

## Guidelines

-   [Astro UXDS: Checkboxes](https://www.astrouxds.com/ui-components/checkbox)
-   [Astro UXDS: Form and Input Validation](https://www.astrouxds.com/ui-components/validation)

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in the [static css directory](https://github.com/RocketCommunicationsInc/astro-components/tree/master/static/css).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes

Astro CSS classes follow the [BEM-style](http://getbem.com/introduction/) naming convention.

Wrap an input field and its associated label in an element with the `rux-checkbox` class, ensuring the `for` and `id` attribute values match:

```xml
<div class="rux-checkbox">
  <input type="checkbox" name="checkbox1c" id="checkbox1c">
  <label for="checkbox1c">Checkbox</label>
</div>
```

### Attributes

| Attribute  | Type    | Default | Required | Description                                                                                                                                                                                 |
| ---------- | ------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | Boolean | `false` | No       | Disables the button via HTML `disabled` attribute. Button takes on a distinct visual state. Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored. |
| `checked`  | Boolean | `false` | No       | Checks the button via HTML `checked` attribute. Button takes on a distinct "enabled" or "selected" visual state.                                                                            |
| `required` | Boolean | `false` | No       | Follows native form element `required` behavior, preventing submission of the form until a valid value has been entered.                                                                    |

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://www.astrouxds.com/components/readme/#getting-started-with-html-%26-css)
