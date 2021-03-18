import { html, render } from 'lit-html';
import { boolean, select, date, withKnobs, text } from '@storybook/addon-knobs';
import { RuxLogin } from '../src/components/rux-login/rux-login';
import Readme from '../src/components/rux-login/README.md';

export default {
  title: 'Components|Login',
  decorators: [withKnobs],
};

export const Login = () => {
  const config = {
    username: '',
    password: '',
    sso: false,
  };

  return html`
    <div style="padding: 10%; display: flex; justify-content: center;">
      <rux-login
        ?username="${config.username}"
        ?password="${config.password}"
        ?sso="${config.sso}"
      ></rux-login>
    </div>
  `;
};

Login.story = {
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
