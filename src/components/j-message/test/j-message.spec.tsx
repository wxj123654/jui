import { newSpecPage } from '@stencil/core/testing';
import  JMessage  from '../j-message';

describe('j-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JMessage],
      html: `<j-message></j-message>`,
    });
    expect(page.root).toEqualHtml(`
      <j-message>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </j-message>
    `);
  });
});
