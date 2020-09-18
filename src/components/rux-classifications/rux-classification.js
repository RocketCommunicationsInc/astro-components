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
    const markClass = this.classification.toLowerCase();
    const markType = this.type.toLowerCase();
    let classLabel;
    
    // const classType = this.classification;
    if(markType !== ''){
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
          case 'top secret':
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
          case 'top secret':
            classLabel = 'ts';
            break;
          default:
            classLabel = 'TS//SCI';
        }
      }
    } else {
      classLabel = 'Please select a marker type';
    }

    return classLabel;
  }

  constructor() {
    super();
    this.message = '';
    this.classification = '';
    this.type = 'banner';
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
      height: 26px;
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
      align-items:baseline;			
      left: auto;
      width: fit-content;
      padding: 4px 15px;
      border-radius:5px;
      font-size: var(--fontSizeMD);			
    }

    :host,
    :host([classification='topsecret//sci']) {
      background-color: var(--classificationTopSecretSCIBackgroundColor);
    }

    :host([classification='topsecret']),
    :host([classification='top secret']){
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
    
    <div class="rux-classification__message">${this.getText()}${this.message}</div>

    `;
  }
}
customElements.define('rux-classification-marking', RuxClassification);