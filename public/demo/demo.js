switchTheme = function(event) {
  // ensure origin is from astrouxds
  if (
    event.origin !== "https://www.astrouxds.com" &&
    event.origin !== "http://*.astrouxds.com" &&
    event.origin !== "http://cms.astrouxds.com" &&
    event.origin !== "http://cms-dev.astrouxds.com" &&
    event.origin !== "http://www.astrouxds.com" &&
    event.origin !== "http://uxds-dev.astrouxds.com" &&
    event.origin !== "http://localhost:3000" &&
    event.origin !== "http://localhost:3002" &&
    event.origin !== "http://localhost:4000" &&
    event.origin !== "http://localhost"
  ) {
    return;
  }

  if (event.data === "light-theme") {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  }
};
window.addEventListener("message", switchTheme, false);

/*
    **
    ** DOCUMENT READY
    ** Jquery replacement in ES6-ish syntax
    **
    */
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
  }
};
