import { html, render } from 'lit-html'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { RuxAccordion } from '../src/components/rux-accordion/rux-accordion.js'
import Readme from '../src/components/rux-accordion/README.md'

export default {
    title: 'Components',
    decorators: [withKnobs],
}

export const Accordion = () => {
    const firstOpen = boolean('Accordion 1 open', true)
    const secondOpen = boolean('Accordion 2 open', false)
    const thirdOpen = boolean('Accordion 3 open', false)
    return html`
        <style>
            [slot='content'] {
                display: contents; // allows parent flexbox styling to affect slot content
            }
        </style>
        <div>
            <rux-accordion .open=${firstOpen}>
                <span slot="label">USA-151 - Solar panel misalignment</span>
                <span slot="content"
                    >USA-151 experienced solar panel misalignment at
                    16:57:45.</span
                >
            </rux-accordion>
            <rux-accordion .open=${secondOpen}>
                <span slot="label">USA-180 - Power degradation</span>
                <span slot="content"
                    >USA-180 suffered power degradation at 16:58:01.</span
                >
            </rux-accordion>
            <rux-accordion .open=${thirdOpen}>
                <span slot="label">Antenna DGS 2 - Weak signal</span>
                <span slot="content">
                    Antenna DGS 2 has weak signal at 16:38:37.
                    <div class="rux-button-group">
                        <button class="rux-button">Investigate</button>
                    </div>
                </span>
            </rux-accordion>
        </div>
    `
}

Accordion.story = {
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
