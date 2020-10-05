import { html, fixture, expect } from '@open-wc/testing';

import './rux-button.js';

describe('RuxButton', () => {
  it('renders empty button correctly', async () => {
    const el = await fixture(html`
      <rux-button></rux-button>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('is default', async () => {
    const el = await fixture(html`
      <rux-button>
        Button
      </rux-button>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('is outlined', async () => {
    const el = await fixture(html`
      <rux-button outline>
        Outline Button
      </rux-button>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('is disabled', async () => {
    const el = await fixture(html`
      <rux-button disabled>
        Disabled Button
      </rux-button>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('handles disabled values', async () => {
    const el = await fixture(html`
      <rux-button disabled="test">
        Disabled Button
      </rux-button>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('is small', async () => {
    const el = await fixture(html`
      <rux-button size="small">
        Small Button
      </rux-button>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('is large', async () => {
    const el = await fixture(html`
      <rux-button size="large">
        Large Button
      </rux-button>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('should ignore invalid size', async () => {
    const el = await fixture(html`
      <rux-button size="green">
        Large Button
      </rux-button>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });

  it('should ignore invalid icon', async () => {
    const el = await fixture(html`
      <rux-button icon="qwerty"></rux-button>
    `);
    expect(el).shadowDom.to.equalSnapshot();
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
