/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, text, number, select, withKnobs } from '@storybook/addon-knobs';
import { RuxIcon } from '../src/components/rux-icon/rux-icon.js';
import { RuxStatus } from '../src/components/rux-status/rux-status.js';
import { RuxMonitoringIcon } from '../src/components/rux-monitoring-icon/rux-monitoring-icon.js';

/* eslint-enable no-unused-vars */

storiesOf('Components|Icons & Symbols', module)
  .addDecorator(withKnobs)
  .add(
    'Monitoring Icons',
    () => {
      const groupId = 'Options';
      const icons = [
        'altitude',
        'antenna',
        'antenna-off',
        'antenna-receive',
        'antenna-transmit',
        'equipment',
        'mission',
        'payload',
        'processor',
        'processor-alt',
        'netcom',
        'propulsion-power',
        'thermal',
        'satellite-off',
        'satellite-receive',
        'satellite-transmit',
      ];

      /* Select Status */
      const statusLabel = 'Status';
      const statusOptions = {
        Critical: 'critical',
        Serious: 'serious',
        Caution: 'caution',
        Normal: 'normal',
        Standby: 'standby',
        Off: 'off',
        None: null,
      };
      const defaultStatusValue = 'normal';
      const status = select(statusLabel, statusOptions, defaultStatusValue, groupId);

      /* Select Icons */
      const iconLabel = 'Icon';
      const iconOptions = {
        Altitude: 'altitude',
        Antenna: 'antenna',
        'Antenna (Off)': 'antenna-off',
        'Antenna (Receive)': 'antenna-receive',
        'Antenna (Transmit)': 'antenna-transmit',
        Equipment: 'equipment',
        Mission: 'mission',
        Payload: 'payload',
        Processor: 'processor',
        'Processor (Alt)': 'processor-alt',
        Netcom: 'netcom',
        'Propulsion Power': 'propulsion-power',
        Thermal: 'thermal',
        'Satellite (Off)': 'satellite-off',
        'Satellite (Receive)': 'satellite-receive',
        'Satellite (Transmit)': 'satellite-transmit',
        None: null,
      };
      const defaultIconValue = 'altitude';
      const icon = select(iconLabel, iconOptions, defaultIconValue, groupId);

      /* Icon Labels and Sublabels */
      const labelLabel = 'Label';
      const labelDefaultValue = 'Monitoring';
      const label = text(labelLabel, labelDefaultValue, groupId);

      const sublabelLabel = 'Sub-Label';
      const sublabelDefaultValue = '';
      const sublabel = text(sublabelLabel, sublabelDefaultValue, groupId);

      /* Notifications */
      const notificationLabel = 'Notifications';
      const notificationDefaultValue = null;

      const notifications = number(notificationLabel, notificationDefaultValue, {}, groupId);

      return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
          <rux-monitoring-icon
            icon="${icon}"
            label="${label}"
            sublabel="${sublabel}"
            status="${status}"
            notifications="${notifications}"
          ></rux-monitoring-icon>
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
## When to use a Monitoring Icon
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
| icon | string | yes | n/a | Set which icon  | 
| status | string | yes | off | | 

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
  )
  .add(
    'Percentage Icon',
    () => {
      return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
          <rux-monitoring-icon progress="10" label="Label" sublabel="Sub Label"></rux-monitoring-icon>
        </div>
      `;
    },
    {
      exports: {
        render,
        html,
      },
    },
  )
  .add(
    'All Icons',
    () => {
      return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
          {elements.map((value, index) => { return
          <li>{value}</li>
          })}
        </div>
      `;
    },
    {
      exports: {
        render,
        html,
      },
    },
  );
