/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, select, date, withKnobs } from '@storybook/addon-knobs';
import { RuxClock } from '../src/components/rux-clock/rux-clock.js';
import Readme from '../src/components/rux-clock/README.md';

/* eslint-enable no-unused-vars */

storiesOf('Components|Clock', module)
  .addDecorator(withKnobs)
  .add(
    'Clock',
    () => { 

      const timezones = {
        Guam: 'Pacific/Guam',
        Hawaii: 'Pacific/Honolulu',
        Alaska: 'America/Anchorage',
        Pacific: 'America/Los_Angeles',
        Mountain: 'America/Denver',
        Central: 'America/Chicago',
        Eastern: 'America/New_York',
        UTC: 'UTC',
      };
 
      const timezoneKnob = select('Timezone', timezones, 'UTC');
      const hideTimezoneKnob = boolean('Hide Timezone', false);
      const hideDateKnob = boolean('Hide DOY', false);
      const compactKnob = boolean('Compact Version', false);

      return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
        <rux-clock
          .timezone="${timezoneKnob}" 
          ?hideTimezone="${hideTimezoneKnob}"
          ?hideDate="${hideDateKnob}"
          ?compact="${compactKnob}"></rux-clock>
        </div>
      `
    },{
      exports: {
        render,
        html,
      },
      notes: {
        markdown: Readme,
      },
    },
  )
  .add(
    'Clock with AOS/LOS',
    () => { 
      function dateWrapper(name, defaultValue) {
        const stringTimestamp = date(name, defaultValue)
        return new Date(stringTimestamp)
      }

      const timezones = {
        Guam: 'Pacific/Guam',
        Hawaii: 'Pacific/Honolulu',
        Alaska: 'America/Anchorage',
        Pacific: 'America/Los_Angeles',
        Mountain: 'America/Denver',
        Central: 'America/Chicago',
        Eastern: 'America/New_York',
        UTC: 'UTC',
      };
 
      const timezoneKnob = select('Timezone', timezones, 'UTC');
      const aosKnob = dateWrapper('AOS', new Date(1557503698781));
      const losKnob = dateWrapper('LOS', new Date('2019-05-10T16:21:12.000Z'));
      const hideTimezoneKnob = boolean('Hide Timezone', false);
      const hideDateKnob = boolean('Hide DOY', false);
      const compactKnob = boolean('Compact Version', false);
      return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
        <rux-clock
          .timezone="${timezoneKnob}" 
          aos="${aosKnob}"
          los="${losKnob}"
          ?hideTimezone="${hideTimezoneKnob}"
          ?hideDate="${hideDateKnob}"
          ?compact="${compactKnob}"></rux-clock>
        </div>
      `
    },{
      exports: {
        render,
        html,
      },
      notes: {
        markdown: Readme,
      },
    },
  )
