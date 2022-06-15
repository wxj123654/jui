import { newE2EPage } from '@stencil/core/testing';

describe('j-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<j-message></j-message>');

    const element = await page.find('j-message');
    expect(element).toHaveClass('hydrated');
  });
});
