import '/src/astro-app/astro-app.js';
import '../@webcomponents/webcomponentsjs/webcomponents-loader.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<title>Astro Demo App</title><astro-app>

    </astro-app>`;

document.head.appendChild($_documentContainer);

/* Global Styles //*/
/* See https://goo.gl/OOhYW5 */
/* Polymer Based Web Component //*/
/* <link rel="import" href="src/astro-components/polymer-rux-button.html"> */
/* Vanilla Based Web Component //*/
/* <script type="module" src="src/astro-components/rux-button.js"></script> */
addEventListener('clicked', function(payload) {
    console.log('Dispatched Event from Web Component',payload);
});

/* <rux-button>Component Button  in Index</rux-button> */
;
