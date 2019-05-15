# Checkboxes

A Checkbox describes a state or value that can be either “On or Off.” Checkboxes are not mutually exclusive. More than one Checkbox may be checked at the same time.

### Rules of Thumb
- Use Checkboxes when there is a list of options from which the user may select any number of choices.
- In a list, each Checkbox is independent of all other Checkboxes.
- When asking the user to make a mutually exclusive choice, use a [Radio Buttons](https://www.astrouxds.com/ui-components/radio-button), not a Checkbox.
- Group Checkboxes whenever possible.

**Don’t use a Checkbox to initiate an action. Instead, use a [Button](https://www.astrouxds.com/ui-components/button) or a [Toggle](https://www.astrouxds.com/ui-components/toggle).**


## Guidelines

* [Astro UXDS: Checkboxes](https://www.astrouxds.com/ui-components/checkbox)
* [Astro UXDS: Form and Input Validation](https://www.astrouxds.com/ui-components/validation)


## Basic HTML Usage
### 1. Include the Astro UXDS CSS file
Latest release is available in [Astro Styles repo](https://bitbucket.org/rocketcom/astro-styles/src/master/). 

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```
### 2. Markup using HTML5/CSS3
Wrap an input field and its associated label in an element with the `rux-checkbox` class, ensuring the `for` and `id` attribute values match:

```xml
<div class="rux-checkbox">
  <input type="checkbox" name="checkbox1c" id="checkbox1c">
  <label for="checkbox1c">Checkbox</label>
</div>
```

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)
