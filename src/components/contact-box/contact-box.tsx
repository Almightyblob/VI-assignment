import { Component, Element, Listen, h } from '@stencil/core';

@Component({
  tag: 'contact-box',
  styleUrl: 'contact-box.css',
  shadow: true,
})
export class ContactBox {
  @Element()
  el: HTMLElement;

  toggle() {
    const div = this.el.shadowRoot.querySelector('div');
    div.classList.toggle('visible');
  }

  @Listen('toggleContact', { target: 'window' })
  toggleContactHandler() {
    this.toggle();
  }

  render() {
    return (
      <div class={'contact-us'}>
        <div class={'pointer'} />
        <h1>Contact Us</h1>
        <button onClick={() => this.toggle()}>X</button>
      </div>
    );
  }
}
