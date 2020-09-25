import { html, fixture, expect } from '@open-wc/testing';

import './rux-button.js';

describe('RuxButton', () => {
  it('is disabled', async () => {
    const el = await fixture(html`
      <rux-button disabled>
        Disabled Button
      </rux-button>
    `);

    expect(el.disabled).to.equal(true);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <rux-button>
        Button
      </rux-button>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
