import { html, render } from 'lit-html';
import { withKnobs } from '@storybook/addon-knobs';
import { RuxSignIn } from '../src/components/rux-sign-in/rux-sign-in';
import Readme from '../src/components/rux-sign-in/README.md';

export default {
  title: 'Components|Sign In',
  decorators: [withKnobs],
};

export const SignIn = () => {
  const config = {
    email: '',
    password: '',
    sso: false,
  };

  return html`
    <div style="padding: 10%; display: flex; justify-content: center;">
      <rux-sign-in
        ?email="${config.email}"
        ?password="${config.password}"
        ?sso="${config.sso}"
      ></rux-sign-in>
    </div>
  `;
};

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
};
