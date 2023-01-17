import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'top-headline',
  styleUrl: 'top-headline.css',
  shadow: true,
})
export class TopHeadline {
  @Prop() headlineContent: string;
  render() {
    return (
      <h1 class={'top-headline'}>
        <slot></slot>
      </h1>
    );
  }
}
