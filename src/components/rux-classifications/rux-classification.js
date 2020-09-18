import { LitElement, html } from 'lit-element';


export class RuxClassification extends LitElement {
  static get properties() {
    return {
      message: {
	    type: String,
			},
			classification: {
				type: String,
			},
			type: {
				type: String,
			},
			visible: {
				type: Boolean,
				reflect: true,
			},
		};
  }

  constructor() {
    super();
    this.message = '';
    this.classification = 'unclassified';
    this.type = 'banner';
    this.visible = false;
  }

  render(){
	  return html`
	  <style>
		:host {
			z-index:1000;
			display: flex;
			justify-content: center;
			align-items: center;
			align-content: center; 
			height: auto;
			padding: 5px 0;
			
			box-sizing: border-box;
			font-size: var(--fontSize);
			font-weight:bold;
			font-family: var( --fontFamily);
			text-transform:uppercase;
			color: var(--colorBlack, rgb(0, 0, 0));
			transition: top 0.5s ease;
		}

		:host([type='banner']){
			position: absolute;
			left: 0;
			flex-wrap: nowrap;
			flex-grow: 1;		
			width: 100%;
		}
		
		:host([type='tag']){
			position: relative;
			align-items:baseline;			
			left: auto;
			width: auto;
			height: auto;
			padding: 4px 15px;
			border-radius:5px;
			font-size: var(--fontSizeMD);			
		}
		
		:host([visible]) {
			top:0;
		}

		:host,
		:host([classification='sci']) {
			background-color: var(--classificationTopSecretSCIBackgroundColor);
			color: var(--colorBlack);
		}

		:host([classification='topsecret']) {
			background-color: var(--classificationTopSecretBackgroundColor);
		}

		:host([classification='secret']) {
			background-color: var(--classificationSecretBackgroundColor);
			color: var(--colorWhite);
		}

		:host([classification='confidential']) {
		  background-color: var(--classificationConfidentialBackgroundColor);
		  color: var(--colorWhite);
		}

		:host([classification='controlled']) {
		  background-color: var(--classificationControlledBackgroundColor);
		  color: var(--colorWhite);
		}

		:host([classification='unclassified']) {
		  background-color: var(--classificationUnclassifiedBackgroundColor);
		  color: var(--colorWhite);
		}
	  </style>
	  
	  <div class="rux-classification__message">${this.message}</div>
	 
	  `;
  }
}
customElements.define('rux-classification-marking', RuxClassification);