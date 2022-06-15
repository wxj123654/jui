import { newSpecPage } from '@stencil/core/testing';
import { JMessageItem } from '../j-message-item';

describe('j-message-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JMessageItem],
      html: `<j-message-item></j-message-item>`,
    });
    expect(page.root).toEqualHtml(`
      <j-message-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </j-message-item>
    `);
  });
});
