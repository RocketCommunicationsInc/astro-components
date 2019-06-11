/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, text, select, number, withKnobs } from '@storybook/addon-knobs';

import { RuxNotification } from '../src/components/rux-notification/rux-notification.js';
import Readme from '../src/components/rux-notification/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Notification', module)
    .addDecorator(withKnobs)
    .add(
        'Notification',
        () => {
          const toggleBanner = boolean('Enable Banner', true);
          const statusOptions = ['standby', 'normal', 'caution', 'critical'];
          const statusKnob = select('Status', statusOptions, 'normal');

          const messageKnob = text(
              'Banner Message',
              `This is a notification banner. It won’t disappear until the user dimisses it.`
          );
          return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
          <rux-notification ?open="${toggleBanner}" status="${statusKnob}" message="${messageKnob}"> </rux-notification>
        </div>
      `;
        },
        {
          exports: {
            render,
            html,
          },
          notes: {
            markdown: Readme,
          },
        }
    )
    .addDecorator(withKnobs)
    .add(
        'Notification (Auto Close)',
        () => {
          const toggleBanner = boolean('Enable Banner', true);
          const statusOptions = ['standby', 'normal', 'caution', 'critical'];
          const statusKnob = select('Status', statusOptions, 'standby');
          const closeDelay = number('Close Delay', 3, {
            range: true,
            min: 2,
            max: 10,
            step: 1,
          });
          const messageKnob = text(
              'Banner Message',
              `This is a notification banner. It will disappear in ${closeDelay}000ms.`
          );
          return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
          <rux-notification
            ?open="${toggleBanner}"
            closeAfter="${closeDelay}"
            status="${statusKnob}"
            message="${messageKnob}"
          >
          </rux-notification>
        </div>
      `;
        },
        {
          exports: {
            render,
            html,
          },
          notes: {
            markdown: Readme,
          },
        }
    )
    .add(
        'All Notification Banners',
        () => {
          return html`
        <div style="display: flex; flex-flow: column; justify-content: center; margin:20px;">
          <div style="display: flex; position: relative; height: 68px; margin-bottom: 20px; overflow: hidden;">
            <rux-notification open status="standby" message="Standby Notification Banner"></rux-notification>
          </div>
          <div style="display: flex; position: relative; height: 68px; margin-bottom: 20px; overflow: hidden;">
            <rux-notification open status="normal" message="Normal Notification Banner"></rux-notification>
          </div>
          <div style="display: flex; position: relative; height: 68px; margin-bottom: 20px; overflow: hidden;">
            <rux-notification open status="caution" message="Caution Notification Banner"></rux-notification>
          </div>
          <div style="display: flex; position: relative; height: 68px; margin-bottom: 20px; overflow: hidden;">
            <rux-notification open status="critical" message="Critical Notification Banner"></rux-notification>
          </div>
        </div>
      `;
        },
        {
          exports: {
            render,
            html,
          },
          notes: {
            markdown: Readme,
          },
        }
    );
