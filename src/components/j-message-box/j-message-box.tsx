import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'j-message-box',
  styleUrl: 'j-message-box.css',
  shadow: true,
})
export class JMessageBox {

  render() {
    return (
      <Host id='j-message-box-el'>
        <div id='j-message-box'>
          
        </div>
      </Host>
    );
  }

}
