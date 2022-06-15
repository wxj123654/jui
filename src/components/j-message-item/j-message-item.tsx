import { Component, h, Prop, Method, Host, State } from '@stencil/core';

@Component({
  tag: 'j-message-item',
  styleUrl: 'j-message-item.css',
  shadow: true,
})
export class JMessageItem {

  @Prop() title: string
  @State() messageBox: HTMLDivElement

  @Method()
  async close() {
    this.messageBox.className = 'message-box out'
  }

  render() {
    return (
      <Host>
        <div ref={(el) => this.messageBox = el} id='message-box' class='message-box in'>{this.title}</div>
      </Host>
    );
  }

}
