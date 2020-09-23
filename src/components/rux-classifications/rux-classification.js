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
      label: {
        type: String
      }
    };
  }
  
  _setClassificationText() {
    const markClass = this.classification.toLowerCase().replace(/\s+/g, '');
    const markType = this.type.toLowerCase();
    let markLabel;
    
    // const classType = this.classification;
    if(markType) {
      if(markType === 'banner') {
        switch(markClass) {
          case 'unclassified':
            markLabel = 'unclassified';
            break;
          case 'controlled':
            markLabel = 'cui';
            break;
          case 'confidential':
            markLabel = 'confidential';
            break;
          case 'secret':
            markLabel = 'secret';
            break;
          case 'topsecret':
            markLabel = 'top secret';
            break;
          default:
            markLabel = 'Top Secret//SCI';
        }

      } else if (markType === 'tag') {
        
        switch(markClass) {
          case 'unclassified':
            markLabel = 'u';
            break;
          case 'controlled':
            markLabel = 'cui';
            break;
          case 'confidential':
            markLabel = 'c';
            break;
          case 'secret':
            markLabel = 's';
            break;
          case 'topsecret':
            markLabel = 'ts';
            break;
          default:
            markLabel = 'TS//SCI';
        }
      }
    } else {
      markLabel = 'Select a marker type';
    }

    return markLabel;
  }

  _setClassificationLabel(param) {
		const markerClass = this.classification.toLowerCase().replace(/\s+/g, '');
		const markerLabel = param.toLowerCase().replace(/\s+/g, '');
		let markerStyle;
		
		if(markerLabel == markerClass){
			switch(markerLabel) {
				case 'unclassified':
					markerStyle = 'unclassified';
					break;
				case 'controlled':
					markerStyle = 'controlled';
					break;
				case 'confidential':
					markerStyle = 'confidential';
					break;
				case 'secret':
					markerStyle = 'secret';
					break;
				case 'topsecret':
					markerStyle = 'top secret';
					break;
				default:
					markerStyle = 'Top Secret//SCI';
			}
		}
		
		return markerStyle;
  }

  constructor() {
    super();
    this.label = '';
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

    :host([classification='${this.getClass('topsecret')}']){
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
    
    <div class="rux-classification__message">${this.getText()}${this.label}</div>

    `;
  }
}
customElements.define('rux-classification-marking', RuxClassification);