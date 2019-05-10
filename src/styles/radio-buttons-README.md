# Radio Buttons

Radio Buttons allow users to mutually select an option from a predefined set of options. When one selection is made, the previous selection becomes deselected. One option should always be selected.

### Rules of Thumb
- Use Radio Buttons for mutually exclusive choices. If user can make more than one choice, use [Checkboxes](https://www.astrouxds.com/ui-components/checkbox).
- Radio Buttons appear in groups of two or more.
- One option should always be selected.
- Use Radio Buttons when two to six choices are available. If displaying more than six items, consider using a [Drop Down Menu](https://www.astrouxds.com/ui-components/drop-down).
- Don’t use a Radio Button to initiate an action.
- Lay out lists of Radio Buttons vertically with one choice per line.
- Accurately label a group of Radio Buttons to describe the choices.
- Give each Radio Button a text label that describes the choice it represents.
- If you use more than one word in a text label, be sure to use title-style capitalization.

**If a user is required to make a choice between items without a default, consider a [Drop Down Menu](https://www.astrouxds.com/ui-components/drop-down).**


## Guidelines

* [Astro UXDS: Radio Buttons](https://www.astrouxds.com/ui-components/radio-button)
* [Astro UXDS: Form and Input Validation](https://www.astrouxds.com/ui-components/validation)


## Basic HTML Usage
### 1. Include the Astro UXDS CSS file
Latest release is available in [Astro Styles repo](https://bitbucket.org/rocketcom/astro-styles/src/master/). 

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```
### 2. Markup using HTML5/CSS3
Wrap an input field and its associated label in an element with the `rux-radio-button` class, ensuring the `for` and `id` attribute values match:

```xml
<div class="rux-radio-button">
  <input type="radio" name="radio1c" id="radio1c">
  <label for="radio1c">Radio Button</label>
</div>
```

For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://bitbucket.org/rocketcom/astro-styles)
