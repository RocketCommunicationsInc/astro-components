import { LitElement, html } from 'lit-element'

export class RuxAccordion extends LitElement {
    static get properties() {
        return {
            open: {
                type: Boolean,
                reflect: true,
            },
        }
    }
    constructor() {
        super()
        this.open = false
    }

    render() {
        return html`
            <style>
                :host {
                    box-sizing: border-box;

                    width: 100%;
                    padding: 0;
                    margin: 0;

                    font-size: 1rem;

                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                *,
                *:before,
                *:after {
                    box-sizing: inherit;
                }

                .rux-accordion__item {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    align-content: stretch;
                    margin: 0;
                    border-style: solid;
                    border-color: var(--accordionBorderColor, rgb(40, 63, 88));
                    border-width: var(--accordionBorderWidth, 0 0 1px 0);
                }

                .rux-accordion__label {
                    flex-grow: 1;
                    padding: var(
                        --accordionLabelPadding,
                        0.5rem 0.5rem 0.5rem 1rem
                    );
                    display: block;
                    color: var(--accordionColor, rgb(255, 255, 255));
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    background: var(
                        --accordionClosedLabelBackground,
                        rgb(32, 50, 70)
                    );
                    pointer-events: all;
                    transition: background 0.125s;
                }

                .rux-accordion__label::-webkit-details-marker {
                    display: none;
                }

                .rux-accordion__content {
                    padding: var(--accordionContentPadding, 1rem);
                    color: var(--accordionColor, rgb(255, 255, 255));
                    white-space: normal;
                    overflow: hidden;
                    background: var(
                        --accordionContentBackground,
                        rgb(20, 32, 44)
                    );
                    display: flex;
                    align-items: center;
                }

                .rux-accordion__item[open] > .rux-accordion__label {
                    background: var(
                        --accordionOpenLabelBackground,
                        rgb(40, 63, 88)
                    );
                }

                .rux-accordion__label:hover {
                    background: var(
                        --accordionHoverLabelBackground,
                        rgb(46, 103, 153)
                    );
                }
            </style>

            <details ?open="${this.open}" class="rux-accordion__item">
                <summary class="rux-accordion__label">
                    <slot name="label"></slot>
                </summary>
                <div class="rux-accordion__content">
                    <slot name="content"></slot>
                </div>
            </details>
        `
    }
}
customElements.define('rux-accordion', RuxAccordion)
