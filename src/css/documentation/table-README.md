# Table (HTML only)

Tables display tabular data in two dimensions.

## Guidelines

- [Astro UXDS: Table Pattern](https://www.astrouxds.com/patterns/table/)

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in the [static css directory](https://github.com/RocketCommunicationsInc/astro-components/tree/master/static/css).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes

Astro CSS classes follow the [BEM-style](http://getbem.com/introduction/) naming convention. 

List data within the `rux-table` class.

```xml
<table class="rux-table">
  <tr>
    <td>Cell 1A</td>
    <td>Cell 2A</td>
  </tr>
    <tr>
    <td>Cell 1B</td>
    <td>Cell 2B</td>
  </tr>
</table>
```

Add a data attribute to indicate selected rows, and define column header cells using the`rux-table__column-head` class and the `th` elements:

```xml
<table class="rux-table">
  <tr class="rux-table__column-head"> 
    <th>Column A</th>
    <th>Column B</th>
  </tr>
  <tr data-selected>
    <td>Cell 1A</td>
    <td>Cell 2A</td>
  </tr>
    <tr>
    <td>Cell 1B</td>
    <td>Cell 2B</td>
  </tr>
</table>
```
### Attributes
| Attribute | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `data-selected` | Boolean | `false` | No | Changes the background color of the row. Can be applied to multiple rows at once. |


For more information about AstroUXDS usage outside of a Web Component environment, please see [Astro UXDS Stylesheets](https://www.astrouxds.com/components/readme/#getting-started-with-html-%26-css)
