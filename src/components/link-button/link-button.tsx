import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'link-button',
  styleUrl: 'link-button.css',
  shadow: true,
})
export class LinkButton {
  @Event({ bubbles: true }) toggleContact: EventEmitter<null>;
  toggleContactHandler() {
    this.toggleContact.emit();
  }

  render() {
    return (
      <button onClick={() => this.toggleContactHandler()}>
        <slot></slot>
      </button>
    );
  }
}
