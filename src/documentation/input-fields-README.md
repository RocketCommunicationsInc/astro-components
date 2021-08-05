# Input Fields

Input Fields allow users to enter text or numeric data.

## Guidelines

-   [Astro UXDS: Input Fields](https://www.astrouxds.com/ui-components/input-field)
-   [Astro UXDS: Forms and Validation](https://www.astrouxds.com/patterns/forms-and-validation/)

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in the [static css directory](https://github.com/RocketCommunicationsInc/astro-components/tree/master/static/css).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes

Astro CSS classes follow the [BEM-style](http://getbem.com/introduction/) naming convention.

Wrap an input field and its associated label in an element with the `rux-form-field` class, ensuring the `for` and `id` attribute values match:

```xml
<div class="rux-form-field">
  <input id="input__text" class="rux-input" type="text" required placeholder="Text input">
  <label for="input__text">Text input label</label>
</div>
```

Apply the class `rux-form-field--small` to style the input element and label smaller for space-limited situations.

```xml
<div class="rux-form-field rux-form-field--small">
  <input id="input__text" class="rux-input" type="text" required placeholder="Text input">
  <label for="input__text">Smaller text input label</label>
</div>
```

Apply the class `.rux-help-text` to help or explanation text.

```xml
<div class="rux-form-field">
  <input id="input__text" class="rux-input" type="text" required placeholder="Text input">
  <label for="input__text">Text input label</label>
  <span class="rux-help-text">Help text</span>
</div>
```

### Attributes

| Attribute  | Type    | Default | Required | Description                                                                                                                                                                                 |
| ---------- | ------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | Boolean | `false` | No       | Disables the button via HTML `disabled` attribute. Button takes on a distinct visual state. Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored. |
| `required` | Boolean | `false` | No       | Follows native form element `required` behavior, preventing submission of the form until a valid value has been entered.                                                                    |

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://www.astrouxds.com/components/readme/#getting-started-with-html-%26-css)

### HTML5 Coverage

Astro-styled input fields are available for these HTML5 input element types and properties:

-   Required (attribute)
-   Disabled (attribute)
-   Invalid (attribute)
-   Text inputs (`type="text"`)
-   Password inputs (`type="password"`)
-   URL inputs (`type="url"`)
-   Email inputs (`type="email"`)
-   Telephone inputs (`type="tel"`)
-   Search inputs (`type="search"`)
-   Number-only inputs (`type="number"`)
-   Textarea elements

Other [HTML input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) have not been styled for Astro yet, and [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Browser_compatibility) for these is varied.
