import { html, render } from 'lit-html'
import { RuxSegmentedButton } from '../src/components/rux-segmented-button/rux-segmented-button.js'
import { radios, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Readme from '../src/components/rux-segmented-button/README.md'

export default {
    title: 'Components/Segmented Button',
    decorators: [withKnobs],
}

export const SegmentedButton = () => {
    const segmentButtonArray = [
        { label: 'First item' },
        { label: 'Second item' },
        { label: 'Third item', selected: true },
    ]
    const segments = radios(
        'Initially selected segment',
        ['First item', 'Second item', 'Third item', 'Missing item'],
        'Second item'
    )

    document.addEventListener('change', (e) => action('change')(e.target))

    return html`
        <div style="padding: 10vh 5vw; display: flex; justify-content: center;">
            <rux-segmented-button
                .data="${segmentButtonArray}"
                .selected="${segments}"
            ></rux-segmented-button>
        </div>
    `
}

SegmentedButton.story = {
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
