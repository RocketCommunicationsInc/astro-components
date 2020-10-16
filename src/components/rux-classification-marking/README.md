# Classification Markings

Classification and control markings are required for digital products created for government clients who interact with classified or controlled information.

For the most up-to-date policies, see the [ISOO Training Aids](https://www.archives.gov/isoo/training/training-aids) for classification marking policies and the [CUI Registry](https://www.archives.gov/cui) for control marking policies. In addition to these requirements, each government agency may have their own rules to use for classification and control markings.


## Guidelines

- [Astro UXDS: Classification Markings](https://www.astrouxds.com/components/readme/)


## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Classification Markings package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-classification-marking
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
import { RuxClassification } from '@astrouxds/rux-classification-marking/rux-classification-marking.js';
```

### 3. Render the Classification Markings Component

Pass properties as attributes of the Astro Classification custom element:

```javascript
<rux-classification-marking classification="controlled" label=""></rux-classification-marking>
```

| Property       	| Type   	| Default  	| Required 	| Description 	|
|----------------	|--------	|----------	|----------	|-------------	|
| Classification 	| String 	| `'unclassified'`         	| Yes      	| This property            	|
| Tag          	| Boolean 	| `false` 	| No      	| This property defines the marking as a`tag` rather than the default banner            	|
| Label         	| String 	| `null` 	| No      	| This property allows additional text labels to be added to the a marking           	|


#### Marking Type Declaration
 By default classification markings rendered in banner format. Applying the ```tag``` property attribute sets the marking type. The `tag` attribute property defines the classification marking as a tag.

##### Banner Marking Type
```javascript
	<rux-classification-marking classification="controlled"></rux-classification-marking>
```

##### Tag Marking Type
```javascript
	<rux-classification-marking classification="controlled" tag></rux-classification-marking>
```

#### Custom Marking Labels
Applying the `label` property attribute to the classification custom element adds `label` text value to the marking in addition to its classification text.

```javascript
	<rux-classification-marking classification="controlled" label="//custom/label"></rux-classification-marking>
```