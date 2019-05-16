import { LitElement, html } from 'lit-element';
import { templateCaches } from 'lit-html';

export class RuxIcon extends LitElement {
  static get properties() {
    return {
      icon: {
        type: String,
      },
      size: {
        type: Number,
      },
      color: {
        type: String,
      },
      library: {
        type: String,
      },
      label: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    this.size = 128;

    this.library = '';

    this.defaultIconSet = `
    <svg id="rux-icons" xmlns="http://www.w3.org/2000/svg" style="display: none !important" height="128" width="128" viewBox="0 0 128 128">
      <g id="altitude" fill-rule="evenodd"><path d="M36.453 17.339l5.726 9.056c.908 1.436.51 3.357-.888 4.29-1.398.932-3.268.524-4.177-.912l-5.76-9.11c-6.78 4.966-12.368 11.417-16.263 18.86l10.048 4.725c1.567.737 2.245 2.616 1.514 4.196a3.12 3.12 0 0 1-4.16 1.527l-9.993-4.7a53.55 53.55 0 0 0-3.518 19.144c0 1.777.087 3.543.258 5.294l10.784-1.451c1.706-.23 3.284.909 3.524 2.543.24 1.634-.949 3.146-2.656 3.375l-10.737 1.445a53.445 53.445 0 0 0 5.677 15.057l97.88-.767a53.422 53.422 0 0 0 5.225-14.143l-11.83-1.592c-1.706-.23-2.895-1.74-2.655-3.375.24-1.634 1.818-2.773 3.524-2.543l11.892 1.6c.18-1.8.272-3.615.272-5.443 0-18.582-9.465-34.998-23.923-44.85l-6.454 10.208c-.908 1.436-2.779 1.844-4.177.912-1.399-.933-1.796-2.854-.888-4.29l6.309-9.978c-7.401-3.937-15.815-6.274-24.761-6.535v11.47c0 1.71-1.257 3.098-2.807 3.098s-2.807-1.387-2.807-3.099V9.991a55.985 55.985 0 0 0-24.179 7.348zm82.796 79.433l-1.217 2.043-107.507.843-1.25-2.022A61.916 61.916 0 0 1 0 64.969C0 30.189 28.656 2 64 2s64 28.19 64 62.969a61.904 61.904 0 0 1-8.75 31.803z" /><path d="M68.983 57.168c22.401-8.452 34.588-12.622 36.56-12.51-.315 1.526-11.265 8.613-32.848 21.263-.658 4.478-4.594 7.92-9.352 7.92-5.218 0-9.448-4.142-9.448-9.25 0-5.11 4.23-9.25 9.448-9.25a9.54 9.54 0 0 1 5.64 1.827zM32 127a3 3 0 0 1-3-3v-16a3 3 0 0 1 3-3h62a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H32z" /></g>
      <g id="antenna" fill-rule="nonzero"><path d="M46.752 38.215c0-8.799 6.951-15.759 15.641-15.759 8.422 0 15.641 6.96 15.641 15.76 0 6.458-4.01 11.812-9.384 14.182V128H56.137V52.398c-5.642-2.102-9.385-7.724-9.385-14.183zM28.453-.503l5.728 5.728a41.868 41.868 0 0 0-2.019 1.89c-16.189 16.189-16.124 42.502.146 58.772.66.66 1.337 1.294 2.029 1.9l-5.7 5.7a47.946 47.946 0 0 1-4.155-3.7c-18.44-18.44-18.514-48.262-.166-66.61a47.242 47.242 0 0 1 4.137-3.68z" /><path d="M40.111 63.519c-12.635-14.545-12.69-36.205-.126-50.687l5.035 5.035c-8.902 12.011-8.86 28.586.1 40.642l-5.009 5.01zM96.333 73.485l-5.728-5.727a41.868 41.868 0 0 0 2.019-1.89c16.19-16.19 16.124-42.503-.146-58.773a42.495 42.495 0 0 0-2.028-1.9l5.699-5.7a47.946 47.946 0 0 1 4.155 3.701c18.44 18.44 18.514 48.262.166 66.61a47.242 47.242 0 0 1-4.137 3.68z" /><path d="M84.675 12.832c12.635 14.545 12.69 36.205.126 50.687l-5.035-5.035c8.902-12.011 8.861-28.586-.1-40.642l5.009-5.01z" /></g>
      <g id="antenna-off"><path d="M53 128H0l21.893-25 6.562 6.126 14.481-1.393L53 128zm-3.581-57.595L70.708 58.24 58.542 79.53 79 99.986 30.026 104 22 95.974 26.013 47l23.406 23.405z" fill-rule="evenodd" /></g>
      <g id="antenna-receive" fill-rule="evenodd"><circle cx="84" cy="49" r="4" /><circle cx="99.5" cy="34.5" r="6.5" /><circle cx="115.5" cy="19.5" r="8.5" /><path d="M53 128H0l21.893-25 6.562 6.126 14.481-1.393L53 128zm-3.581-57.595L70.708 58.24 58.542 79.53 79 99.986 30.026 104 22 95.974 26.013 47l23.406 23.405z" /></g>
      <g id="antenna-transmit" fill-rule="evenodd"><path d="M127.559 74h-7.254c.077-1.253.116-2.517.116-3.79 0-33.485-27.146-60.631-60.632-60.631-1.272 0-2.536.04-3.789.116V2.441A65.095 65.095 0 0 1 63.579 2C99.158 2 128 30.842 128 66.421c0 2.564-.15 5.093-.441 7.579z" /><path d="M56 17c30.928 0 56 25.072 56 56h-8.13C103.52 46.719 82.281 25.48 56 25.13V17z" /><path d="M56 32c21.375 2.049 38.343 19.807 40 42h-7.107C86.437 56.29 73.034 42.235 56 39.395V32zM53 128H0l21.893-25 6.562 6.126 14.481-1.393L53 128zm-3.581-57.595L70.708 58.24 58.542 79.53 79 99.986 30.026 104 22 95.974 26.013 47l23.406 23.405z" /></g>
      <g id="equipment" fill-rule="evenodd"><path d="M0 11.255C0 7.248 3.164 4 7.11 4h113.78c3.927 0 7.11 3.22 7.11 7.255v21.773c0 4.007-3.164 7.255-7.11 7.255H7.11c-3.927 0-7.11-3.22-7.11-7.255V11.255zm7.055 3.295v14.175c0 1.905 1.582 3.495 3.533 3.495h106.824c1.923 0 3.533-1.564 3.533-3.495V14.55c0-1.904-1.582-3.495-3.533-3.495H10.588c-1.923 0-3.533 1.565-3.533 3.495z" /><path d="M18.142 18.11h7.055v7.055h-7.055zM32.252 18.11h7.055v7.055h-7.055zM46.362 18.11h7.055v7.055h-7.055zM0 53.586c0-4.007 3.164-7.255 7.11-7.255h113.78c3.927 0 7.11 3.22 7.11 7.255v21.773c0 4.007-3.164 7.255-7.11 7.255H7.11c-3.927 0-7.11-3.22-7.11-7.255V53.586zm7.055 3.295v14.175c0 1.904 1.582 3.495 3.533 3.495h106.824c1.923 0 3.533-1.565 3.533-3.495V56.881c0-1.904-1.582-3.495-3.533-3.495H10.588c-1.923 0-3.533 1.565-3.533 3.495z" /><path d="M18.142 61.449h7.055v7.055h-7.055zM32.252 61.449h7.055v7.055h-7.055zM46.362 61.449h7.055v7.055h-7.055zM0 95.917c0-4.007 3.164-7.256 7.11-7.256h113.78c3.927 0 7.11 3.22 7.11 7.256v21.773c0 4.007-3.164 7.255-7.11 7.255H7.11c-3.927 0-7.11-3.22-7.11-7.255V95.917zm7.055 4.302v14.176c0 1.904 1.582 3.495 3.533 3.495h106.824c1.923 0 3.533-1.565 3.533-3.495v-14.176c0-1.904-1.582-3.495-3.533-3.495H10.588c-1.923 0-3.533 1.565-3.533 3.495z" /><path d="M18.142 103.78h7.055v7.055h-7.055zM32.252 103.78h7.055v7.055h-7.055zM46.362 103.78h7.055v7.055h-7.055z" /></g>
      <g id="mission"><path d="M64 127C29.206 127 1 98.794 1 64S29.206 1 64 1s63 28.206 63 63-28.206 63-63 63zm0-9.947c29.3 0 53.053-23.753 53.053-53.053 0-29.3-23.753-53.053-53.053-53.053C34.7 10.947 10.947 34.7 10.947 64c0 29.3 23.753 53.053 53.053 53.053zm.492-12.694c-22.018 0-39.867-17.849-39.867-39.867 0-22.018 17.85-39.867 39.867-39.867 22.018 0 39.867 17.85 39.867 39.867 0 22.018-17.849 39.867-39.867 39.867zm0-9.966c16.514 0 29.9-13.387 29.9-29.9 0-16.514-13.386-29.901-29.9-29.901-16.513 0-29.9 13.387-29.9 29.9 0 16.514 13.387 29.9 29.9 29.9zM64 80.734c-9.242 0-16.734-7.492-16.734-16.734S54.758 47.266 64 47.266 80.734 54.758 80.734 64 73.242 80.734 64 80.734z" fill-rule="evenodd" /></g>
      <g id="payload" fill-rule="nonzero"><path d="M18.345 35.566l45.81 24.04 46.474-24.389-45.376-25.112-46.908 25.461zm-4.331 7.425v48.703l45.353 24.184V66.791l-45.353-23.8zm101.407-.591L68.94 66.79v50.223l46.48-25.272V42.4zM64.728 0l58.58 32.427v63.715L64.728 128 5 96.142V32.427L64.728 0z" /><ellipse cx="63.591" cy="23.579" rx="3.38" ry="3.368" /><ellipse cx="63.591" cy="33.684" rx="3.38" ry="3.368" /><ellipse cx="63.591" cy="44.912" rx="3.38" ry="3.368" /><ellipse cx="79.365" cy="72.982" rx="3.38" ry="3.368" /><ellipse cx="90.633" cy="78.596" rx="3.38" ry="3.368" /><ellipse cx="101.9" cy="84.211" rx="3.38" ry="3.368" /><path d="M25.281 87.579a3.374 3.374 0 0 1-3.38-3.368 3.374 3.374 0 0 1 3.38-3.369 3.374 3.374 0 0 1 3.38 3.369 3.374 3.374 0 0 1-3.38 3.368zM48.943 76.35a3.374 3.374 0 0 1-3.38-3.368 3.374 3.374 0 0 1 3.38-3.368 3.374 3.374 0 0 1 3.38 3.368 3.374 3.374 0 0 1-3.38 3.369zM36.549 81.965a3.374 3.374 0 0 1-3.38-3.369 3.374 3.374 0 0 1 3.38-3.368 3.374 3.374 0 0 1 3.38 3.368 3.374 3.374 0 0 1-3.38 3.369z" /></g>
      <g id="processor" fill-rule="evenodd"><path d="M16 22.44c0-3.557 2.903-6.44 6.44-6.44h84.12c3.557 0 6.44 2.903 6.44 6.44v84.12c0 3.557-2.903 6.44-6.44 6.44H22.44c-3.557 0-6.44-2.903-6.44-6.44V22.44zM28 34a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm71 71a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM33 0h7v10h-7zM52 0h7v10h-7zM71 0h7v10h-7zM90 0h7v10h-7zM33 118h7v10h-7zM0 33h10v7H0zM0 52h10v7H0zM0 71h10v7H0zM0 90h10v7H0zM118 33h10v7h-10zM118 52h10v7h-10zM118 71h10v7h-10zM118 90h10v7h-10zM52 118h7v10h-7zM71 118h7v10h-7zM90 118h7v10h-7z" /></g>
      <g id="processor-alt"><path d="M57 81v3.285H0V47h46.652V13.667H128V27H57v54zm7.146-4V30.484H128V84H99.03v19.9H18V128H2.991A2.992 2.992 0 0 1 0 125.009V91h81.587l.008-1H82V77h-.296l.216-25.86H128l-.958-7.14H70.658v33h-6.512zM128 7H37.984v29.168H0V2.991A2.992 2.992 0 0 1 2.991 0H125.01A2.992 2.992 0 0 1 128 2.991V7zm0 83.753v34.256a2.992 2.992 0 0 1-2.991 2.991H32.78v-16.494h73.714V90.753H128z" fill-rule="evenodd" /></g>
      <g id="netcom"><path d="M41.884 78.97a25.711 25.711 0 0 1-4.575-14.683c0-14.265 11.565-25.83 25.83-25.83 2.966 0 5.813.5 8.466 1.42l5.457-12.857a14.347 14.347 0 0 1-7.609-12.67C69.453 6.425 75.878 0 83.803 0c7.924 0 14.35 6.425 14.35 14.35S91.726 28.7 83.802 28.7a14.39 14.39 0 0 1-3.572-.448L74.735 41.2c8.442 4.248 14.234 12.992 14.234 23.087 0 .947-.05 1.882-.15 2.803l11.101 2.767c1.792-5.882 7.261-10.161 13.73-10.161 7.926 0 14.35 6.422 14.35 14.35 0 7.924-6.425 14.349-14.35 14.349S99.3 81.97 99.3 74.045c0-.28.009-.558.023-.834L88.23 70.445a25.862 25.862 0 0 1-10.526 15.177l6.121 14.422a14.334 14.334 0 0 1 4.57-.743c7.925 0 14.35 6.424 14.35 14.35 0 7.924-6.425 14.349-14.35 14.349s-14.349-6.425-14.349-14.35a14.34 14.34 0 0 1 6.707-12.147l-6.001-14.137a25.721 25.721 0 0 1-11.612 2.75c-7.59 0-14.415-3.273-19.141-8.485L26.524 96.293a14.283 14.283 0 0 1 2.175 7.599c0 7.926-6.424 14.35-14.35 14.35-7.924 0-14.349-6.424-14.349-14.35 0-7.925 6.425-14.349 14.35-14.349 3.911 0 7.456 1.566 10.045 4.103l17.49-14.676z" fill-rule="nonzero" /></g>
      <g id="propulsion-power"><path d="M28.588 0h64.824C96.498 0 99 2.513 99 5.614v116.772c0 3.1-2.502 5.614-5.588 5.614H28.588c-3.086 0-5.588-2.513-5.588-5.614V5.614C23 2.514 25.502 0 28.588 0zm47.258 11L34 62.038l22.666 6.268L38.795 118 85 62.485l-21.795-7.163L75.845 11z" fill-rule="nonzero" /></g>
      <g id="thermal"><path d="M34.273 17.963C34.273 8.6 41.848 1 51.203 1h.593c9.356 0 16.931 7.6 16.931 16.963v56.85C76.3 80.233 81 89.018 81 98.645 81 114.868 67.782 128 51.5 128S22 114.868 22 98.646c0-9.627 4.7-18.412 12.273-23.834V17.963zm7.272 60.63C34.112 82.243 29 89.851 29 98.646 29 110.992 39.074 121 51.5 121S74 110.992 74 98.646c0-8.795-5.112-16.404-12.545-20.053a10.02 10.02 0 0 0 .272-2.325V17.963c0-5.502-4.446-9.963-9.93-9.963h-.593c-5.485 0-9.931 4.46-9.931 9.963v58.305c0 .8.094 1.579.272 2.325zm5.568 5.21V32h8.774v51.803C62.31 85.684 67 91.593 67 98.59 67 107.1 60.06 114 51.5 114c-8.56 0-15.5-6.9-15.5-15.411 0-6.997 4.69-12.905 11.113-14.786zM78 15h21v6.913H78V15zm0 11.522h15.167v6.913H78v-6.913zm0 11.521h21v6.914H78v-6.914zm0 11.522h15.167v6.913H78v-6.913zm0 11.522h21V68H78v-6.913z" fill-rule="nonzero" /></g>
      <g id="satellite-off" fill-rule="evenodd"><path d="M32 48.867L49.8 31 66 58.156 57.654 67zM14.032 100L0 86.404l21.408-21.622L37.878 60 41 63.455l-6.425 17.628zM85.968 0L100 13.596 78.592 35.218 62.122 40 59 36.545l6.425-17.628z" /></g>
      <g id="satellite-receive" fill-rule="evenodd"><ellipse cx="83.5" cy="74" rx="4.5" ry="4" /><circle cx="101" cy="87" r="6" /><circle cx="119.5" cy="103.5" r="8.5" /><path d="M32 48.867L49.8 31 66 58.156 57.654 67zM14.032 100L0 86.404l21.408-21.622L37.878 60 41 63.455l-6.425 17.628zM85.968 0L100 13.596 78.592 35.218 62.122 40 59 36.545l6.425-17.628z" /></g>
      <g id="satellite-transmit" fill-rule="evenodd"><path d="M61 126.59v-10.285c1.166.077 2.341.116 3.526.116 29.213 0 52.895-23.682 52.895-52.895 0-1.185-.039-2.36-.116-3.526h10.285c.27 2.313.41 4.667.41 7.053C128 100.16 101.16 127 68.053 127c-2.386 0-4.74-.14-7.053-.41z"/><path d="M107 60c-1.737 24.606-21.394 44.263-46 46v-9.115C80.027 94.07 95.07 79.027 97.885 60H107zM88 60c-3.688 13.039-13.961 23.312-27 27v-7.957A34.661 34.661 0 0 0 80.043 60H88zM32 48.867L49.8 31 66 58.156 57.654 67zM14.032 100L0 86.404l21.408-21.622L37.878 60 41 63.455l-6.425 17.628zM85.968 0L100 13.596 78.592 35.218 62.122 40 59 36.545l6.425-17.628z"/></g>
      <g id="progress"><circle transform="rotate(-90 60 60) translate(-1 1)" stroke="rgba(40, 63, 88, 1)" stroke-width="10" fill="transparent" r="56" cx="60" cy="60" /><circle transform="rotate(-90 60 60) translate(-1 1)" class="progress-ring__circle" stroke-width="10" stroke-dasharray="351.8583772021 351.8583772021" stroke-dashoffset="var(--monitoring-progress, 1)" stroke-linecap="round" fill="transparent" r="56" cx="60" cy="60"/></g>

      <!-- component icons //-->
      <g id="add-large" viewBox="0 0 128 128"> <g fill-rule="evenodd"> <path d="M63.5 127C28.43 127 0 98.57 0 63.5S28.43 0 63.5 0 127 28.43 127 63.5 98.57 127 63.5 127zm0-10.583c29.225 0 52.917-23.692 52.917-52.917S92.725 10.583 63.5 10.583 10.583 34.275 10.583 63.5s23.692 52.917 52.917 52.917z"/> <path d="M66.5 59.5H91v7H66.5V91h-7V66.5H35v-7h24.5V35h7v24.5z"/> </g> </g>
      <g id="add-small" viewBox="0 0 128 128"> <path d="M66.5 59.5H91v7H66.5V91h-7V66.5H35v-7h24.5V35h7v24.5z" fill-rule="evenodd"/> </g>
      <g id="close-large" viewBox="0 0 128 128"> <g fill-rule="evenodd"> <path d="M64 128C28.654 128 0 99.346 0 64 0 28.654 28.654 0 64 0c35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64zm0-10.667c29.455 0 53.333-23.878 53.333-53.333S93.455 10.667 64 10.667 10.667 34.545 10.667 64 34.545 117.333 64 117.333z"/> <path d="M69.028 64l22.628 22.627-5.029 5.029L64 69.028 41.373 91.656l-5.029-5.029L58.972 64 36.344 41.373l5.029-5.029L64 58.972l22.627-22.628 5.029 5.029L69.028 64z"/> </g> </g>
      <g id="close-small" viewBox="0 0 128 128"> <path d="M69.028 64l22.628 22.627-5.029 5.029L64 69.028 41.373 91.656l-5.029-5.029L58.972 64 36.344 41.373l5.029-5.029L64 58.972l22.627-22.628 5.029 5.029L69.028 64z" fill-rule="evenodd"/> </g>
      <g id="collapse" viewBox="0 0 128 128"> <path d="M91.316 23.179L114.36.137l13.455 13.455-23.178 23.178 14.002 14.286-44.4 6.472 6.344-45.302 10.734 10.953zm-49.98 78.439L15.09 127.863 1.635 114.408l26.381-26.38-10.862-11.084 44.4-6.472-6.344 45.302-13.874-14.156z" fill-rule="evenodd"/> </g>
      <g id="expand" viewBox="0 0 128 128"> <path d="M20.765 90.258l25.318-25.319 14.785 14.784L35.4 105.191l15.386 15.698L2 128l6.97-49.778 11.795 12.036zm84.47-56.035L76.396 63.06 61.612 48.277 90.599 19.29 78.663 7.11 127.45 0l-6.97 49.778-15.244-15.555z" fill-rule="evenodd"/> </g>
      <g id="lock" viewBox="0 0 128 128"> <g fill-rule="evenodd"> <path d="M89.65 60.235V30.118c0-8.317-6.788-15.06-15.162-15.06s-15.163 6.743-15.163 15.06v30.117H44.163V30.118C44.163 13.484 57.74 0 74.488 0c16.748 0 30.325 13.484 30.325 30.118v30.117H89.65zM29 60.235h90.975V128H29z"/> </g> </g>
      <g id="unlock" viewBox="0 0 128 128"> <g fill-rule="evenodd"> <path d="M45.488 60.235V30.118c0-8.317-6.789-15.06-15.163-15.06s-15.162 6.743-15.162 15.06v30.117H0V30.118C0 13.484 13.577 0 30.325 0 47.073 0 60.65 13.484 60.65 30.118v30.117H45.488zM29 60.235h90.975V128H29z"/> </g> </g>
      <g id="search" viewBox="0 0 128 128"> <path d="M65.25 70.14l.794.794L54.8 82.18l1.505 1.505-39.619 39.62-14.007-14.008 39.619-39.62 1.837 1.838 11.127-11.127a36.403 36.403 0 0 1-6.5-20.817C48.762 19.374 65.136 3 85.334 3c20.198 0 36.572 16.374 36.572 36.571 0 20.198-16.374 36.572-36.572 36.572A36.4 36.4 0 0 1 65.25 70.14zM85.333 67c15.149 0 27.429-12.28 27.429-27.429 0-15.148-12.28-27.428-27.429-27.428-15.148 0-27.428 12.28-27.428 27.428C57.905 54.72 70.185 67 85.333 67z" fill-rule="evenodd"/> </g>

      <!-- utility icons //-->			
      <g id="notifications"> <g fill-rule="nonzero"> <path d="M15 98h98V86.607c-8.887-4.781-14.766-14.046-14.993-24.476L98 42.147c-.554-10.626-9.486-19.975-24.615-23.962l-3.864-1.018-.55-3.958C68.198 7.647 66.746 6 64 6s-4.198 1.647-4.97 7.21l-.55 3.957-3.865 1.018C39.189 22.25 30 31.773 30 42.002l-.005 20C29.765 72.56 23.887 81.826 15 86.607V98zM64 0c6.129 0 9.767 4.128 10.914 12.383C93.097 17.174 103.404 29 104 42l.005 20c.21 9.58 6.405 17.684 14.995 20.72V104H9V82.72C17.59 79.684 23.786 71.58 23.995 62L24 42c0-13 10.903-24.826 29.086-29.617C54.233 4.128 57.871 0 64 0zM50.847 115.371a15.022 15.022 0 0 0 12.666 6.957c5.25 0 9.973-2.728 12.666-6.957H50.847zm32.832-2.159c-2.594 8.887-10.774 15.116-20.166 15.116-9.392 0-17.572-6.229-20.166-15.116l-1.122-3.84h42.576l-1.122 3.84z"/> </g> </g>
      <g id="settings"> <g fill-rule="evenodd"> <path d="M39.051 122.954a59.793 59.793 0 0 1-11.301-6.2L31.2 104.09a50.213 50.213 0 0 1-3.774-3.415 52.57 52.57 0 0 1-3.47-3.831l-12.663 3.446C8.96 97.095 6.905 93.353 5.13 89.064a70.531 70.531 0 0 1-4.035-13.407l11.393-6.513a50.235 50.235 0 0 1-.253-5.084c0-1.72.086-3.442.256-5.162L1.099 52.38C2.135 47.442 3.47 43 5.106 39.051a59.781 59.781 0 0 1 6.2-11.301l12.663 3.451a50.275 50.275 0 0 1 3.416-3.774 52.638 52.638 0 0 1 3.83-3.47L27.77 11.294c4.224-2.76 8.31-4.958 12.258-6.592a59.777 59.777 0 0 1 12.376-3.607l6.513 11.394A50.333 50.333 0 0 1 64 12.236c1.72 0 3.442.085 5.162.255L75.68 1.099c4.938 1.036 9.381 2.371 13.33 4.007a59.774 59.774 0 0 1 11.3 6.2L96.859 23.97c1.3 1.06 2.557 2.199 3.774 3.416a52.698 52.698 0 0 1 3.47 3.83l12.663-3.446c2.76 4.224 4.958 8.31 6.592 12.258a59.777 59.777 0 0 1 3.607 12.376l-11.394 6.513c.17 1.668.253 3.363.253 5.084 0 1.72-.085 3.442-.255 5.163l11.392 6.517c-.998 4.848-2.32 9.26-3.969 13.238a60.66 60.66 0 0 1-6.239 11.392l-12.662-3.451a50.274 50.274 0 0 1-3.416 3.774 52.631 52.631 0 0 1-3.83 3.47l3.446 12.663c-4.133 2.724-8.19 4.909-12.167 6.556a60.652 60.652 0 0 1-12.467 3.643l-6.513-11.393c-1.668.169-3.363.253-5.084.253a52.59 52.59 0 0 1-5.163-.256l-6.517 11.392c-4.938-1.036-9.381-2.371-13.329-4.007zm17.563-13.729c2.175.398 4.657.598 7.446.598 2.789 0 5.579-.198 8.37-.595l6.243 10.923c2.233-.531 4.63-1.327 7.192-2.387a63.97 63.97 0 0 0 7.476-3.685l-3.304-12.14c2.063-1.5 4.119-3.274 6.167-5.322a63.799 63.799 0 0 0 5.725-6.566l12.139 3.309c1.203-1.956 2.335-4.214 3.396-6.775a64.034 64.034 0 0 0 2.682-7.892l-10.921-6.247c.398-2.52.598-5.228.598-8.124 0-2.897-.198-5.794-.595-8.691l10.923-6.244c-.532-2.233-1.328-4.63-2.388-7.192a64.016 64.016 0 0 0-3.685-7.476l-12.14 3.304c-1.103-1.66-2.745-3.58-4.925-5.762a73.179 73.179 0 0 0-6.963-6.13l3.31-12.139c-1.903-1.18-4.135-2.302-6.695-3.363a66.097 66.097 0 0 0-7.972-2.715l-6.248 10.921A60.792 60.792 0 0 0 64 18.237c-2.79 0-5.58.198-8.37.595L49.388 7.91c-2.154.5-4.524 1.285-7.112 2.356a65.412 65.412 0 0 0-7.556 3.717l3.304 12.14a60.824 60.824 0 0 0-6.395 5.548 59.215 59.215 0 0 0-5.497 6.34L13.992 34.7c-1.17 1.877-2.29 4.108-3.363 6.695a65.494 65.494 0 0 0-2.715 7.972l10.92 6.248c-.392 2.042-.588 4.59-.589 7.646 0 3.055.195 6.11.587 9.168L7.909 78.673c.499 2.154 1.284 4.525 2.355 7.112a65.358 65.358 0 0 0 3.717 7.556l12.14-3.304a60.823 60.823 0 0 0 5.55 6.395 59.205 59.205 0 0 0 6.338 5.497L34.7 114.068c1.877 1.17 4.108 2.29 6.695 3.362a65.513 65.513 0 0 0 7.972 2.716l7.247-10.92z"/> <path d="M64 92c-15.464 0-28-12.536-28-28s12.536-28 28-28 28 12.536 28 28-12.536 28-28 28zm0-6c12.15 0 22-9.85 22-22s-9.85-22-22-22-22 9.85-22 22 9.85 22 22 22z"/> </g> </g>
      <g id="caution"> <path d="M64.031 5c8.461 0 68.88 107.243 63.648 114.184-5.232 6.942-120.805 5.477-127.212 0C-5.941 113.708 55.57 5 64.03 5zm3.45 75.894l1.822-34.893H56.946l1.82 34.893h8.715zM56.803 93.108c0 1.929.547 3.423 1.643 4.483 1.095 1.06 2.642 1.589 4.642 1.589 1.953 0 3.477-.542 4.572-1.625 1.095-1.084 1.643-2.566 1.643-4.447 0-1.952-.542-3.452-1.625-4.5-1.084-1.047-2.613-1.571-4.59-1.571-2.047 0-3.607.512-4.678 1.536-1.072 1.023-1.607 2.535-1.607 4.535z" fill-rule="evenodd"/> </g>
      <g id="maintenance" viewBox="0 0 128 128"> <path d="M95.926 103.205l1.35 6.382 17.594 10.378.26-.26-10.377-17.594-6.382-1.351-21.197-21.197-2.445 2.445 21.197 21.197zm20.12 18.051l.334-.042.042-.334-.917-.54.541.916zm-25.644-15.054L66.21 82.008l10.965-10.965 24.193 24.193 7.228 1.53 14.096 23.898-6.861 6.861-23.898-14.096-1.53-7.227zM51.77 41.492l-2.13 2.13-4.876-4.876-.04-1.186a11.325 11.325 0 0 0-3.322-7.654l-15.77-15.769c-4.458-4.459-11.72-4.437-16.218.061-4.498 4.499-4.52 11.76-.061 16.219l15.769 15.769a11.325 11.325 0 0 0 7.653 3.322l1.187.04 4.876 4.877-2.13 2.13a.85.85 0 0 0-.016 1.2c.311.312 1.421 1.51 1.428 1.517.283.297.524.54.739.74l13.986-13.986c.05-.109.106-.273.157-.48.127-.511.2-1.171.203-1.858.003-.686-.067-1.344-.19-1.852a2.97 2.97 0 0 0-.137-.44.854.854 0 0 0-1.108.096zm5.461-4.276c2.683 2.683 2.656 10.287-.03 12.973L42.14 65.25c-2.116 2.116-4.56 1.52-6.751-.274-.528-.432-1.035-.922-1.64-1.56-.077-.082-1.1-1.184-1.316-1.401a6.854 6.854 0 0 1-1.764-6.657 17.33 17.33 0 0 1-9.806-4.913L5.093 34.676c-6.817-6.816-6.784-17.892.061-24.737C12 3.093 23.075 3.06 29.893 9.877l15.768 15.77a17.33 17.33 0 0 1 4.914 9.806 6.854 6.854 0 0 1 6.656 1.763zM75.27 13.694c-6.933 6.933-7.415 21.71-2.314 33.272l.85 1.93-63.283 60.75c-4.777 5.014-5.442 7.611-1.986 11.067 2.31 2.311 4.968 1.41 9.83-3.223l60.75-63.284 1.93.85c11.562 5.102 26.339 4.62 33.272-2.313 5.535-5.536 8.298-13.703 7.435-18.714l-12.979 12.979-22.002-4.411-5.834-23.294L94.084 6.157c-4.881-.9-13.209 1.93-18.815 7.537zm-4.26-4.26C80.053.39 94.844-3.132 101.24 3.262l2.13 2.13L87.61 21.15l4.08 16.289 15.104 3.028 15.933-15.933 2.124 2.347c6.046 6.678 2.66 21.187-6.274 30.122-8.572 8.57-24.73 9.493-37.998 4.378L22.666 121.71c-3.111 2.975-5.637 4.809-8.28 5.716-3.647 1.251-7.17.488-10.11-2.453-3.417-3.417-4.602-7.143-3.6-10.976.748-2.866 2.52-5.404 5.533-8.559l60.422-58.006c-5.115-13.27-4.193-29.427 4.378-37.998z" fill-rule="nonzero"/> </g>
    </svg>
    `;
  }

  firstUpdated() {
    if (document.getElementById('rux-icons') === null) {
      const template = this.iconTemplate(this.defaultIconSet);
      const icon = this.shadowRoot.getElementById('rux-icon');

      icon.prepend(template);
    }
  }

  updated(changedProperties) {
    if (changedProperties.get('color')) {
      this.style.setProperty('--iconDefaultColor', this.color);
    }
  }

  iconTemplate(icons) {
    const _template = document.createElement('template');
    _template.setAttribute('id', 'rux-icon-template');
    _template.innerHTML = icons.trim();
    return _template.content.firstChild;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
          line-height: 0;
          fill: var(--iconDefaultColor, rgb(77, 172, 255));
          height: var(--icon-size--default, 44px);
          width: var(--icon-size--default, 44px);
        }

        :host svg {
          height: 100%;
          width: auto;
        }

        /* small variant */
        :host(.rux-icon--small) {
          height: var(--icon-size--small, 32px);
          width: var(--icon-size--small, 32px);
        }

        /* status symbol icon size */
        :host(.rux-icon--status) {
          height: var(--icon-size--status, 12px);
          width: var(--icon-size--status, 12px);
        }

        :host(.rux-icon--button) {
          height: var(--icon-size--button, 19px);
          width: var(--icon-size--button, 19px);
          fill: var(--icon-color--button);
        }

        :host(.rux-icon--button--large) {
          height: var(--icon-size--button-large, 24px);
          width: var(--icon-size--button-large, 24px);
        }

        ::slotted(div) {
          margin-top: -54%;
        }
      </style>

      <i id="rux-icon" title="${this.label}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          s
          viewBox="0 0 128 128"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <use href="${this.library}#${this.icon}"></use>
        </svg>
        <slot></slot>
      </i>
    `;
  }
}
customElements.define('rux-icon', RuxIcon);
