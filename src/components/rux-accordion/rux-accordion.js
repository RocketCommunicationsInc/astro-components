import { LitElement, html } from 'lit-element';

/** Class representing a single Accordion instance. */
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxAccordion extends LitElement {
  static get properties() {
    return {
      open: {
        type: Boolean,
        reflect: true,
      },
    };
  }
  constructor() {
    super();
    this.open = false;
  }

  render() {
    return html`
      <style>

      :host,
      .rux-accordion {
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
        border-color: var(--accordionItemBorderColor, rgb(40, 63, 88));
        border-width: var(--accordionItemBorderWidth, 0 0 1px 0);
      }
      
      .rux-accordion__label {
        flex-grow: 1;
        padding: var(--accordionLabelPadding, .5rem .5rem .5rem 1rem);
        display: block;
        color: var(--accordionLabelColor, rgb(255,255,255));

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        background: var(--accordionClosedLabelBackground, transparent);
        pointer-events: all;
        transition: background .125s;
      }

      .rux-accordion__label::-webkit-details-marker {
        display:none;
      }
      
      .rux-accordion__content {
        padding: var(--accordionContentPadding, 1rem);
        color: var(--accordionContentColor, rgb(255,255,255));
        white-space: normal;
        overflow: hidden;
        background: var(--accordionContentBackground, rgb(20, 32, 44));
        display: flex;
        align-items: center;
      }
      
      .rux-accordion__label:hover {
        background: var(--accordionHoverLabelBackground,  gb(40, 63, 88));
      }

      [open] .rux-accordion__label {
        background: var(--accordionOpenLabelBackground, rgb(40, 63, 88));
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
        
    `;
  }
}
customElements.define('rux-accordion', RuxAccordion);
