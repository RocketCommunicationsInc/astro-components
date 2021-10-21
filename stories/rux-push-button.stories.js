import { html, render } from 'lit-html'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import { RuxPushButton } from '../src/components/rux-push-button/rux-push-button.js'
import Readme from '../src/components/rux-push-button/README.md'

export default {
    title: 'Components/Push Button',
    decorators: [withKnobs],
}

export const PushButton = () => {
    const disabled = boolean('Disabled', false)
    const checked = boolean('Checked', false)
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-push-button ?disabled="${disabled}" ?checked="${checked}"
                >Push button label</rux-push-button
            >
        </div>
    `
}

PushButton.story = {
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

export const AllPushButtonVariants = () => html`
    <style>
        .button-list {
            list-style-type: none;
            margin: 0 1rem 0 0;
            padding: 0;
            display: flex;
            flex-flow: column;
        }
        .button-list li {
            margin: 0 1rem 1rem 0;
            display: flex;
        }
        .button-list li rux-button:not(:last-child) {
            margin-right: 1rem;
        }
    </style>
    <div
        style="padding: 8vh 2vw; display: flex; flex-flow: row wrap; justify-content: space-evenly;"
    >
        <ul class="button-list">
            <li><rux-push-button>Push button</rux-push-button></li>
            <li>
                <rux-push-button checked>Push button checked</rux-push-button>
            </li>
            <li>
                <rux-push-button disabled>Push button disabled</rux-push-button>
            </li>
            <li>
                <rux-push-button checked disabled
                    >Push button disabled checked</rux-push-button
                >
            </li>
        </ul>
    </div>
`

AllPushButtonVariants.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: `_Readme content copied from [Rux-Button](/?path=/story/components-button--primary-button) below for your convenience._\n\n${Readme}`,
        },
    },
}
