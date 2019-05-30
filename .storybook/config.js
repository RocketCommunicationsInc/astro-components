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



// set theme to dark by default, on load
let isDark = true;
window.localStorage.setItem('sb-addon-themes-3', JSON.stringify({
  current: 'dark',
  dark: { ...astroTheme.dark },
  light: { ...astroTheme.light }
}));

// set up theme toggle and channel listener
const channel = addons.getChannel();
channel.emit("DARK_MODE");
addDecorator(storyFn => {
  const el = storyFn();
  let body = document.getElementsByTagName("body")[0];
  body.classList.remove("light-theme", "dark-theme");
  body.classList.add(!isDark ? "light-theme" : "dark-theme");

  channel.on("DARK_MODE", newIsDark => {
    isDark = newIsDark;
    let body = document.getElementsByTagName("body")[0];
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(!isDark ? "light-theme" : "dark-theme");
  });

  return el;
});

function loadStories() {
  const req = require.context("../stories", true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
