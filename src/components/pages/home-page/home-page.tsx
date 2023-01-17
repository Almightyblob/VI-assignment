import { Component, h } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.css',
  shadow: true,
})
export class HomePage {
  getHeadline() {
    return 'A wonderful serenity has taken possession';
  }

  getText() {
    return 'A wonderful serenity has taken possession of my entire soul, like these sweet mountains';
  }

  render() {
    return (
      <div>
        <top-headline> CtA - Main Conversion</top-headline>
        <main-content headline={this.getHeadline()} text={this.getText()}>
          <link-button>Link Button</link-button>
        </main-content>
        <contact-box />
      </div>
    );
  }
}
