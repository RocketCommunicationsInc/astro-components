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
        display: flex;
        position: relative;
      
        justify-content: space-between;
        align-items: center;
      }
      
      .rux-progress progress[value] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      
        background: #21384f;
        border: 2px solid #0e5996;
        border-radius: 9px;
        height: 20px;
        width: 100%;
      }
      
      .rux-progress__value {
        margin-left: 1rem;
      }
      
      .rux-progress__value::after {
        content: "%";
      }
      
      .rux-progress progress[value]::-webkit-progress-bar {
        background-color: transparent;
        border-radius: 10px;
        height: 16px;
      }
      
      .rux-progress progress[value]::-webkit-progress-value {
        border-radius: 10px;
        height: 14px;
        margin: 1px 0 0 1px;
      
        max-width: calc(100% - 1px);
      
        background: #5cb3ff;
      
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      
        filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 1));
      }
      
      .rux-progress progress[value]::-moz-progress-bar {
        border-radius: 9px;
        margin: 1px 0 0 1px;
        height: 14px;
      
        max-width: 90%;
      
        background: #5cb3ff;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      
        filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 1));
      }
      
      /* Indeterminate */
      .rux-progress progress:indeterminate {
        -webkit-appearance: none;
      
        position: relative;
      
        height: 4rem !important;
        width: 4rem !important;
      
        background-color: transparent;
        outline: 1px solid red;
      
        /* background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%/* 20%20%20%3Cpath%20d%3D%22M32%2064C14.327%2064%200%2049.673%200%2032%200%2014.327%2014.327%200%2032%200c17.673%200%2032%2014.327%2032%2032%200%2017.673-14.327%2032-32%2032zm0-6c14.36%200%2026-11.64%2026-26S46.36%206%2032%206%206%2017.64%206%2032s11.64%2026%2026%2026z%22%20id%3D%22a%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cfilter%20x%3D%22-3.1%25%22%20y%3D%22-3.1%25%22%20width%3D%22106.2%25%22%20height%3D%22106.2%25%22%20filterUnits%3D%22objectBoundingBox%22%20id%3D%22b%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CfeGaussianBlur%20stdDeviation%3D%221.5%22%20in%3D%22SourceAlpha%22%20result%3D%22shadowBlurInner1%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CfeOffset%20dy%3D%221%22%20in%3D%22shadowBlurInner1%22%20result%3D%22shadowOffsetInner1%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CfeComposite%20in%3D%22shadowOffsetInner1%22%20in2%3D%22SourceAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%20result%3D%22shadowInnerInner1%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CfeColorMatrix%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%20in%3D%22shadowInnerInner1%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Ffilter%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%226.903%25%22%20x2%3D%2250%25%22%20y2%3D%22100%25%22%20id%3D%22c%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%2360b5fc%22%20offset%3D%220%25%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23010F1B%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Cuse%20fill%3D%22%23313234%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%0A%20%20%20%20%3Cuse%20filter%3D%22url(%23b)%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%0A%20%20%20%20%3Cg%20id%3D%22d%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M50.908%207.236l-2.358%203.245A26.894%2026.894%200%200%200%2031%204C16.088%204%204%2016.088%204%2031s12.088%2027%2027%2027c1.129%200%202.242-.07%203.334-.204l4.435%203.222A30.997%2030.997%200%200%201%2031%2062C13.88%2062%200%2048.12%200%2031%200%2013.88%2013.88%200%2031%200c7.579%200%2014.522%202.72%2019.908%207.236z%22%20fill%3D%22url(%23c)%22%20transform%3D%22translate(1%201)%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M50.683%2011.836c.908%200%201.681-.306%201.926-1.134.053-.18.17-.322.17-.519C52.779%209.078%2052.105%208%2051%208a2%202%200%200%200-2%202c0%201.105.579%201.836%201.683%201.836z%22%20fill%3D%22%2360b5fc%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3CanimateTransform%20xlink%3Ahref%3D%22%23d%22%20attributeName%3D%22transform%22%20attributeType%3D%22XML%22%20type%3D%22rotate%22%20from%3D%220%2032%2032%22%20to%3D%22360%2032%2032%22%20dur%3D%221.2s%22%20repeatCount%3D%22indefinite%22%20fill%3D%22freeze%22%20restart%3D%22whenNotActive%22%2F%3E%0A%3C%2Fsvg%3E%0A"); */
        /* background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23C6CCD1%22%20d%3D%22M3%203h6v6H3z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"); */
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%09%3Cdefs%3E%0A%09%09%09%3Cpath%20d%3D%22M32%2064C14.327%2064%200%2049.673%200%2032%200%2014.327%2014.327%200%2032%200c17.673%200%2032%2014.327%2032%2032%200%2017.673-14.327%2032-32%2032zm0-6c14.36%200%2026-11.64%2026-26S46.36%206%2032%206%206%2017.64%206%2032s11.64%2026%2026%2026z%22%20id%3D%22a%22%2F%3E%0A%09%09%09%3Cfilter%20x%3D%22-3.1%25%22%20y%3D%22-3.1%25%22%20width%3D%22106.2%25%22%20height%3D%22106.2%25%22%20filterUnits%3D%22objectBoundingBox%22%20id%3D%22b%22%3E%0A%09%09%09%09%3CfeGaussianBlur%20stdDeviation%3D%221.5%22%20in%3D%22SourceAlpha%22%20result%3D%22shadowBlurInner1%22%2F%3E%0A%09%09%09%09%3CfeOffset%20dy%3D%221%22%20in%3D%22shadowBlurInner1%22%20result%3D%22shadowOffsetInner1%22%2F%3E%0A%09%09%09%09%3CfeComposite%20in%3D%22shadowOffsetInner1%22%20in2%3D%22SourceAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%20result%3D%22shadowInnerInner1%22%2F%3E%0A%09%09%09%09%3CfeColorMatrix%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%20in%3D%22shadowInnerInner1%22%2F%3E%0A%20%20%20%20%09%3C%2Ffilter%3E%0A%09%09%09%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%226.903%25%22%20x2%3D%2250%25%22%20y2%3D%22100%25%22%20id%3D%22c%22%3E%0A%09%09%09%09%3Cstop%20stop-color%3D%22%2360b5fc%22%20offset%3D%220%25%22%2F%3E%0A%09%09%09%09%3Cstop%20stop-color%3D%22%23010F1B%22%20stop-opacity%3D%220%22%20offset%3D%22100%25%22%2F%3E%0A%09%09%09%3C%2FlinearGradient%3E%0A%09%3C%2Fdefs%3E%0A%20%20%3Cuse%20fill%3D%22%23313234%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%0A%09%0A%09%3Cg%20id%3D%22progress%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%09%3Cpath%20d%3D%22M50.908%207.236l-2.358%203.245A26.894%2026.894%200%200%200%2031%204C16.088%204%204%2016.088%204%2031s12.088%2027%2027%2027c1.129%200%202.242-.07%203.334-.204l4.435%203.222C36.286%2061.66%2033.683%2062%2031%2062%2013.88%2062%200%2048.12%200%2031%200%2013.88%2013.88%200%2031%200c7.579%200%2014.522%202.72%2019.908%207.236z%22%20fill%3D%22%23f00%22%20transform%3D%22translate(1%201)%22%2F%3E%0A%20%20%20%20%09%3Cpath%20d%3D%22M50.683%2011.836c.908%200%201.681-.306%201.926-1.134.053-.18.17-.322.17-.519C52.779%209.078%2052.105%208%2051%208a2%202%200%200%200-2%202c0%201.105.579%201.836%201.683%201.836z%22%20fill%3D%22%2360b5fc%22%2F%3E%0A%09%3C%2Fg%3E%0A%09%3CanimateTransform%20%0A%09%09xlink%3Ahref%3D%22%23progress%22%0A%09%09attributeName%3D%22transform%22%20%0A%09%09attributeType%3D%22XML%22%0A%09%09type%3D%22rotate%22%0A%09%09from%3D%220%2032%2032%22%0A%09%09to%3D%22360%2032%2032%22%20%0A%09%09dur%3D%221.2s%22%0A%09%09repeatCount%3D%22indefinite%22%0A%09%09fill%3D%22freeze%22%20%0A%09%09restart%3D%22whenNotActive%22%2F%3E%0A%3C%2Fsvg%3E%0A");
      }
      
      .rux-progress progress:indeterminate::-moz-progress-value,
      .rux-progress progress:indeterminate::-moz-progress-bar {
        background-color: transparent;
      }
      .rux-progress progress:indeterminate::-webkit-progress-value,
      .rux-progress progress:indeterminate::-webkit-progress-bar {
        background-color: transparent;
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
