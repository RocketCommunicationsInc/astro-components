/* eslint-disable no-unused-vars */
import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';
import { withConsole } from '@storybook/addon-console';
import { RuxTree } from '../src/components/rux-tree/rux-tree.js';
import { RuxStatus } from '../src/components/rux-status/rux-status.js';
import Readme from '../src/components/rux-tree/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Tree', module)
    .addDecorator(withKnobs)
    .add(
        'Tree',
        () => {
          window.addEventListener('tree-updated', (e) => {
            treeData.data = [...e.detail.data];
          });

          const treeData = [
            {
              label: 'Tree Item 1',
              expanded: true,
              selected: true,
              children: [
                {
                  label: 'Tree Item 1.1',
                  children: [{ label: 'Tree Item 1.1.1' }, { label: 'Tree Item 1.1.2' }, { label: 'Tree Item 1.1.3' }],
                },
                { label: 'Tree Item 1.2' },
                {
                  label: 'Tree Item 1.3',
                  expanded: false,
                  children: [
                    {
                      label: 'Tree Item 1.3.1',
                      children: [{ label: 'Tree Item 1.1.1' }, { label: 'Tree Item 1.1.2' }, { label: 'Tree Item 1.1.3' }],
                    },
                    {
                      label: 'Tree Item 1.3.2',
                      children: [{ label: 'Tree Item 1.1.1' }, { label: 'Tree Item 1.1.2' }, { label: 'Tree Item 1.1.3' }],
                    },
                    {
                      label: 'Tree Item 1.3.3',
                      expanded: true,
                      children: [
                        { label: 'Tree Item 1.3.3.1' },
                        { label: 'Tree Item 1.3.3.2' },
                        { label: 'Tree Item 1.3.3.3' },
                      ],
                    },
                  ],
                },
                {
                  label: 'Tree Item 1.4',
                  children: [{ label: 'Tree Item 1.4.1' }, { label: 'Tree Item 1.4.2' }, { label: 'Tree Item 1.4.3' }],
                },
                { label: 'Tree Item 1.5' },
              ],
            },
            {
              label: 'Tree Item 2',
              children: [{ label: 'Tree Item 2.1' }, { label: 'Tree Item 2.2' }, { label: 'Tree Item 2.3' }],
            },
            {
              label: 'Tree Item 3',
            },
          ];

          return html`
        <style>
          .container {
            padding: 1rem 10%;
            display: flex;
            justify-content: center;
          }

          rux-tree {
            width: 18rem;
            margin: 1rem;
          }
        </style>
        <div class="container">
          <rux-tree .data="${treeData}"></rux-tree>
        </div>
      `;
        },
        {
          notes: {
            markdown: Readme,
          },
        }
    )
    .add(
        'Tree (with Status)',
        () => {
          window.addEventListener('tree-updated', (e) => {
            treeData.data = [...e.detail.data];
          });

          const treeData = [
            {
              label: 'Tree Item 1',
              status: 'normal',
              children: [
                {
                  label: 'Tree Item 1.1',
                },
                { label: 'Tree Item 1.2' },
                {
                  label: 'Tree Item 1.3',
                },
              ],
            },
            {
              label: 'Tree Item 2',
              status: 'standby',
            },
            {
              label: 'Tree Item 3',
              children: [
                { label: 'Tree Item 3.1', status: 'off' },
                { label: 'Tree Item 3.2', status: 'critical' },
                { label: 'Tree Item 3.3', status: 'normal' },
              ],
            },
            {
              label: 'Tree Item 4',
              status: 'caution',
              children: [{ label: 'Tree Item 4.1', status: 'caution' }, { label: 'Tree Item 4.2', status: 'normal' }],
            },
          ];

          return html`
        <style>
          .container {
            padding: 1rem 10%;
            display: flex;
            justify-content: center;
          }

          rux-tree {
            width: 18rem;
            margin: 1rem;
          }
        </style>
        <div class="container">
          <rux-tree .data="${treeData}"></rux-tree>
        </div>
      `;
        },
        {
          notes: {
            markdown: Readme,
          },
        }
    );
