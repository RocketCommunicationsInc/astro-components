import { html, render } from 'lit-html'
import { boolean, number, text, array, withKnobs } from '@storybook/addon-knobs'
import Readme from '../src/components/rux-slider/README.md'

import { RuxSlider } from '../src/components/rux-slider/rux-slider.js'

export default {
    title: 'Components/Slider',
    decorators: [withKnobs],
}

export const Slider = () => {
    const minKnob = number('Min', 0)
    const maxKnob = number('Max', 100)
    const stepKnob = number('Step', 10)
    const valKnob = number('Value', 50)
    const labelKnob = text('Label', 'Slider label')
    const axisLabelsKnob = array('Axis labels', ['Min', 'Middle', 'Max'])
    const disabledKnob = boolean('Disabled', false)
    const hideInputKnob = boolean('Hide input field', false)

    return html`
        <div style="display: flex; padding: 10vh 5vw; justify-content: center;">
            <rux-slider
                .min="${minKnob}"
                .max="${maxKnob}"
                .step="${stepKnob}"
                .val="${valKnob}"
                .label="${labelKnob}"
                .axisLabels="${axisLabelsKnob}"
                ?disabled="${disabledKnob}"
                ?hideInput="${hideInputKnob}"
            >
            </rux-slider>
        </div>
    `
}

Slider.story = {
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

export const AllSliderVariants = () => {
    const value2 = 70
    const axisLabels2 = ['Min', 'Middle', 'Max']
    const label2 = 'Slider label'

    const value3 = 42

    const value4 = 50
    const label4 = 'Disabled slider label'
    const axisLabels4 = ['Min', 'Middle', 'Max']

    return html`
        <div style="display: flex; padding: 5vh 5vw; justify-content: center;">
            <rux-slider
                label="${label2}"
                .axisLabels="${axisLabels2}"
                val="${value2}"
            >
            </rux-slider>
        </div>
        <div style="display: flex; padding: 5vh 5vw; justify-content: center;">
            <rux-slider hideInput val="${value3}"> </rux-slider>
        </div>
        <div style="display: flex; padding: 5vh 5vw; justify-content: center;">
            <rux-slider
                disabled
                .axisLabels="${axisLabels4}"
                label="${label4}"
                val="${value4}"
            >
            </rux-slider>
        </div>
    `
}

AllSliderVariants.story = {
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
