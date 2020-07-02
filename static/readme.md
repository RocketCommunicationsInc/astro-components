# Astro UXDS Static Assets

## Installation
Install the Astro UXDS Static Assets

```npm i @astrouxds/rux-static ```


## Usage
Importing CSS into your build
	
	`import '@astrouxds/rux-static';` default imports `css/astro.core.min.css`

Optional Imports

	`import '@astrouxds/rux-static/css/astro.css';` 

	`import '@astrouxds/rux-static/css/astro.core.css';`

	`import '@astrouxds/rux-static/css/astro.min.css';` 

Use relative Path
   
   ```<link href="./node_modules/@astrouxds/rux-static/css/astro.core.css>```


## Asset Directory Structure
```
|--css
	|-astro.core.css
	|- astro.core.min.css
	|- astro.css
	|- astro.min.css
|-icons
	|- astro.svg
	|- custom.svg
	|- status.dark.png
	|- status.light.png
|-img
	|- astro-logo-small-dark.svg
	|- astro-logo-small-light.svg
```


### NPM Package Page
   - [@astrouxds/rux-static](https://www.npmjs.com/package/@astrouxds/rux-static)