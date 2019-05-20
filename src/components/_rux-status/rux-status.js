import { LitElement, html } from "lit-element";

export class RuxStatus extends LitElement {
  static get properties() {
    return {
      status: {
        type: String
      }
    };
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
          padding: 0;

          font-size: 1rem;

          line-height: 1;
          padding: 0;
          vertical-align: middle;
          text-align: center;

          height: 1rem;
          width: 1rem;

          margin: 0.125rem;
        }

        *[hidden] {
          display: none !important;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        :host([status="off"]) {
          background-image: var(
            --statusOff,
            url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%223%22%20fill%3D%22%238C9AA3%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A")
          );
        }

        :host([status="standby"]) {
          background-image: var(
            --statusStandby,
            url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%224.5%22%20fill%3D%22none%22%20stroke%3D%22%231EDCFF%22%20stroke-width%3D%223%22%2F%3E%0A%3C%2Fsvg%3E%0A")
          );
        }

        :host([status="normal"]) {
          background-image: var(
            --statusNormal,
            url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%226%22%20fill%3D%22%2300E600%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A")
          );
        }

        :host([status="caution"]) {
          background-image: var(
            --statusCaution,
            url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFD800%22%20fill-rule%3D%22evenodd%22%20d%3D%22M2%204H14V12H2z%22%2F%3E%0A%3C%2Fsvg%3E%0A")
          );
        }

        :host([status="serious"]) {
          background-image: var(
            --statusSerious,
            url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FFAB00%22%20fill-rule%3D%22evenodd%22%20d%3D%22M3%203H12V12H3z%22%2F%3E%0A%3C%2Fsvg%3E%0A")
          );
          transform: rotate(45deg);
        }

        :host([status="critical"]) {
          background-image: var(
            --statusCritical,
            url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22red%22%20fill-rule%3D%22evenodd%22%20d%3D%22M15%2013.667L1%2013.667%208%202z%22%2F%3E%0A%3C%2Fsvg%3E%0A")
          );
          transform: rotate(180deg);
          background-position: 0 -1px;
        }
      </style>

      <!-- Use Advanced Status Template is any property is set //-->
      <div class="rux-status rux-status--${this.status}"></div>
    `;
  }
}

customElements.define("rux-status", RuxStatus);
