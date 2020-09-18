import { html, render } from 'lit-html';
import { text, select, withKnobs } from '@storybook/addon-knobs';



import { RuxClassification } from '../src/components/rux-classifications/rux-classification.js';
import Readme from '../src/components/rux-classifications/README.md';


export default {
  title: 'Components|Classification',
  decorators: [withKnobs, withKnobs]
};


export const ClassificationBanner = () => {
	const classificationMark = ['sci', 'topsecret', 'secret', 'confidential','controlled','unclassified'];
	const classification = select('classification', classificationMark, 'secret');
	const classOptions = ['banner', 'tag'];
	const classType = select('Type', classOptions, 'banner');
  
	const messageText = text(
		'Classification Message',
		`Top Secret//Sci`,
	);

	return html`
	  <div style="display: flex; flex-flow: column; justify-content: center;">
			<rux-classification-marking 
				?visible="${true}"
				type="${classType}"
				classification="${classification}"
				message="${messageText}">
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
		  		visible
		  		type="banner"
          classification="sci"
          message="Top Secret//SCI"
        ></rux-classification-marking>
      </div>
			
			<div style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
				<rux-classification-marking
					visible
					type="banner"
					classification="topsecret"
					message="Top Secret"
				></rux-classification-marking>
			</div>
			
			<div style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
				<rux-classification-marking
					visible
					type="banner"
					classification="secret"
					message="Secret"
				></rux-classification-marking>
			</div>
		
			<div style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
				<rux-classification-marking
					visible
					type="banner"
					classification="confidential"
					message="Confidential"
				></rux-classification-marking>
			</div>
		
			<div style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
				<rux-classification-marking
					visible
					type="banner"
					classification="controlled"
					message="CUI"
				></rux-classification-marking>
			</div>
	  
	  	<div style="display: flex; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
        <rux-classification-marking
					visible
					type="banner"
          classification="unclassified"
          message="Unclassified"
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
					visible
					type="tag"
					classification="sci"
					message="TS//SCI"
				></rux-classification-marking>
			</div>

			<div style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
			<p style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9;">Top Secret</p>	
			<rux-classification-marking
					visible
					type="tag"
					classification="topsecret"
					message="TS"
				></rux-classification-marking>
			</div>
			<div style="display: flex; align-items:baseline;  position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
			<p style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9;">Secret</p>	
			<rux-classification-marking
					visible
					type="tag"
					classification="secret"
					message="S"
				></rux-classification-marking>
			</div>
			<div style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
			<p style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9;">Confidential</p>	
			<rux-classification-marking
					visible
					type="tag"
					classification="confidential"
					message="C"
				></rux-classification-marking>
			</div>
			<div style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
				<p style="display:flex; width:225px; font-size:14px; font-style:italic; color:#d5d7d9;">Controlled Unclassified</p>	
				<rux-classification-marking
					visible
					type="tag"
					classification="controlled"
					message="CUI"
				></rux-classification-marking>
			</div>
			<div style="display: flex; align-items:baseline; position: relative; height: 40px; margin-bottom: 20px; overflow: hidden;">
				<p style="display: flex; width:225px; font-size:13px; font-style:italic; color:#d5d7d9;">Uncontrolled Unclassified</p>	
				<rux-classification-marking
					visible
					type="tag"
					classification="unclassified"
					message="U"
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