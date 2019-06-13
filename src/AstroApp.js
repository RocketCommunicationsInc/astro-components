import { html, css, LitElement } from 'lit-element';
/* eslint-disable no-unused-vars */
import { RuxClock } from './components/rux-clock/rux-clock';
import { RuxPopUpMenu } from './components/rux-pop-up-menu/rux-pop-up-menu';
/* eslint-enable no-unused-vars */

export default class AstroApp extends LitElement {
  static get styles() {
    return css`
      #demo {
        padding: 5%;
        display: flex;
        justify-content: center;
      }

      #pop-demo {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
      }

      button {
        display: inline-block;
        position: absolute;
      }

      #tl {
        top: 0;
        left: 0;
      }

      #tr {
        top: 0;
        right: 0;
      }

      #bl {
        bottom: 0;
        left: 0;
      }

      #br {
        bottom: 0;
        right: 0;
      }

      #tc {
        top: 0;
        right: 50vw;
      }

      #bc {
        bottom: 0;
        right: 50vw;
      }
    `;
  }

  static get properties() {
    return {
      heading: { type: String },
      data: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.heading = 'Hello world!';
    this.data = [
      {
        id: '1',
        label: 'Item 1',
      },
      {
        id: '2',
        label: 'Item 2',
      },
      {
        id: '3',
        label: 'Item 4',
        role: 'seperator',
      },
    ];
  }

  render() {
    return html`
      <div id="demo">
        <rux-clock></rux-clock>
        <div id="pop-demo">
          <button id="tl">tl</button>
          <button id="tr">tr</button>
          <button id="bl">bl</button>
          <button id="br">br</button>
          <button id="tc">tv</button>
          <button id="bc">bc</button>
        </div>

        <rux-pop-up-menu .data="${this.data}"></rux-pop-up-menu>
      </div>
    `;
  }
}
