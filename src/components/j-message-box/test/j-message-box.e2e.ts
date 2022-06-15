import { newE2EPage } from '@stencil/core/testing';

describe('j-message-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<j-message-box></j-message-box>');

    const element = await page.find('j-message-box');
    expect(element).toHaveClass('hydrated');
  });
});
