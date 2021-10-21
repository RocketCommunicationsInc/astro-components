import { LitElement, html } from 'lit-element'

export class RuxGlobalStatusBar extends LitElement {
    static get properties() {
        return {
            appname: String,
            version: String,
            theme: {
                type: String,
            },
        }
    }
    render() {
        return html`
            <style>
                :host {
                    display: block;
                    position: sticky;

                    top: 0;
                    left: 0;

                    height: 110px;
                    width: 100%;

                    padding: 0 1.875rem;

                    box-sizing: border-box;
                    background-color: var(--globalAppHeader);

                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;

                    contain: content; /* This improves CSS performance see: https://developers.google.com/web/updates/2016/06/css-containment */
                }

                header {
                    display: flex;

                    height: 100%;
                    width: 100%;

                    /* padding: 0 2.5rem; */

                    align-items: center;
                    justify-content: space-between;

                    box-sizing: border-box;
                }

                /* 
            The hidden attribute on an element gets ignored when
            a display property is added to the element to be hidden.
            Explicitly setting the display property is a work around
            as would be a wrapper div
          */
                .app-meta[hidden] {
                    display: none !important;
                }

                .app-meta {
                    display: block;
                    padding: 0;
                    margin: 0;
                    color: var(--inputBackground);
                }

                .app-meta h1 {
                    font-size: 2.125rem;
                    font-weight: 400;
                }

                .app-version {
                    font-size: 1.1875rem;
                    font-weight: 300;
                    /* color: rgba(255, 255, 255, 0.298039); */

                    margin-left: 0.5em;
                }
            </style>

            <header>
                <div class="app-meta" ?hidden="${!this.appname}">
                    <h1>
                        ${this.appname}<span class="app-version"
                            >${this.version}</span
                        >
                    </h1>
                </div>

                <slot></slot>
            </header>
        `
    }
    constructor() {
        super()
    }
    connectedCallback() {
        super.connectedCallback()
        // if the user hasn’t defined an appname then explicitly
        // set the appname property to false to hide the app-meta
        // section from being included in the flex DOM
        if (!this.appname) this.appname = false
    }
    ready() {
        super.ready()
    }
}
customElements.define('rux-global-status-bar', RuxGlobalStatusBar)
