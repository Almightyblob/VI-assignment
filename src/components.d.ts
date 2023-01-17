/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ContactBox {
    }
    interface HomePage {
    }
    interface LinkButton {
    }
    interface MainContent {
        "headline": string;
        "text": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface TopHeadline {
        "headlineContent": string;
    }
}
export interface LinkButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLinkButtonElement;
}
declare global {
    interface HTMLContactBoxElement extends Components.ContactBox, HTMLStencilElement {
    }
    var HTMLContactBoxElement: {
        prototype: HTMLContactBoxElement;
        new (): HTMLContactBoxElement;
    };
    interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {
    }
    var HTMLHomePageElement: {
        prototype: HTMLHomePageElement;
        new (): HTMLHomePageElement;
    };
    interface HTMLLinkButtonElement extends Components.LinkButton, HTMLStencilElement {
    }
    var HTMLLinkButtonElement: {
        prototype: HTMLLinkButtonElement;
        new (): HTMLLinkButtonElement;
    };
    interface HTMLMainContentElement extends Components.MainContent, HTMLStencilElement {
    }
    var HTMLMainContentElement: {
        prototype: HTMLMainContentElement;
        new (): HTMLMainContentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLTopHeadlineElement extends Components.TopHeadline, HTMLStencilElement {
    }
    var HTMLTopHeadlineElement: {
        prototype: HTMLTopHeadlineElement;
        new (): HTMLTopHeadlineElement;
    };
    interface HTMLElementTagNameMap {
        "contact-box": HTMLContactBoxElement;
        "home-page": HTMLHomePageElement;
        "link-button": HTMLLinkButtonElement;
        "main-content": HTMLMainContentElement;
        "my-component": HTMLMyComponentElement;
        "top-headline": HTMLTopHeadlineElement;
    }
}
declare namespace LocalJSX {
    interface ContactBox {
    }
    interface HomePage {
    }
    interface LinkButton {
        "onToggleContact"?: (event: LinkButtonCustomEvent<null>) => void;
    }
    interface MainContent {
        "headline"?: string;
        "text"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface TopHeadline {
        "headlineContent"?: string;
    }
    interface IntrinsicElements {
        "contact-box": ContactBox;
        "home-page": HomePage;
        "link-button": LinkButton;
        "main-content": MainContent;
        "my-component": MyComponent;
        "top-headline": TopHeadline;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "contact-box": LocalJSX.ContactBox & JSXBase.HTMLAttributes<HTMLContactBoxElement>;
            "home-page": LocalJSX.HomePage & JSXBase.HTMLAttributes<HTMLHomePageElement>;
            "link-button": LocalJSX.LinkButton & JSXBase.HTMLAttributes<HTMLLinkButtonElement>;
            "main-content": LocalJSX.MainContent & JSXBase.HTMLAttributes<HTMLMainContentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "top-headline": LocalJSX.TopHeadline & JSXBase.HTMLAttributes<HTMLTopHeadlineElement>;
        }
    }
}