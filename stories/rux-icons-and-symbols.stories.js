import { html, render } from 'lit-html';
import { boolean, text, number, select, withKnobs } from '@storybook/addon-knobs';
import { RuxIcon } from '../src/components/rux-icon/rux-icon.js';
import { RuxStatus } from '../src/components/rux-status/rux-status.js';
import { RuxMonitoringIcon } from '../src/components/rux-monitoring-icon/rux-monitoring-icon.js';
import { RuxMonitoringProgressIcon } from '../src/components/rux-monitoring-icon/rux-monitoring-progress-icon.js';
import Readme from '../src/components/rux-icon/README.md';
import ReadmeMonitoring from '../src/components/rux-monitoring-icon/README.md';

export default {
  title: 'Components|Icons & Symbols',
  decorators: [withKnobs],
};

export const AllIcons = () => {
  const colors = {
    Primary: '#005a8f',
    Secondary: '#4dacff',
    Tertiary: '#52667a',
    Quaternary: '#ced6e4',
    White: '#ffffff',
  };

  const sizes = {
    'Extra Small': 'extra-small',
    'Small': 'small',
    'Normal': 'normal',
    'Large': 'large',
  };

  const colorKnob = select('Color', colors, '#4dacff');
  const sizeKnob = select('Size', sizes, 'normal');
  const icons = [
    'altitude',
    'antenna',
    'antenna-off',
    'antenna-receive',
    'antenna-transmit',
    'equipment',
    'mission',
    'netcom',
    'payload',
    'processor',
    'processor-alt',
    'propulsion-power',
    'satellite-off',
    'satellite-receive',
    'satellite-transmit',
    'solar',
    'thermal',
    'add-large',
    'add-small',
    'close-large',
    'close-small',
    'collapse',
    'expand',
    'lock',
    'unlock',
    'search',
    'notifications',
    'settings',
    'caution',
    'maintenance',
    'resources',
  ];

  return html`
    <style>
      .icon-container {
        list-style: none;
        margin: 1rem 2rem;
        padding: 0;
        display: flex;
        flex-wrap: wrap;

        justify-content: center;
      }

      .icon-container li {
        display: block;
        margin: 1rem 1.5rem;
      }

      .icon-name {
        margin-top: 0.5rem;
        font-size: 0.75rem;
      }
    </style>

    <div style="margin: 3rem auto; text-align: center;">
      <ul class="icon-container">
        ${icons.map(
      (icon) => html`
            <li>
              <rux-icon
                icon="${icon}"
                color="${colorKnob}"
                size="${sizeKnob}"
              ></rux-icon>
              <div class="icon-name">${icon}</div>
            </li>
          `,
  )}
      </ul>
    </div>
  `;
};

AllIcons.story = {
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

export const MonitoringIcons = () => {
  const groupId = 'Options';

  /* Select Status */
  const statusLabel = 'Status';
  const statusOptions = {
    Critical: 'critical',
    Serious: 'serious',
    Caution: 'caution',
    Normal: 'normal',
    Standby: 'standby',
    Off: 'off',
  };
  const defaultStatusValue = 'normal';
  const status = select(statusLabel, statusOptions, defaultStatusValue, groupId);

  /* Select Icons */
  const iconLabel = 'Icon';
  const iconOptions = {
    'Altitude': 'altitude',
    'Antenna': 'antenna',
    'Antenna (Off)': 'antenna-off',
    'Antenna (Receive)': 'antenna-receive',
    'Antenna (Transmit)': 'antenna-transmit',
    'Equipment': 'equipment',
    'Mission': 'mission',
    'Netcom': 'netcom',
    'Payload': 'payload',
    'Processor': 'processor',
    'Processor (Alt)': 'processor-alt',
    'Propulsion Power': 'propulsion-power',
    'Satellite (Off)': 'satellite-off',
    'Satellite (Receive)': 'satellite-receive',
    'Satellite (Transmit)': 'satellite-transmit',
    'Solar': 'solar',
    'Thermal': 'thermal',
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
  const notificationDefaultValue = 1;

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
    <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
      <rux-monitoring-icon
        library="/custom-icons.svg"
        icon="custom"
        label="Custom Icon"
        sublabel="${sublabel}"
        status="${status}"
        notifications="${notifications}"
      ></rux-monitoring-icon>
    </div>
  `;
};

MonitoringIcons.story = {
  parameters: {
    exports: {
      render,
      html,
    },
    readme: {
      sidebar: ReadmeMonitoring,
    },
  },
};

export const ProgressIcon = () => {
  const groupId = 'Options';

  const labelLabel = 'Label';
  const labelDefaultValue = 'Progress';
  const label = text(labelLabel, labelDefaultValue, groupId);

  const sublabelLabel = 'Sub-Label';
  const sublabelDefaultValue = '';
  const sublabel = text(sublabelLabel, sublabelDefaultValue, groupId);

  const progressLabel = 'Progress';
  const progressDefaultValue = 50;
  const progressOptions = {
    range: true,
    min: 1,
    max: 100,
    step: 1,
  };
  const progress = number(progressLabel, progressDefaultValue, progressOptions, groupId);

  /* Notifications */
  const notificationLabel = 'Notifications';
  const notificationDefaultValue = 0;

  const notifications = number(notificationLabel, notificationDefaultValue, {}, groupId);

  return html`
    <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
      <rux-monitoring-progress-icon
        progress="${progress}"
        max="${progressOptions.max}"
        label="${label}"
        sublabel="${sublabel}"
        notifications="${notifications}"
      ></rux-monitoring-progress-icon>
    </div>
  `;
};

ProgressIcon.story = {
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

export const MonitoringIconSet = () => html`
    <style>
      ul {
        display: flex;
        list-style: none;
        justify-content: space-around;

        padding: 0 1rem;
      }

      ul li {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    </style>
    <ul>
      <li>
        <rux-monitoring-icon
          icon="mission"
          label="Mission"
          sublabel="Sub Label"
          status="off"
          notifications="4"
        ></rux-monitoring-icon>
      </li>
      <li>
        <rux-monitoring-icon
          icon="equipment"
          label="Equipment"
          sublabel="Sub Label"
          status="standby"
          notifications="100"
        ></rux-monitoring-icon>
      </li>
      <li>
        <rux-monitoring-icon
          icon="processor"
          label="Processor"
          sublabel="Sub Label"
          status="normal"
        ></rux-monitoring-icon>
      </li>
      <li>
        <rux-monitoring-icon
          icon="antenna"
          label="Antenna"
          sublabel="Sub Label"
          status="caution"
          notifications="1200"
        ></rux-monitoring-icon>
      </li>
      <li>
        <rux-monitoring-icon
          icon="antenna-transmit"
          label="NROL"
          sublabel="Sub Label"
          status="serious"
          notifications="1000000"
        ></rux-monitoring-icon>
      </li>
      <li>
        <rux-monitoring-icon
          icon="antenna-receive"
          label="SBSS=1"
          sublabel="Receiving"
          status="critical"
          notifications="34000000000000"
        ></rux-monitoring-icon>
      </li>
    </ul>
  `;

MonitoringIconSet.story = {
  name: 'Monitoring Icon (set)',

  parameters: {
    exports: {
      render,
      html,
    },
    readme: {
      sidebar: ReadmeMonitoring,
    },
  },
};
