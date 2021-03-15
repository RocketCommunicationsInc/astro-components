import { html, render } from 'lit-html';
import { boolean, select, date, withKnobs } from '@storybook/addon-knobs';
import { RuxLogin } from '../src/components/rux-login/rux-login';
import Readme from '../src/components/rux-login/README.md';

export default {
  title: 'Components|Login',
  decorators: [withKnobs],
};

export const Login = () => {
  const username = 'username@astro.com';
  const password = 'astroTesting';

  return html`
    <div style="padding: 10%; display: flex; justify-content: center;">
      <rux-login
        ?username="${username}"
        ?password="${password}"
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
