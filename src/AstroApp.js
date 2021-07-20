import { html, css, LitElement } from 'lit-element'
/* eslint-disable no-unused-vars */
import { RuxClock } from './components/rux-clock/rux-clock'
import { RuxPopUpMenu } from './components/rux-pop-up-menu/rux-pop-up-menu'
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
                height: 100%;
                width: 100%;
            }

            button {
                display: inline-block;
                position: absolute;
            }

            #tl {
                top: 2rem;
                left: 2rem;
            }

            #tr {
                top: 2rem;
                right: 2rem;
            }

            #bl {
                bottom: 2rem;
                left: 2rem;
            }

            #br {
                bottom: 2rem;
                right: 2rem;
            }

            #tc {
                position: relative;
                top: 22rem;
                left: 35rem;
                height: 32px;
            }

            #bc {
                bottom: 2rem;
                right: 50vw;
            }
        `
    }

    static get properties() {
        return {
            heading: { type: String },
            data: {
                type: Array,
            },
        }
    }

    constructor() {
        super()
        this.heading = 'Hello world!'
        this.data = []
        this._data1 = [
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
                role: 'separator',
            },
        ]

        this._data2 = [
            {
                id: '1',
                label: 'Second 1',
            },
            {
                id: '2',
                label: 'Second 2',
            },
        ]
    }

    render() {
        return html`
            <div id="demo">
                <rux-clock></rux-clock>
                <div id="pop-demo">
                    <button
                        aria-controls="popup-menu-1"
                        aria-haspopup="true"
                        class="button"
                        id="tl"
                    >
                        tl
                    </button>
                    <button
                        aria-controls="popup-menu-2"
                        aria-haspopup="true"
                        class="button"
                        id="tr"
                    >
                        tr
                    </button>
                    <button
                        aria-controls="popup-menu-3"
                        aria-haspopup="true"
                        class="button"
                        id="bl"
                    >
                        bl
                    </button>
                    <button
                        aria-controls="popup-menu-4"
                        aria-haspopup="true"
                        class="button"
                        id="br"
                    >
                        br
                    </button>
                    <button
                        aria-controls="popup-menu-5"
                        aria-haspopup="true"
                        class="button"
                        id="tc"
                    >
                        tv
                    </button>
                    <button
                        aria-controls="popup-menu-6"
                        aria-haspopup="true"
                        class="button"
                        id="bc"
                    >
                        bc
                    </button>
                </div>

                <rux-pop-up-menu
                    id="popup-menu-1"
                    .data="${this._data1}"
                ></rux-pop-up-menu>
                <rux-pop-up-menu
                    id="popup-menu-2"
                    .data="${this._data1}"
                ></rux-pop-up-menu>
                <rux-pop-up-menu
                    id="popup-menu-3"
                    .data="${this._data1}"
                ></rux-pop-up-menu>
                <rux-pop-up-menu
                    id="popup-menu-4"
                    .data="${this._data1}"
                ></rux-pop-up-menu>
                <rux-pop-up-menu
                    id="popup-menu-5"
                    .data="${this._data1}"
                ></rux-pop-up-menu>
                <rux-pop-up-menu
                    id="popup-menu-6"
                    .data="${this._data1}"
                ></rux-pop-up-menu>
            </div>
        `
    }
}
