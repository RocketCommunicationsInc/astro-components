/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { RuxToggle } from '../src/components/rux-toggle/rux-toggle.js';

/* eslint-enable no-unused-vars */

storiesOf('Components|Toggle', module)
  .addDecorator(withKnobs)
  .add(
    'Toggle',
    () => {
      const disabled = boolean('Disabled', false);
      const checked = boolean('Checked', false);
      return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
          <rux-toggle .disabled=${disabled} .checked=${checked}></rux-toggle>
        </div>
      `;
    },
    {
      exports: {
        render,
        html,
      },
      notes: {
        // this will also use a .md file, but just trying it out for now
        /* eslint-disable no-useless-escape */
        markdown: `
## When to use a Toggle Element
A Toggle describes a state or value. Similar to a checkbox toggles allow users to change a setting between two states such as “On" or "Off.” Unlike a checkbox, a toggle button initiates an action with immediate effect.


### Component Registration
\`\`\`js
import { RuxToggle } from '@astrouxds/rux-toggle/rux-toggle.js';
\`\`\`

### Component Usage
\`\`\`html
<rux-toggle disabled="false" checked="false"></rux-toggle>
\`\`\`

### Component Options
| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| disabled | Boolean | no | false | | 
| checked | Boolean | no | false | | 

## Revision History

##### **3.0**

- Breaking change to markup of toggle button

##### **2.1**

- Moved Pushbuttons to its own style sheet

##### **1.4**

- Added \`rux\_\` prefixes and BEM-compatible classes to all \`satcom\_\`-prefixed elements. NOTE: \`satcom\_\` will be removed in a future version
- Removed prefixed linear gradients
- Removed prefixed transition
- Fixed added colon to checked pseudo class (e.g., checked became :checked)
- Alignment issue fixed on toggle button label
- Updated to WCAG colors
- Updated transition speed

        `,
      },
    },
  );
