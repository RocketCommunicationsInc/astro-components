import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxProgress extends PolymerElement {
  static get properties() {
    return {
      max: {
        type: Number,
        value: 100
      },
      value: Number,
      label: {
        type: Boolean,
        value: false
      }
    };
  }
  static get template() {
    return html`
      <style>
      .rux-progress {
        --progressPadding: 2px 0 0 2px;
        --progressRadius: 10px;
        --progressHeight: 14px;
        --progressWidth: calc(100% - 4px);
      
        display: flex;
        position: relative;
      
        justify-content: space-between;
        align-items: center;

        outline: 1px solid red;
      }
      
      .rux-progress progress[value] {
        appearance: none;
      
        /* background: #21384f; */
        background-color: var(
          --progressDeterminateTrackBackgroundColor,
          rgb(30, 47, 66)
        );
        border: 1px solid var(--progressDeterminateTrackBorderColor, rgb(20, 32, 44));
        border-radius: var(--progressRadius);
        height: 20px;
        width: 100%;
      }
      
      .rux-progress__value {
        margin-left: 0.25rem;
        width: 5.5rem;
        text-align: right;
        font-size: 24px;
        color: var(--controlLabelColor, #fff);
      }
      
      .rux-progress progress[value]::-webkit-progress-bar {
        background-color: transparent;
      }
      
      .rux-progress progress[value]::-webkit-progress-value {
        border-radius: var(--progressRadius);
      
        height: var(--progressHeight);
        margin: var(--progressPadding);
        max-width: var(--progressWidth);
      
        background: var(--progressDeterminateBarBackgroundColor, rgb(77, 172, 255));
      }
      
      .rux-progress progress[value]::-ms-fill {
        border-radius: var(--progressRadius);
      
        height: var(--progressHeight), 14px;
        margin: var(--progressPadding, 2px);
        max-width: var(--progressWidth);
      
        background: var(--progressDeterminateBarBackgroundColor, rgb(77, 172, 255));
      }
      
      .rux-progress progress[value]::-moz-progress-bar {
        border-radius: var(--progressRadius);
      
        margin: 2px 2px 0 2px;
        height: var(--progressHeight);
        max-width: var(--progressWidth);
      
        background: var(--progressDeterminateBarBackgroundColor, rgb(77, 172, 255));
      }
      
      /* Indeterminate */
      .rux-progress progress:indeterminate {
        -webkit-appearance: none;
      
        position: relative;
      
        height: 5rem;
        width: 5rem;
        background-color: transparent;
        outline: 1px solid rgba(0, 255, 0, 0.2);
        border: none;
      
        /*
        background-image: var(
          --progressIndeterminate,
          url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2055%2062%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22a%22%20x1%3D%2295.084%25%22%20x2%3D%2250%25%22%20y1%3D%2215.688%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%234DACFF%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23333%22%20stop-opacity%3D%220%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22url(%23a)%22%20d%3D%22M50.282%206.725c.07.045.139.095.204.15l.766.643a2%202%200%200%201-2.57%203.065l-.128-.107-.004.005A26.894%2026.894%200%200%200%2031%204C16.088%204%204%2016.088%204%2031s12.088%2027%2027%2027c1.129%200%202.242-.07%203.334-.204l4.435%203.222C36.286%2061.66%2033.683%2062%2031%2062%2013.88%2062%200%2048.12%200%2031%200%2013.88%2013.88%200%2031%200c7.288%200%2013.99%202.515%2019.282%206.725z%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2251%22%20cy%3D%2210%22%20r%3D%224%22%20fill%3D%22%234DACFF%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E")
        );
        */
       
        background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2055%2062%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22a%22%20x1%3D%2295.084%25%22%20x2%3D%2250%25%22%20y1%3D%2215.688%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%234DACFF%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23333%22%20stop-opacity%3D%220%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22url(%23a)%22%20d%3D%22M50.282%206.725c.07.045.139.095.204.15l.766.643a2%202%200%200%201-2.57%203.065l-.128-.107-.004.005A26.894%2026.894%200%200%200%2031%204C16.088%204%204%2016.088%204%2031s12.088%2027%2027%2027c1.129%200%202.242-.07%203.334-.204l4.435%203.222C36.286%2061.66%2033.683%2062%2031%2062%2013.88%2062%200%2048.12%200%2031%200%2013.88%2013.88%200%2031%200c7.288%200%2013.99%202.515%2019.282%206.725z%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2251%22%20cy%3D%2210%22%20r%3D%224%22%20fill%3D%22%234DACFF%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E");
        background-repeat: no-repeat;
        background-position: center center;
      
        animation-name: spin;
        animation-duration: 1.367s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      
      /* Removes the default animation from IE */
      .rux-progress progress:indeterminate::-ms-fill {
        animation-name: none;
      }
      
      .rux-progress progress:indeterminate::-moz-progress-bar {
        background-color: transparent;
      }
      
      .rux-progress progress:indeterminate::-webkit-progress-value,
      .rux-progress progress:indeterminate::-webkit-progress-bar {
        background-color: transparent;
      }
      
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
</style>      

      <div class="rux-progress">
        <progress value="[[value]]" max=[[max]]></progress>
        <div class="rux-progress__value" hidden="[[!label]]">[[value]]</div>
      </div>`;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  ready() {
    super.ready();
  }
}
customElements.define("rux-progress", RuxProgress);
