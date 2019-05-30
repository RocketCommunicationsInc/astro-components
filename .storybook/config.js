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
let isDark = true;

// localStorate item name 'sb-addon-themes-3' set by storybook-dark-mode addon
if (!window.localStorage.getItem('sb-addon-themes-3')) {
  let body = document.getElementsByTagName("body")[0];
  body.classList.add("dark-theme");

  window.localStorage.setItem('sb-addon-themes-3', JSON.stringify({
    current: 'dark',
    dark: { ...astroTheme.dark },
    light: { ...astroTheme.light }
  }));

  // matches Storybook message events pattern, tells manager that theme has changed 
  // (see listener in manager-head.html)
  window.parent.postMessage( 
    JSON.stringify( 
      {key: "storybook-channel", event: { type: "DARK_MODE", args: [true]} }
    ), 
  '*');
}

// set up theme toggle for preview and channel listener for manager
const channel = addons.getChannel();
channel.emit("DARK_MODE");
addDecorator(storyFn => {
  const el = storyFn();

  channel.on("DARK_MODE", newIsDark => {
    isDark = newIsDark;
    let body = document.getElementsByTagName("body")[0];
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(isDark ? "dark-theme" : "light-theme");

    // matches Storybook message events pattern, tells manager that theme has changed 
    // (see listener in manager-head.html)
    window.parent.postMessage( 
      JSON.stringify( 
        {key: "storybook-channel", event: { type: "DARK_MODE", args: [isDark]} }
      ), 
    '*');

  });

  return el;
});

function loadStories() {
  const req = require.context("../stories", true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
