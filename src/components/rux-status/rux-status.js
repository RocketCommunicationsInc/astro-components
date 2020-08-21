import { LitElement, html, css } from 'lit-element';
import '@astrouxds/rux-assets/css/astro.tokens.css';

export class RuxStatus extends LitElement {
  static get properties() {
    return {
      status: {
        type: String,
      },
    };
  }

  /**
   * * ! NOTE: This extraneous div is required for Firefox browsers prior to v64
   * * it would be a cleaner implementation to drop the render function and remove
   * * the div selector from the CSS
   */

  render() {
    return html`
      <div></div>
    `;
  }

  static get styles() {
    return css`
      :host div {
        display: block;

        height: 1rem;
        width: 1rem;

        margin: 0.125rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position-x: 1rem;

        background-image: var(
          --statusSymbols,
          url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAgCAMAAABzRoe3AAAAgVBMVEUAAAD/tQv/swL/OTn/PDzftl9W8QBW8AAtzP8v0P9Z9gD/tAP/uQb/tAItzf8tzf+eqK2ep60uzP9X8QCfqK4uzf8uzf9X8QAuzP9X8ACeqK4vzP9Y8QAuzv9Y8gCeqq4wz/8xzv9A1f9Y8QD/tAP86DpW8AD/swL/ODgtzP+ep63tgXPUAAAAJXRSTlMAGNfAQAv98/IdG8Io52zz8+DZ2dC9trabm4F+a05OQjAaDG6dAJcYcwAAAfdJREFUWMPtmNlygkAQRScyrBp3QTZFNBj8/w9MCGI3dBOHMg9jyvOmVFnn1HUSULx4LibjN/HMTN7Po2cu+PY/cwUfPYg2XhKsbHsVJJ5gcaf+cjZb+lN3qJjxyWIw/lAwNMALreKKFTIJh215Y3sYFiD5AEn9oWBowM4uEPau65A6JcJJ/2ACg/pDwdCAo1W0sI6ixbTsMH18Akn9oWBgwK7xh4LWBmlJSB+dwCD+pEA5wLMLgo3OwcGpvzhxludZfH1Bz4EZrefzdWSqTSCJPylQDggLhhA+oD6/G7d+5W7qk9yV3C8uPyz2KhMYxJ8UKAd4Fhdg3SZwa3/4wLrA7fhfbuwVJpDEnxQoByQFS9I6wQ7ydR16js0FBCzMuxMY1J8WqAYEfEDQXPcr3RjbxNU7vsBEF0R0dwJJ/LkCxYAVH7Bqri8r3QzbZNU7S4FZ44B1/ymgA4zPfZwUA2w+wG6uzyrdHMvk1TszgZnjgLmgyL4T8Dbq8R+bWgUIgw4ABby/Vl8hIckAUMD7a3WIYQIYgC0Af73+jOIJpKAF1F+vf2QwAQxAC7C/ZrcSeAIpegvAX7ObOZgABiAF2F+322mYAAagBeCv2wMNTEAGIAWVv3aPlDABDMAW1P7aPdQjDBiALaj89ftZBSGl+LXgZIoXL/4VXyptNwzuHR/QAAAAAElFTkSuQmCC')
        );
      }

      *[hidden] {
        display: none !important;
      }

      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }

      :host([status='off']) div {
        background-position-x: -5rem;
      }

      :host([status='standby']) div {
        background-position-x: -4rem;
      }

      :host([status='normal']) div {
        background-position-x: -3rem;
      }

      :host([status='caution']) div {
        background-position-x: -2rem;
      }

      :host([status='serious']) div {
        background-position-x: -1rem;
      }

      :host([status='critical']) div {
        background-position-x: 0;
      }
    `;
  }
}

customElements.define('rux-status', RuxStatus);
