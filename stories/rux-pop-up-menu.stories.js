import { html, render } from 'lit-html'
import { withKnobs, boolean, object } from '@storybook/addon-knobs'
// import { withConsole } from '@storybook/addon-console';
import { RuxPopUpMenu } from '../src/components/rux-pop-up-menu/rux-pop-up-menu.js'
import Readme from '../src/components/rux-pop-up-menu/README.md'

export default {
    title: 'Components/Pop Up Menu',
    decorators: [withKnobs],
}

export const PopUpMenu = () => {
    const selectedMenuItem = {}
    selectedMenuItem.value = 'test'

    window.addEventListener('pop-up-menu-item-selected', (e) => {
        console.log('Pop Up Menu Item Selected', e.detail.selected)
    })

    const _onItemUpdated = (e) => {
        console.log('_onItemUpdated', e)
    }

    const _onMenuExpanded = (e) => {
        console.log('_onMenuExpanded', e)
    }

    const data = [
        {
            id: '1',
            label: 'Item 1',
            value: '',
        },
        {
            id: '2',
            label: 'Item 2',
        },
        {
            role: 'separator',
        },
        {
            id: '3',
            label: 'Item 3',
        },
    ]

    const data2 = [
        {
            id: 'b1',
            label: 'Item 1',
            value: '',
        },
        {
            id: 'b2',
            label: 'Item 2',
        },
        {
            role: 'separator',
        },
        {
            id: 'b4',
            label: 'Item 3',
        },
        {
            role: 'separator',
        },
        {
            id: 'b5',
            label: 'Item 5 with a really long title …',
            value: '',
        },
        {
            id: 'b6',
            label: 'Item 6',
        },
        {
            id: 'b7',
            label: 'Item 7',
            value: '',
        },
        {
            id: 'b8',
            label: 'Item 8',
        },
    ]

    return html`
        <style>
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
                top: 2rem;
                right: 50vw;
            }

            #bc {
                bottom: 2rem;
                right: 50vw;
            }

            #static {
                top: 20rem;
                left: 50rem;
            }
        </style>
        <div class="demo">
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
                <button
                    aria-controls="popup-menu-7"
                    aria-haspopup="true"
                    class="button"
                    id="static"
                >
                    bc
                </button>
            </div>

            <rux-pop-up-menu
                id="popup-menu-1"
                .data="${data2}"
            ></rux-pop-up-menu>
            <rux-pop-up-menu
                id="popup-menu-2"
                .data="${data}"
            ></rux-pop-up-menu>
            <rux-pop-up-menu
                id="popup-menu-3"
                .data="${data}"
            ></rux-pop-up-menu>
            <rux-pop-up-menu
                id="popup-menu-4"
                .data="${data}"
            ></rux-pop-up-menu>
            <rux-pop-up-menu
                id="popup-menu-5"
                .data="${data}"
            ></rux-pop-up-menu>
            <rux-pop-up-menu
                id="popup-menu-6"
                .data="${data}"
            ></rux-pop-up-menu>
            <rux-pop-up-menu
                id="popup-menu-7"
                .onPopUpMenuItemSelected="${_onItemUpdated}"
                .onPopUpMenuExpandedChange="${_onMenuExpanded}"
                .data="${data}"
            >
            </rux-pop-up-menu>
        </div>
    `
}

PopUpMenu.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: Readme,
        },
    },
}
