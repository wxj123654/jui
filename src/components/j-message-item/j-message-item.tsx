import { Component, h, Method, Host, State } from '@stencil/core';
import { messageType } from '../j-message/j-message';
@Component({
  tag: 'j-message-item',
  styleUrl: 'j-message-item.css',
  shadow: true,
})
export class JMessageItem {

  @State() title: string
  @State() messageBox: HTMLDivElement

  @Method()
  async setType(type: messageType) {
    if(type === 'success') {
      
    }  else if(type === 'error') {

    } else {

    }
  }
  @Method()
  async setTitle(title: string) {
    this.title = title
  }
  @Method()
  async close() {
    this.messageBox.className = 'message-box out'
  }

  render() {
    return (
      <Host>
        <div ref={(el) => this.messageBox = el } id='message-box' class='message-box in'>{this.title}</div>
      </Host>
    );
  }

}
