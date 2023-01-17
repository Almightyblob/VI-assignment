import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'main-content',
  styleUrl: 'main-content.css',
  shadow: true,
})
export class MainContent {
  @Prop() headline: string;

  @Prop() text: string;

  render() {
    return (
      <div class={'main-content'}>
        <div class={'gray-box'}>
          <h1>{this.headline}</h1>
          <p>{this.text}</p>
          <slot></slot>
        </div>
        <div class={'image'}></div>
      </div>
    );
  }
}
