import { html, render } from 'lit-html'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import { RuxButton } from '../src/components/rux-button/rux-button.js'
import { RuxIcon } from '../src/components/rux-icon/rux-icon.js' // not finished yet
import Readme from '../src/components/rux-button/README.md'

export default {
    title: 'Components/Button',
    decorators: [withKnobs],
}

export const PrimaryButton = () => {
    const sizeOptions = {
        Small: 'small',
        Medium: '',
        Large: 'large',
    }

    const size = select('Size', sizeOptions, '')
    const disabled = boolean('Disabled', false)
    const secondary = boolean('Secondary', false)
    const withIcon = boolean('With icon', false)
    const iconOnly = boolean('Icon only', false)
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-button
                .size="${size}"
                ?disabled="${disabled}"
                ?secondary="${secondary}"
                ?iconOnly="${iconOnly}"
                .icon="${withIcon ? 'settings' : null}"
                >Button</rux-button
            >
        </div>
    `
}

PrimaryButton.story = {
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

export const slottedIconButton = () => {
    const sizeOptions = {
        Small: 'small',
        Medium: '',
        Large: 'large',
    }

    const size = select('Size', sizeOptions, 'small')
    const disabled = boolean('Disabled', false)
    const secondary = boolean('Secondary', false)
    const iconOnly = boolean('Icon only', false)
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-button
                .size="${size}"
                ?disabled="${disabled}"
                ?secondary="${secondary}"
                ?iconOnly="${iconOnly}"
            >
                <rux-icon
                    icon="custom"
                    library="/icons/custom.svg"
                    viewBox="0 0 128 128"
                    color="${secondary
                        ? 'var(--buttonSecondaryTextColor)'
                        : 'var(--buttonTextColor)'}"
                ></rux-icon>
                Slotted icon button</rux-button
            >
        </div>
    `
}

slottedIconButton.story = {
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

export const GroupedButtons = () => html`
    <style>
        .rux-button-group rux-button:not(:last-child) {
            margin-right: 0.625rem;
        }
        .light-theme {
            --exampleContainerBackgroundColor: var(--primaryElementText);
            --exampleContainerBorderColor: var(--colorQuaternaryLighten1);
        }
        .dark-theme {
            --exampleContainerBackgroundColor: var(--colorTertiaryDarken1);
            --exampleContainerBorderColor: var(--colorTertiary);
        }
        .example-container {
            min-width: 20rem;
            background: var(--exampleContainerBackgroundColor);
            border: 1px solid var(--exampleContainerBorderColor);
            padding: 0.625rem;
            display: flex;
        }
    </style>
    <div style="padding: 10%; display: flex; justify-content: center;">
        <div class="example-container">
            <div class="rux-button-group">
                <rux-button secondary>Cancel</rux-button>
                <rux-button>Continue</rux-button>
            </div>
        </div>
    </div>
`

GroupedButtons.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar:
                '# Grouped Buttons\n\nCommon button groupings follow these conventions: \n\n- Cancel buttons are always presented to the left of actions such as “Submit.”\n\n- Always group together “Ok/Cancel” buttons. Do not justify them apart, but keep a reasonable margin between the buttons.\n\n- Buttons within the same group should maintain their inherent size. Do not stretch one button to match another’s width. \n\nRead the [Rux-Button Readme](/?path=/story/components-button--primary-button) for more information.',
        },
    },
}

