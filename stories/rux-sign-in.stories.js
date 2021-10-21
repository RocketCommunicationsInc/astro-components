import { html, render } from 'lit-html'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { RuxSignIn } from '../src/components/rux-sign-in/rux-sign-in'
import Readme from '../src/components/rux-sign-in/README.md'

export default {
    title: 'Components/Sign In',
    decorators: [withKnobs],
}

export const SignIn = () => {
    const config = {
        email: '',
        password: '',
        sso: boolean('SSO nabled', false),
        invalid: boolean('Not a valid login', false),
    }

    return html`
        <div style="padding: 10% 0; margin: 0 auto; display: block;">
            <rux-sign-in
                style="margin: 0 auto; max-width: 330px; display: block;"
                ?email="${config.email}"
                ?password="${config.password}"
                ?sso="${config.sso}"
                ?invalid="${config.invalid}"
            ></rux-sign-in>
        </div>
    `
}

SignIn.story = {
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
