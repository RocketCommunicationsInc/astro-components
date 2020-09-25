import { html, fixture, expect } from '@open-wc/testing';

import './rux-tree.js';

describe('RuxTree', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <rux-tree></rux-tree>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
