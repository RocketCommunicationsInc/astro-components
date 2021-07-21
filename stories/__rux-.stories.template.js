/* eslint-disable no-unused-vars */
import { html, render } from 'lit-html'
import { boolean, number, text, array, withKnobs } from '@storybook/addon-knobs'
import { RuxTemplate } from '../src/components/__rux-template/__rux-template.js'
import Readme from '../src/components/__rux-template/README.md'
/* eslint-enable no-unused-vars */

export default {
    title: 'Components/Template',
    decorators: [withKnobs],
}

export const TemplateName = () => {
    const numberKnob = number('Number Label', 0)
    const booleanKnob = boolean('Boolean label', false)
    const arrayKnob = array('Array Label', [0, 1], 0)
    const textKnob = text('Text Label', 'default text')
    return html`
        <div style="display: flex; padding: 10vh 5vw; justify-content: center;">
            <rux-template
                .numberAttr="${numberKnob}"
                .arrayAttr="${arrayKnob}"
                ?booleanAttr="${booleanKnob}"
            >
                ${textKnob}
            </rux-template>
        </div>
    `
}
TemplateName.story = {
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