export const AllButtonVariants = () => html`
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
            <li>
                <rux-button size="small" iconOnly icon="settings"
                    >Small icon-only button</rux-button
                >
                <rux-button size="small">Small button</rux-button>
            </li>
            <li>
                <rux-button size="small" icon="settings"
                    >Small button with icon</rux-button
                >
            </li>
            <li>
                <rux-button size="small" iconOnly disabled icon="settings"
                    >Small disabled icon-only button</rux-button
                >
                <rux-button size="small" disabled
                    >Small disabled button</rux-button
                >
            </li>
            <li>
                <rux-button size="small" disabled icon="settings"
                    >Small disabled button with icon</rux-button
                >
            </li>
            <li>
                <rux-button size="small" iconOnly secondary icon="settings"
                    >Small secondary icon-only button</rux-button
                >
                <rux-button size="small" secondary
                    >Small secondary button</rux-button
                >
            </li>
            <li>
                <rux-button size="small" secondary icon="settings"
                    >Small secondary button with icon</rux-button
                >
            </li>
            <li>
                <rux-button
                    size="small"
                    iconOnly
                    disabled
                    secondary
                    icon="settings"
                    >Small disabled secondary icon-only button</rux-button
                >
                <rux-button size="small" secondary disabled
                    >Small disabled secondary button</rux-button
                >
            </li>
            <li>
                <rux-button size="small" secondary disabled icon="settings"
                    >Small disabled secondary button with icon</rux-button
                >
            </li>
        </ul>
        <ul class="button-list">
            <li>
                <rux-button iconOnly icon="settings"
                    >Medium icon-only button</rux-button
                >
                <rux-button>Medium button</rux-button>
            </li>
            <li>
                <rux-button icon="settings">Medium button with icon</rux-button>
            </li>
            <li>
                <rux-button iconOnly disabled icon="settings"
                    >Medium disabled icon-only button</rux-button
                >
                <rux-button disabled>Medium disabled button</rux-button>
            </li>
            <li>
                <rux-button disabled icon="settings"
                    >Medium disabled button with icon</rux-button
                >
            </li>
            <li>
                <rux-button iconOnly secondary icon="settings"
                    >Medium secondary icon-only button</rux-button
                >
                <rux-button secondary>Medium secondary button</rux-button>
            </li>
            <li>
                <rux-button secondary icon="settings"
                    >Medium secondary button with icon</rux-button
                >
            </li>
            <li>
                <rux-button iconOnly disabled secondary icon="settings"
                    >Medium disabled secondary icon-only button</rux-button
                >
                <rux-button secondary disabled
                    >Medium disabled secondary button</rux-button
                >
            </li>
            <li>
                <rux-button secondary disabled icon="settings"
                    >Medium disabled secondary button with icon</rux-button
                >
            </li>
        </ul>
        <ul class="button-list">
            <li>
                <rux-button size="large" iconOnly icon="settings"
                    >Large icon-only button</rux-button
                >
                <rux-button size="large">Large button</rux-button>
            </li>
            <li>
                <rux-button size="large" icon="settings"
                    >Large button with icon</rux-button
                >
            </li>
            <li>
                <rux-button size="large" iconOnly disabled icon="settings"
                    >Large disabled icon-only button</rux-button
                >
                <rux-button size="large" disabled
                    >Large disabled button</rux-button
                >
            </li>
            <li>
                <rux-button size="large" disabled icon="settings"
                    >Large disabled button with icon</rux-button
                >
            </li>
            <li>
                <rux-button size="large" iconOnly secondary icon="settings"
                    >Large secondary icon-only button</rux-button
                >
                <rux-button size="large" secondary
                    >Large secondary button</rux-button
                >
            </li>
            <li>
                <rux-button size="large" secondary icon="settings"
                    >Large secondary button with icon</rux-button
                >
            </li>
            <li>
                <rux-button
                    size="large"
                    iconOnly
                    disabled
                    secondary
                    icon="settings"
                    >Large disabled secondary icon-only button</rux-button
                >
                <rux-button size="large" secondary disabled
                    >Large disabled secondary button</rux-button
                >
            </li>
            <li>
                <rux-button size="large" secondary disabled icon="settings"
                    >Large disabled secondary button with icon</rux-button
                >
            </li>
        </ul>
        <!-- <ul class="button-list">
    <li>
      <input class="rux-button" type="submit" value="input type=submit">
    </li>
    <li>
      <input class="rux-button" type="button" value="input type=button">
    </li>
    <li>
      <input class="rux-button" type="reset" value="input type=reset">
    </li>
    <li>
      <input class="rux-button" type="submit" value="input disabled" disabled>
    </li>
  </ul> -->
    </div>
`

AllButtonVariants.story = {
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
