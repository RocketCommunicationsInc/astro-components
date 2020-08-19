import { html, render } from 'lit-html';
import { withKnobs } from '@storybook/addon-knobs';
import { RuxTree } from '../src/components/rux-tree/rux-tree.js';
import { RuxStatus } from '../src/components/rux-status/rux-status.js';
import Readme from '../src/components/rux-tree/README.md';

export default {
  title: 'Components|Tree',
  decorators: [withKnobs],
};

export const Tree = () => {
  const treeData = [
    {
      label: 'Tree Item 1',
      expanded: true,
      children: [
        {
          label: 'Tree Item 1.1',
          expanded: true,
          children: [
            { label: 'Tree Item 1.1.1' },
            { label: 'Tree Item 1.1.2', selected: true },
            { label: 'Tree Item 1.1.3' },
          ],
        },
        { label: 'Tree Item 1.2' },
        {
          label: 'Tree Item 1.3',
          expanded: false,
          children: [
            {
              label: 'Tree Item 1.3.1',
              children: [
                { label: 'Tree Item 1.1.1' },
                { label: 'Tree Item 1.1.2' },
                { label: 'Tree Item 1.1.3' },
              ],
            },
            {
              label: 'Tree Item 1.3.2',
              children: [
                { label: 'Tree Item 1.1.1' },
                { label: 'Tree Item 1.1.2' },
                { label: 'Tree Item 1.1.3' },
              ],
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
          children: [
            { label: 'Tree Item 1.4.1' },
            { label: 'Tree Item 1.4.2' },
            { label: 'Tree Item 1.4.3' },
          ],
        },
        { label: 'Tree Item 1.5' },
      ],
    },
    {
      label: 'Tree Item 2',
      children: [
        { label: 'Tree Item 2.1' },
        { label: 'Tree Item 2.2' },
        { label: 'Tree Item 2.3' },
      ],
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
};
Tree.story = {
  name: 'Tree',

  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};
export const TreeWithStatus = () => {
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
      children: [
        { label: 'Tree Item 4.1', status: 'caution' },
        { label: 'Tree Item 4.2', status: 'normal' },
      ],
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
};

TreeWithStatus.story = {
  name: 'Tree (with Status)',

  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};
