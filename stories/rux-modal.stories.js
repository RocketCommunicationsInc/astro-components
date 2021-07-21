import { html, render } from 'lit-html'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { withActions, configureActions } from '@storybook/addon-actions'

import { RuxModal } from '../src/components/rux-modal/rux-modal.js'
import Readme from '../src/components/rux-modal/README.md'

export default {
    title: 'Components/Dialog Box',
    decorators: [withKnobs],
    decorators: [withActions('modalClosed', { depth: 100 }), withKnobs],
}

export const DialogBox = () => {
    const toggleModal = boolean('Enable modal', true)
    const message = text('Modal message', 'Modal message')
    const title = text('Modal title', 'Modal title')
    const confirmText = text('Confirm button text', 'Release')
    const denyText = text('Deny button text', 'Cancel')
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-modal
                message="${message}"
                title="${title}"
                confirmText="${confirmText}"
                denyText="${denyText}"
                ?open="${toggleModal}"
            ></rux-modal>
        </div>
    `
}

DialogBox.story = {
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
