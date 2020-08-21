import { LitElement, html } from 'lit-element';

import moment from 'moment';
import 'moment-timezone';
import '@astrouxds/rux-assets/css/astro.tokens.css';


export class RuxClock extends LitElement {
  static get properties() {
    return {
      aos: {
        type: String,
      },
      los: {
        type: String,
      },
      timezone: {
        type: String,
        reflect: true,
      },
      hideTimezone: {
        type: Boolean,
      },
      hideDate: {
        type: Boolean,
      },
      small: {
        type: Boolean,
      },
      time: {
        type: String,
      },
      dayOfYear: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    // register military timezone designations in Zone object format so that devs can use single-character abbreviation
    // note that moment does not require these to be case-sensitive
    moment.tz.add([
      'A|A|10|0||',
      'B|B|20|0||',
      'C|C|30|0||',
      'D|D|40|0||',
      'E|E|50|0||',
      'F|F|60|0||',
      'G|G|70|0||',
      'H|H|80|0||',
      'I|I|90|0||',
      'K|K|a0|0||',
      'L|L|b0|0||',
      'M|M|c0|0||',
      'N|N|-10|0||',
      'O|O|-20|0||',
      'P|P|-30|0||',
      'Q|Q|-40|0||',
      'R|R|-50|0||',
      'S|S|-60|0||',
      'T|T|-70|0||',
      'U|U|-80|0||',
      'V|V|-90|0||',
      'W|W|-a0|0||',
      'X|X|-b0|0||',
      'Y|Y|-c0|0||',
      'Z|Z|0|0||',
    ]);


    this.timezone = 'UTC';
    this.hideTimezone = false;
    this.hideDate = false;

    this.updateTime();
  }

  /*
    Lifecycle hooks should occur after the constructor and before custom methods
  */


  connectedCallback() {
    super.connectedCallback();

    this._timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  disconnectedCallback() {
    clearTimeout(this._timer);
    super.disconnectedCallback();
  }

  /*
    Public functions should occur after lifecycle hooks
  */

  /*
    Private functions should occur after public functions
  */
  updateTime() {
    this.time = moment().tz(this.timezone).format(`HH:mm:ss ${this.hideTimezone ? '' : 'z'}`);
    this.dayOfYear = moment().tz(this.timezone).dayOfYear();
  }

  /*
    Template and styles blocks should appear as the very last code blocks
  */
  render() {
    return html`
      <style>
        :host {
          display: flex;
          margin: 0 1rem;

          color: var(--clockTextColor, rgb(255, 255, 255));

          font-size: 1.15rem;

          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .rux-clock__segment {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .rux-clock__segment__value {
          display: flex;
          align-items: center;
          font-family: var(--fontFamilyMono, 'Roboto Mono', monospace);
          font-weight: 700;

          border: 1px solid var(--clockBorderColor, rgb(40, 63, 88));

          background-color: var(--clockBackgroundColor, rgb(20, 32, 44));
          margin-bottom: 0.25rem;

          white-space: nowrap;
          overflow-y: hidden;
          text-overflow: ellipsis;
        }

        .rux-clock__segment__value {
          font-size: 1.75rem;
          height: 2.75rem;
          padding: 0 0.75rem;
        }

        :host([small]) .rux-clock__segment__value {
          height: 2.75rem;
          padding: 0 0.75rem;
          font-size: 1.15rem;
          font-weight: 500;
        }

        .rux-clock__segment__label {
          font-size: 0.875rem;
        }

        .rux-clock__day-of-the-year .rux-clock__segment__value {
          border-right: none;
        }

        .rux-clock__segment--secondary .rux-clock__segment__value {
          font-weight: 100;
        }

        .rux-clock__aos {
          margin-left: 1em;
        }

        .rux-clock__los {
          margin-left: 0.5em;
        }
      </style>

      ${!this.hideDate
        ? html`
            <div class="rux-clock__segment rux-clock__day-of-the-year">
              <div class="rux-clock__segment__value" aria-labelledby="rux-clock__day-of-year-label">
                ${this.dayOfYear}
              </div>
              <div class="rux-clock__segment__label" id="rux-clock__day-of-year-label">Date</div>
            </div>
          `
        : ''}

      <div class="rux-clock__segment rux-clock__time">
        <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label">
          ${this.time}
        </div>
        <div class="rux-clock__segment__label" id="rux-clock__time-label">
          Time
        </div>
      </div>

      ${this.aos
        ? html`
            <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__aos">
              <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label--aos">
                ${moment(this.aos).tz(this.timezone).format('HH:mm:ss')}
              </div>
              <div class="rux-clock__segment__label" id="rux-clock__time-label--aos">
                AOS
              </div>
            </div>
          `
        : ''}
      ${this.los
        ? html`
            <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__los">
              <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label--los">
              ${moment(this.los).tz(this.timezone).format('HH:mm:ss')}
              </div>
              <div class="rux-clock__segment__label" id="rux-clock__time-label--los">
                LOS
              </div>
            </div>
          `
        : ''}
    `;
  }

  /* uses the lit-scss-loader to import external CSS */
  /* static get styles() {
    return css`
      ${style}
    `;
  } */
}
customElements.define('rux-clock', RuxClock);
