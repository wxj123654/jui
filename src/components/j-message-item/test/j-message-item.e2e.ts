import { newE2EPage } from '@stencil/core/testing';

describe('j-message-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<j-message-item></j-message-item>');

    const element = await page.find('j-message-item');
    expect(element).toHaveClass('hydrated');
  });
});
