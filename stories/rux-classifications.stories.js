import { html, render } from 'lit-html';
import { text, select, withKnobs } from '@storybook/addon-knobs';
import { RuxClassification } from '../src/components/rux-classifications/rux-classification.js';
import Readme from '../src/components/rux-classifications/README.md';


export default {
  title: 'Components|Classification',
  decorators: [withKnobs]
};


export const ClassificationBanner = () => {
  const classificationOptions = ['Top Secret//SCI', 'Top Secret', 'Secret', 'Confidential','Controlled','Unclassified'];
  const classification = select('Classification', classificationOptions, 'Top Secret//SCI');
  
  const markerOptions = ['Banner', 'Tag'];
  const markerType = select('Marker Type', markerOptions, 'Banner');
  
	const markerText = text('Marker Text','');

	function markerFilter(){
		const markerClass = classification.toLowerCase();

		return markerClass;
	}
	

  return html`
    <div style="display: flex; flex-flow: row; justify-content: center;margin-top:60px;">
      <rux-classification-marking
        type="${markerType}"
        classification="${markerFilter()}"
        message=" ${markerText}">
      </rux-classification-marking>
    </div>
  `;
};

ClassificationBanner.story = {
  parameters: {
    exports: {
      render,
      html,
    },
    readme: {
      sidebar: Readme,
    },
  },
};

export const AllClassificationBanners = () => html`
    <div style="display: flex; flex-flow: column; justify-content: center; margin:20px;">
      <div style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
        <rux-classification-marking
          type="banner"
          classification="top secret//sci"
          message=""
        ></rux-classification-marking>
      </div>
      
      <div style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
        <rux-classification-marking
          type="banner"
          classification="top secret"
          message=""
        ></rux-classification-marking>
      </div>
      
      <div style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
        <rux-classification-marking
          type="banner"
          classification="secret"
          message=""
        ></rux-classification-marking>
      </div>
    
      <div style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
        <rux-classification-marking
          type="banner"
          classification="confidential"
          message=""
        ></rux-classification-marking>
      </div>
    
      <div style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
        <rux-classification-marking
          type="banner"
          classification="controlled"
          message=""
        ></rux-classification-marking>
      </div>
    
      <div style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
        <rux-classification-marking
          type="banner"
          classification="unclassified"
          message=""
        ></rux-classification-marking>
      </div>	  
    </div>
`;

AllClassificationBanners.story = {
  parameters: {
    exports: {
      render,
      html,
    },
    readme: {
      sidebar: Readme,
    },
  },
};


export const ClassificationTags = () => html`
    <div style="display: flex; flex-flow: column; justify-content: flex-start; width: 400px; margin:60px auto;">	  
      
      <div style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
        <p style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9;">Top Secret//SCI</p>
        <rux-classification-marking
          type="tag"
          classification="top secret//sci"
          message=""
        ></rux-classification-marking>
      </div>

      <div style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
        <p style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9;">Top Secret</p>	
        <rux-classification-marking
          type="tag"
          classification="top secret"
          message=""
        ></rux-classification-marking>
      </div>
      <div style="display: flex; align-items:baseline;  position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
        <p style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9;">Secret</p>	
        <rux-classification-marking
          type="tag"
          classification="secret"
          message=""
        ></rux-classification-marking>
      </div>
      <div style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
        <p style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9;">Confidential</p>	
        <rux-classification-marking
          type="tag"
          classification="confidential"
          message=""
        ></rux-classification-marking>
      </div>
      <div style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
        <p style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9;">Controlled Unclassified</p>	
        <rux-classification-marking
          type="tag"
          classification="controlled"
          message=""
        ></rux-classification-marking>
      </div>
      <div style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
        <p style="display: flex; width:225px; font-size:13px; font-style:italic; color:#d5d7d9;">Uncontrolled Unclassified</p>	
        <rux-classification-marking
          type="tag"
          classification="unclassified"
          message=""
        ></rux-classification-marking>
      </div>

    </div>
  `;

ClassificationTags.story = {
  parameters: {
    exports: {
      render,
      html,
    },
    readme: {
      sidebar: Readme,
    },
  },
};