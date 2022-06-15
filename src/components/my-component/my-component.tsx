import { Component, Prop, h, Method } from '@stencil/core';
// import { format } from '../../utils/utils';
import  JMessage  from '../j-message/j-message';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  @Method()
  async message() {
    JMessage.success({content: "123"})
  }

  render() {
    return <div>
      <button onClick={this.message}>message</button>
    </div>;
  }
}
