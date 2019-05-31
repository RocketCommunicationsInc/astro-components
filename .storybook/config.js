import { configure, addDecorator, addParameters } from "@storybook/polymer";
import { withA11y } from "@storybook/addon-a11y";
import addons from "@storybook/addons";

import "../static/css/astro.css";
import astroTheme from "./theme";

addParameters({
  options: {
    hierarchyRootSeparator: /\|/,
    panelPosition: "bottom"
  },
  theme: astroTheme.dark,
  darkMode: {
    dark: { ...astroTheme.dark },
    light: { ...astroTheme.light }
  }
});

addDecorator(withA11y);



// set theme to dark by default, on load, the first time. Doesn't overwrite if you've visited before.
const channel = addons.getChannel();

// matches Storybook message events pattern, tells manager that theme has changed 
// (see listener in manager-head.html)
function postMessageToStorybookChannel(isDark) {
  window.parent.postMessage( 
    JSON.stringify( 
      {key: "storybook-channel", event: { type: "DARK_MODE", args: [isDark]} }
    ), 
  '*');
}

function setLocalStorageForTheme(isDark) {
  // localStorage item name 'sb-addon-themes-3' set by storybook-dark-mode addon
  window.localStorage.setItem('sb-addon-themes-3', JSON.stringify({
    current: isDark ? 'dark' : 'light',
    dark: { ...astroTheme.dark },
    light: { ...astroTheme.light }
  }));
}

function setPreviewCanvasToTheme(isDark) {
  let body = document.getElementsByTagName("body")[0];
  body.classList.remove("light-theme", "dark-theme");
  body.classList.add(isDark ? "dark-theme" : "light-theme");
}

function isStoredThemeDark() {
  const parsedThemeObject = JSON.parse(window.localStorage.getItem('sb-addon-themes-3'));
  return parsedThemeObject.current === "dark" ? true : false;
}

addDecorator(storyFn => {
  const el = storyFn();

  if (!window.localStorage.getItem('sb-addon-themes-3')) {
    let isDark = true;
  
    setPreviewCanvasToTheme(isDark)
    setLocalStorageForTheme(isDark);
    postMessageToStorybookChannel(isDark)
  
  } else {
  
    // uses theme set in localStorage on first load
    let shouldBeDark = isStoredThemeDark();
    setPreviewCanvasToTheme(shouldBeDark);
    setLocalStorageForTheme(shouldBeDark);
    postMessageToStorybookChannel(shouldBeDark);
  
  }
  
  // keep manager, preview, and localStorage in sync whenever theme is toggled
  channel.on("DARK_MODE", isDark => {
    let shouldBeDark = isStoredThemeDark();
    if (isDark !== shouldBeDark) {
      // this executes when the theme is changed in another tab
      channel.emit("DARK_MODE", shouldBeDark);
      return;
    }
    setPreviewCanvasToTheme(isDark);
    setLocalStorageForTheme(isDark);
    postMessageToStorybookChannel(isDark);
  });

  return el;

});

function loadStories() {
  const req = require.context("../stories", true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
