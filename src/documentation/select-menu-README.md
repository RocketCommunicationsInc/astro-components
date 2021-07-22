# Select Menu

Select Menus allow users to select a value from a list of values.

## Guidelines

-   [Astro UXDS: Select](https://www.astrouxds.com/ui-components/select)
-   [Astro UXDS: Form and Input Validation](https://www.astrouxds.com/ui-components/validation)

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in the [static css directory](https://github.com/RocketCommunicationsInc/astro-components/tree/master/static/css).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes

Astro CSS classes follow the [BEM-style](http://getbem.com/introduction/) naming convention.

List select choices as Option elements within a Select menu with the `rux-select` class.

```xml
<select class="rux-select">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
  <option>Option 4</option>
</select>
```

Add native HTML form attributes like `disabled` or `required` , or wrap options in an `optgroup` element to group them within the select.

```xml
<select class="rux-select" disabled>
  <optgroup label="Group one">
    <option>Option 1.1</option>
    <option>Option 1.2</option>
    <option>Option 1.3</option>
    <option>Option 1.4</option>
  </optgroup>
  <optgroup label="Group two">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
    <option>Option 2.3</option>
    <option>Option 2.4</option>
  </optgroup>
</select>
```

### Attributes

| Attribute  | Type    | Default | Required | Description                                                                                                                                                                                 |
| ---------- | ------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | Boolean | `false` | No       | Disables the button via HTML `disabled` attribute. Button takes on a distinct visual state. Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored. |
| `required` | Boolean | `false` | No       | Follows native form element `required` behavior, preventing submission of the form until a valid value has been entered.                                                                    |

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://www.astrouxds.com/components/readme/#getting-started-with-html-%26-css)
