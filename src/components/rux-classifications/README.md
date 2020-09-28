# Classification Markings

Classification and control markings are required for digital products created for government clients who interact with classified or controlled information.

## Guidelines

- [Astro UXDS: Classification Markings](https://www.astrouxds.com/components/readme/)


## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Classification Markings package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-classification
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Classification Markings Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxClassification } from '@astrouxds/rux-classifications/rux-classification.js';
```

### 3. Render the Classification Markings Component

Pass properties as attributes of the Astro Classification custom element:

```javascript
<rux-classification-marking classification="controlled" type="banner" label=""></rux-classification-marking>
```

| Property       	| Type   	| Default  	| Required 	| Description 	|
|----------------	|--------	|----------	|----------	|-------------	|
| Classification 	| String 	| `'unclassified'`         	| Yes      	| This property            	|
| Type           	| String 	| `'banner'` 	| Yes      	| This property determines marking type `banner` or `tag`            	|
| Label         	| String 	| `''` 	| No      	| This property allows additional text labels to be added to the a marking           	|



#### Marking Type Declaration
 Apply the ```type``` property attribute to set the marking type. The `type` attribute property accepts two attribute values for marking generation. 1) `banner` generates a banner marking and 2) `tag` generates a tag marking. The ```type``` attribute property value is not case sensitive.

##### Marking Banner
```javascript
	<rux-classification-marking classification="controlled"
		type="banner"	
	></rux-classification-marking>
```

##### Marking Tag
```javascript
	<rux-classification-marking classification="controlled"
		type="tag"		
	></rux-classification-marking>
```

#### Custom Marking Labels
Applying the `label` property attribute to the Classification custom element adds `label` text value to the marking in addition to its classification text.

```javascript
	<rux-classification-marking classification="controlled" type="banner"
			label="//SCI"
	></rux-classification-marking>

```