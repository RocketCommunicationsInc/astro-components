import { LitElement, html } from 'lit-element';
export class RuxClassification extends LitElement {
  static get properties() {
    return {
      classification: {
        type: String
      },
      type: {
        type: String
      },
      message: {
        type: String
      }
    };
  }
  
  _setClassificationText() {
    const markClass = this.classification.toLowerCase().replace(/\s+/g, '');
    const markType = this.type.toLowerCase();
    let classLabel;
    
    // const classType = this.classification;
    if(markType) {
      if(markType === 'banner') {
        switch(markClass) {
          case 'unclassified':
            classLabel = 'unclassified';
            break;
          case 'controlled':
            classLabel = 'cui';
            break;
          case 'confidential':
            classLabel = 'confidential';
            break;
          case 'secret':
            classLabel = 'secret';
            break;
          case 'topsecret':
            classLabel = 'top secret';
            break;
          default:
            classLabel = 'Top Secret//SCI';
        }

      } else if (markType === 'tag') {
        
        switch(markClass) {
          case 'unclassified':
            classLabel = 'u';
            break;
          case 'controlled':
            classLabel = 'cui';
            break;
          case 'confidential':
            classLabel = 'c';
            break;
          case 'secret':
            classLabel = 's';
            break;
          case 'topsecret':
            classLabel = 'ts';
            break;
          default:
            classLabel = 'TS//SCI';
        }
      }
    } else {
      classLabel = 'Select a marker type';
    }

    return classLabel;
  }

  _setClassificationLabel(param) {
		const markClass = this.classification.toLowerCase().replace(/\s+/g, '');
		const classLabel = param.toLowerCase().replace(/\s+/g, '');
		let styleLabel;
		
		if(classLabel == markClass){
			switch(classLabel) {
				case 'unclassified':
					styleLabel = 'unclassified';
					break;
				case 'controlled':
					styleLabel = 'controlled';
					break;
				case 'confidential':
					styleLabel = 'confidential';
					break;
				case 'secret':
					styleLabel = 'secret';
					break;
				case 'topsecret':
					styleLabel = 'top secret';
					break;
				default:
					styleLabel = 'Top Secret//SCI';
			}
		}
		
		return styleLabel;
  }

  constructor() {
    super();
    this.message = '';
    this.classification = 'Top Secret//SCI';
		this.type = 'banner';
		this.getClass = this._setClassificationLabel;
    this.getText = this._setClassificationText;
  }

  render() {
    return html`
    <style>
    :host {
      z-index:1000;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center; 
      height: 22px;
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
      top: 0;
      left: 0;
      flex-wrap: nowrap;
      flex-grow: 1;		
      width: 100%;
    }
    
    :host([type='tag']){
      position: relative;
      align-items:center;			
      left: auto;
      width: fit-content;
      padding: 4px 15px;
      border-radius:3px;
      font-size: var(--fontSizeMD);			
    }

    :host,
    :host([classification='${this.getClass('topsecret//sci')}']) {
      background-color: var(--classificationTopSecretSCIBackgroundColor);
    }

    :host([classification='${this.getClass('top secret')}']){
      background-color: var(--classificationTopSecretBackgroundColor);
    }

		:host([classification='${this.getClass('secret')}']),
		:host([classification='Secret']){
      background-color: var(--classificationSecretBackgroundColor);
      color: var(--colorWhite);
    }

    :host([classification='${this.getClass('confidential')}']) {
      background-color: var(--classificationConfidentialBackgroundColor);
      color: var(--colorWhite);
    }

    :host([classification='${this.getClass('controlled')}']) {
      background-color: var(--classificationControlledBackgroundColor);
      color: var(--colorWhite);
    }

    :host([classification='${this.getClass('unclassified')}']) {
      background-color: var(--classificationUnclassifiedBackgroundColor);
      color: var(--colorWhite);
    }
    </style>
    
    <div class="rux-classification__message">${this.getText()}${this.message}</div>

    `;
  }
}
customElements.define('rux-classification-marking', RuxClassification);