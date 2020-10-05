import { html, fixture, expect } from '@open-wc/testing';

import './rux-global-status-bar.js';

describe('RuxGlobalStatusBar', () => {
  it('renders default status bar correctly', async () => {
    const el = await fixture(html`
      <rux-global-status-bar></rux-global-status-bar>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('renders versioned status bar correctly', async () => {
    const el = await fixture(html`
      <rux-global-status-bar version="0.0.1"></rux-global-status-bar>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('renders named status bar correctly', async () => {
    const el = await fixture(html`
      <rux-global-status-bar appname="test"></rux-global-status-bar>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
});
