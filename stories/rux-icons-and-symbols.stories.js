import { html, render } from 'lit-html';
import { boolean, text, number, select, withKnobs } from '@storybook/addon-knobs';
import { RuxIcon } from '../src/components/rux-icon/rux-icon.js';
import { RuxStatus } from '../src/components/rux-status/rux-status.js';
import { RuxMonitoringIcon } from '../src/components/rux-monitoring-icon/rux-monitoring-icon.js';
import { RuxMonitoringProgressIcon } from '../src/components/rux-monitoring-icon/rux-monitoring-progress-icon.js';
import Readme from '../src/components/rux-icon/README.md';
import ReadmeMonitoring from '../src/components/rux-monitoring-icon/README.md';
import ReadmeMonitoringProgress from '../src/components/rux-monitoring-icon/MonitoringProgressReadme.md';
import ruxIconsJson from '../static/json/rux-icons.json';


export default {
  title: 'Components/Icons & Symbols',
  decorators: [withKnobs],
};

export const AllIcons = () => {
  const colors = {
    Primary: 'var(--primary)',
    Secondary: 'var(--primaryLight)',
    Tertiary: '#52667a',
    Quaternary: '#ced6e4',
    White: '#ffffff',
  };

  const sizes = {
    'Extra Small': '1rem',
    'Small': '2rem',
    'Normal': '3rem',
    'Large': '5rem',
  };

  const colorKnob = select('Color', colors, 'var(--primary)');
  const sizeKnob = select('Size', sizes, '3rem');


  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  };

  const displaySection = (section) => {
    return html`
            <div class="icon__section">
              <h3>${capitalize(section)}</h3>
              <ul class="icon__list">
                ${ruxIconsJson['solid'][section].map(icon => {
                  return html`
                  <li class="icon__list-item" title="${icon.name}">
                    <i class="rux-icon rux-icon--${icon.name}"></i>
                    <div class="icon__name">${icon.name}</div>
                  </li>`
                })}
              </ul>
            </div>
            `;
  };

  return html`
    <style>
      .icon__wrapper{
        margin: 3rem 4rem; 
        text-align: center;
      }

      .icon__list {
        list-style: none;
        margin: 1rem -1rem;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
      }

      .icon__list-item {
        padding: 1rem;
      }

      .icon__list-item .rux-icon {
        width: ${sizeKnob};
        height: ${sizeKnob};
        background-color: ${colorKnob};
      }

      .icon__section {
        margin: 1rem 0 2rem;
      }

      .icon__section h3 {
        text-align: left;
        position: relative;
        
        font-size: 1.5rem;
        font-weight: 600;
      }

      .icon__section h3:after {
        content: '';
        position: absolute;
        left: 0px;
        bottom: -1rem;
        display: block;
        width: 100%;
        height: 1px;
        background-color: #fff;
      }

      .icon__name {
        display: block;
        margin-top: 0.5rem;
        font-size: 0.75rem;
        width: 5rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: calc(${sizeKnob} + 1rem);
      }
    </style>
    <div class="icon__wrapper">
      ${displaySection('astro')}
      ${Object.keys(ruxIconsJson['solid']).map(
          (section) => section !== 'astro' ? displaySection(section) : null,
      )}
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
        library="/icons/custom.svg"
        icon="custom"
        label="Custom icon"
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
      sidebar: ReadmeMonitoringProgress,
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
          sublabel="Sub-label"
          status="off"
          notifications="4"
        ></rux-monitoring-icon>
      </li>
      <li>
        <rux-monitoring-icon
          icon="equipment"
          label="Equipment"
          sublabel="Sub-label"
          status="standby"
          notifications="100"
        ></rux-monitoring-icon>
      </li>
      <li>
        <rux-monitoring-icon
          icon="processor"
          label="Processor"
          sublabel="Sub-label"
          status="normal"
        ></rux-monitoring-icon>
      </li>
      <li>
        <rux-monitoring-icon
          icon="antenna"
          label="Antenna"
          sublabel="Sub-label"
          status="caution"
          notifications="1200"
        ></rux-monitoring-icon>
      </li>
      <li>
        <rux-monitoring-icon
          icon="antenna-transmit"
          label="NROL"
          sublabel="Sub-label"
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
