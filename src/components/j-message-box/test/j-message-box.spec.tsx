import { newSpecPage } from '@stencil/core/testing';
import { JMessageBox } from '../j-message-box';

describe('j-message-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JMessageBox],
      html: `<j-message-box></j-message-box>`,
    });
    expect(page.root).toEqualHtml(`
      <j-message-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </j-message-box>
    `);
  });
});
