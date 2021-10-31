import { MobxLitElement } from '@adobe/lit-mobx';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { BootstrapCssMin } from './Elements/BootstrapCss';
import './Elements/Modal';
import './Components/Shoppingcard';
import { store } from './Store/Store';

$.ajaxSetup({
  crossDomain: true,
});

//const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

export class WarehouseApp extends MobxLitElement {
  @property({ type: String }) title = 'My app';

  static styles =[ BootstrapCssMin,css`
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

    .shopping-card{
      z-index:2;
      position:fixed;
      bottom:30px;
      right:30px;
      cursor:pointer;
    }

    svg{
      height:100px;
      width:100px;
    }
  `];

  constructor() {
    super();
  }

  render() {
    return html`
        ${store.showShoppingCard==true?html`
        <modal-element header="Cars In The Card">     
          <shopping-card></shopping-card>
        </modal-element>
      `:html``}

      <slot></slot>

      <div class="shopping-card" @click="${this.showcard}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
          <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"/>
        </svg>
      </div>    
    `;
  }

  showcard(){
    store.showShoppingCard=true;//!store.showShoppingCard;
  }
}
