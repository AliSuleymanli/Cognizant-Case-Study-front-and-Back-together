import { MobxLitElement } from '@adobe/lit-mobx';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

$.ajaxSetup({
  crossDomain: true,
});

//const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

export class WarehouseApp extends MobxLitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: flex-start;
      /* font-size: calc(10px + 2vmin); */
      color: #1a2b42;
      /* max-width: 960px; */
      margin: 0 auto;
      /* text-align: center; */
      background-color: var(--warehouse-app-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <h1><a href="/cars">Welcome</a></h1>
      
      <slot></slot>
    `;
  }
}
