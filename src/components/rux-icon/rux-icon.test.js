import { html, fixture, expect } from '@open-wc/testing';

import './rux-icon.js';

describe('RuxIcon', () => {
  it('renders empty icon correctly', async () => {
    const el = await fixture(html`
      <rux-icon></rux-icon>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('renders default icon correctly', async () => {
    const el = await fixture(html`
      <rux-icon icon="netcom"></rux-icon>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('renders labeled icon correctly', async () => {
    const el = await fixture(html`
      <rux-icon label="test"></rux-icon>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('renders full icon correctly', async () => {
    const el = await fixture(html`
      <rux-icon icon="netcom" label="test"></rux-icon>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('looks for configured path', async () => {
    const el = await fixture(html`
      <rux-icon icon="netcom" label="test" library="/fakeicons/astro.svg"></rux-icon>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('renders colored icon correctly', async () => {
    const el = await fixture(html`
      <rux-icon icon="netcom" label="test" color="red"></rux-icon>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('renders large icon correctly', async () => {
    const el = await fixture(html`
      <rux-icon icon="netcom" label="test" size="large"></rux-icon>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('renders small icon correctly', async () => {
    const el = await fixture(html`
      <rux-icon icon="netcom" label="test" size="small"></rux-icon>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('renders extra small icon correctly', async () => {
    const el = await fixture(html`
      <rux-icon icon="netcom" label="test" size="extra-small"></rux-icon>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('renders normal icon correctly', async () => {
    const el = await fixture(html`
      <rux-icon icon="netcom" label="test" size="normal"></rux-icon>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('renders invalid size icon correctly', async () => {
    const el = await fixture(html`
      <rux-icon icon="netcom" label="test" size="none"></rux-icon>
    `);
    expect(el).shadowDom.to.equalSnapshot();
  });
  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <rux-icon icon="netcom"></rux-icon>
    `);
    await expect(el).shadowDom.to.be.accessible();
  });
});
