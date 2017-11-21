class AstroButton extends HTMLElement {

	constructor() {
		super();
	}

	// OPTIONAL: Component is loaded
	connectedCallback() {
		// this.initShadowDom();
		this._onClick();
	}

	// OPTIONAL: Component is attached to the dom
	attachedCallback() { }

	// OPTIONAL: Disconnect event listeners when component is removed from DOM
	disconnectedCallback() {
		this.removeEventListener('click', this._onClick);
	}

	// enable shadow DOM
	// initShadowDom() {
	// 	let shadowRoot = this.attachShadow({ mode: 'open' });
	// 	shadowRoot.innerHTML = this.template;
	// }

	// internally handle a click event
	_onClick() {
		this.addEventListener('click', (obj) => {

			var data = obj.target.dataset;
			this._propA = 'C';

			// dispatch a custom event up the DOM
			this.dispatchEvent(new CustomEvent('clicked', {
				detail: {
					test: 'wonders'
				},
				bubbles: true // bubbles up the DOM
			}));
		});
	}

	get template() {
		return `
		<button slot="default"><slot></slot></button>`;
	}
}


window.customElements.define('astro-button', AstroButton);