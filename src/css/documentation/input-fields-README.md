# Input Fields

Input Fields allow users to enter text or numeric data.

### Rules of Thumb

- Stacked Input Fields are left justified to one another.
- Use consistent spacing between stacked fields.
- Don't use text smaller than what is defined in the CSS. Text size within fields is critical to usability.

### Appearance and Behavior

An Input field is enabled if it is eligible for interaction, and focused if it is the current target for keystrokes.

Input Fields have a smaller variant which may be beneficial in layouts where space is at a premium.

## Guidelines

- [Astro UXDS: Input Fields](https://www.astrouxds.com/ui-components/input-field)
- [Astro UXDS: Form and Input Validation](https://www.astrouxds.com/ui-components/validation)

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in [Astro Styles repo](https://bitbucket.org/rocketcom/astro-styles/src/master/).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup using HTML5/CSS3

Wrap an input field and its associated label in an element with the `rux-form-field` class, ensuring the `for` and `id` attribute values match:

```xml
<div class="rux-form-field">
  <label for="input__text">Text Input Label</label>
  <input id="input__text" class="rux-input" type="text" required placeholder="Text Input">
</div>
```

Apply the class `rux-form-field--small` to style the input element and label smaller for space-limited situations.

```xml
<div class="rux-form-field rux-form-field--small">
  <label for="input__text">Smaller Text Input Label</label>
  <input id="input__text" class="rux-input" type="text" required placeholder="Text Input">
</div>
```

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)

### HTML5 Coverage

Astro-styled input fields are available for these HTML5 input element types and properties:

- Required (attribute)
- Disabled (attribute)
- Invalid (attribute)
- Text inputs (`type="text"`)
- Password inputs (`type="password"`)
- URL inputs (`type="url"`)
- Email inputs (`type="email"`)
- Telephone inputs (`type="tel"`)
- Search inputs (`type="search"`)
- Number-only inputs (`type="number"`)
- Textarea elements

Other [HTML input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) have not been styled for Astro yet, and [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Browser_compatibility) for these is varied.
