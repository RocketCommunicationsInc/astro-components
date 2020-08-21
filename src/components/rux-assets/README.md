# Astro UXDS Static Assets

## Astro CSS
Astro CSS files are available depending on your project styling needs:

| Filename | Theme Vars & Fonts | Native Elements | Custom Elements |
| :-- | :--: | :--: | :--: |
| [astro.css](css/astro.css) | ✅ | ✅ | ✅ |
| [astro.core.css](css/astro.core.css)  | ✅ | ✅ |  |
| [astro.tokens.css](css/astro.tokens.css) | ✅ |  |  |

These CSS files are also offered in minified versions for production environments. You should use only one file; for most CSS-only users, we recommend **astro.css**. The **astro.tokens.css** file includes variables that inform the light and dark Astro themes, but does not include any direct element styles. The **tokens file is a peer dependency of Astro Web Component package's dependencies**, so you should only need to explicitly import the Astro CSS into your project if you aren't using the Astro Web Components.

### Importing Astro Static Assets Using NodeJS
If your build process uses NodeJS and related technologies, you can refer to the files in this package as you would any other `node_modules` dependency, provided you install the appropriate loaders.

#### 1. First, install the Astro Static Assets package from the CLI

```sh
npm install --save @astrouxds/rux-assets
```

#### 2. Then, import an Astro CSS file from the package
_See the above table for the css file that will best suit your needs._

Via JavaScript (recommended), to be bundled at runtime:

```js
import '@astrouxds/rux-assets/css/astro.css';
```

Or CSS, for :

```css
@import '~@astrouxds/rux-assets/astro.css';
```

The `~` resolves the path within the `node_modules` folder in [Webpack's css-loader](https://webpack.js.org/loaders/css-loader/#import) and [Parcel](https://parceljs.org/module_resolution.html#~-tilde-paths), but not with [Rollup](https://rollupjs.org/guide/en/#with-npm-packages).

Note: If you need to manually host the Astro font files, you should also import [astro.fonts.css](css/astro.fonts.css). See [Special Circumstances for Offline Use](#special-circumstances-for-offline-use) for more information on hosting your own fonts for an Astro app.


#### 3. Install and configure loaders 

If you're using [Webpack](https://webpack.js.org/guides/asset-management/), this basic example snippet demonstrates configuring loaders for an Astro favicon, Astro CSS, and Astro font files as well as defining a custom [outputPath](https://webpack.js.org/loaders/file-loader/#outputpath) for the favicon:

```js
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/'
            }
          }
        ]
      }
    ]
  }
}
```


### Astro Fonts
The Astro UXDS recommends the [Open Sans](https://fonts.google.com/specimen/Open+Sans) and [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) font families. These (and hundreds of other) fonts are provided free for commercial use by Google via a delivery mechanism that hosts [performant, browser-aware distributions](https://fonts.google.com/about) of those fonts to millions of websites. 

These CDN distributed fonts are loaded in Astro's CSS stylesheets automatically using the CSS [`@import` function](https://developer.mozilla.org/en-US/docs/Web/CSS/@import). For most situations, this is no-configuation-required approach is the preferred solution for defining fonts used in web applications. You should not need to download, install, or serve these font files either during development or publish, as long as the client maintains a public internet connection. If your application does require offline development or distribution, see [Special Circumstances for Offline Use](#special-circumstances-for-offline-use) below.

#### Special Circumstances for Offline Fonts

If your application environment prohibits on-demand access to public internet (or you cannot import externally hosted assets for other reasons), your development approach will include:
1. Downloading the font files
2. Serving these assets via your build process or hosting them somewhere on your internal network
3. Updating your application's CSS to refer to your local versions of such assets instead 

There are a number of ways to do this, and the ideal method will depend on other aspects of your application architecture. In short, you should ensure the font files are hosted in a location that matches the source paths in the `@font-face` declarations in your app's CSS. 

For example, if your build process copies font files to a `/dist/assets/fonts/` folder, which are served from `/dist` as the webhost's root, then you will need to provide new `@font-face` declarations with matching URLs that include the `/assets` directory in your app's CSS, such as: 

```css
@font-face {
  font-family: "Open Sans";
  src: url("/assets/fonts/opensans-bold-webfont.woff2") format("woff2"),
    url("/assets/fonts/opensans-bold-webfont.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}
...
```
Here's an example file structure that matches the default local [astro.fonts.css](css/astro.fonts.css) source paths:

```
├── dist/
│   ├── css/
│   │   └── styles.css
│   ├── favicon.ico
│   └── fonts/
│       ├── opensans-bold-webfont.woff
│       ├── opensans-bold-webfont.woff2
│       └── ...
│
├── src/
│   └── css/
│       └── styles.scss
│
├── node_modules/
│   └── @astrouxds/rux-assets/
│       ├── css/
│       │   └── fonts.css
│       ├── favicon.ico
│       └── fonts/
│           ├── opensans-bold-webfont.woff
│           ├── opensans-bold-webfont.woff2
│           └── ...
```

You can view a full set of Astro `@font-face` rules at [astro.fonts.css](css/astro.fonts.css), though you should feel free to reconfigure the paths to match your application's build and serve requirements.

For more on loading fonts with Webpack, check out the [official documentation](https://webpack.js.org/guides/asset-management/#loading-fonts).

