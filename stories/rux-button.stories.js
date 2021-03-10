import { html, render } from 'lit-html';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { RuxButton } from '../src/components/rux-button/rux-button.js';
import { RuxIcon } from '../src/components/rux-icon/rux-icon.js'; // not finished yet
import Readme from '../src/components/rux-button/README.md';

export default {
  title: 'Components|Buttons',
  decorators: [withKnobs],
};

export const StandardButton = () => {
  const sizeOptions = {
    Small: 'small',
    Standard: '',
    Large: 'large',
  };

  const size = select('Size', sizeOptions, '');
  const disabled = boolean('Disabled', false);
  const outline = boolean('Outline', false);
  const withIcon = boolean('With Icon', false);
  const iconOnly = boolean('Icon Only', false);
  return html`
    <div style="padding: 10%; display: flex; justify-content: center;">
      <rux-button
        .size="${size}"
        ?disabled="${disabled}"
        ?outline="${outline}"
        ?iconOnly="${iconOnly}"
        .icon="${withIcon ? 'settings' : null}"
        >Button</rux-button
      >
    </div>
  `;
};

StandardButton.story = {
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

export const slottedIconButton = () => {
  const sizeOptions = {
    Small: 'small',
    Standard: '',
    Large: 'large',
  };

  const size = select('Size', sizeOptions, 'small');
  const disabled = boolean('Disabled', false);
  const outline = boolean('Outline', false);
  const iconOnly = boolean('Icon Only', false);
  return html`
    <div style="padding: 10%; display: flex; justify-content: center;">
      <rux-button
        .size="${size}"
        ?disabled="${disabled}"
        ?outline="${outline}"
        ?iconOnly="${iconOnly}"
        >
        <rux-icon
          icon="custom" 
          library="/icons/custom.svg"
          color="${outline ? 'var(--buttonOutlineTextColor)' : 'var(--buttonTextColor)'}"
        ></rux-icon>
        Slotted Icon Button</rux-button
      >
    </div>
  `;
};

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
};

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
          <rux-button outline>Cancel</rux-button>
          <rux-button>Continue</rux-button>
        </div>
      </div>
    </div>
  `;

GroupedButtons.story = {
  parameters: {
    exports: {
      render,
      html,
    },
    readme: {
      sidebar:
        '# Grouped Buttons\n\nCommon button groupings follow these conventions: \n\n- Cancel buttons are always presented to the left of actions such as “Submit.”\n\n- Always group together “Ok/Cancel” buttons. Do not justify them apart, but keep a reasonable margin between the buttons.\n\n- Buttons within the same group should maintain their inherent size. Do not stretch one button to match another’s width. \n\nRead the [Rux-Buttons Readme](/?path=/info/components-buttons--standard-button) for more information.',
    },
  },
};

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
          <rux-button size="small" iconOnly icon="settings">Small Icon-only Button</rux-button>
          <rux-button size="small"><rux-icon></rux-icon>Small Button</rux-button>
          <rux-button size="small">Small Button</rux-button>
        </li>
        <li>
          <rux-button size="small" icon="settings">Small Button with Icon</rux-button>
        </li>
        <li>
          <rux-button size="small" iconOnly disabled icon="settings"
            >Small Disabled Icon-only Button</rux-button
          >
          <rux-button size="small" disabled>Small Disabled Button</rux-button>
        </li>
        <li>
          <rux-button size="small" disabled icon="settings"
            >Small Disabled Button with Icon</rux-button
          >
        </li>
        <li>
          <rux-button size="small" iconOnly outline icon="settings"
            >Small Outline Icon-only Button</rux-button
          >
          <rux-button size="small" outline>Small Outline Button</rux-button>
        </li>
        <li>
          <rux-button size="small" outline icon="settings"
            >Small Outline Button with Icon</rux-button
          >
        </li>
        <li>
          <rux-button size="small" iconOnly disabled outline icon="settings"
            >Small Disabled Outline Icon-only Button</rux-button
          >
          <rux-button size="small" outline disabled>Small Disabled Outline Button</rux-button>
        </li>
        <li>
          <rux-button size="small" outline disabled icon="settings"
            >Small Disabled Outline Button with Icon</rux-button
          >
        </li>
      </ul>
      <ul class="button-list">
        <li>
          <rux-button iconOnly icon="settings">Standard Icon-only Button</rux-button>
          <rux-button>Standard Button</rux-button>
        </li>
        <li>
          <rux-button icon="settings">Standard Button with Icon</rux-button>
        </li>
        <li>
          <rux-button iconOnly disabled icon="settings"
            >Standard Disabled Icon-only Button</rux-button
          >
          <rux-button disabled>Standard Disabled Button</rux-button>
        </li>
        <li>
          <rux-button disabled icon="settings">Standard Disabled Button with Icon</rux-button>
        </li>
        <li>
          <rux-button iconOnly outline icon="settings">Standard Outline Icon-only Button</rux-button>
          <rux-button outline>Standard Outline Button</rux-button>
        </li>
        <li>
          <rux-button outline icon="settings">Standard Outline Button with Icon</rux-button>
        </li>
        <li>
          <rux-button iconOnly disabled outline icon="settings"
            >Standard Disabled Outline Icon-only Button</rux-button
          >
          <rux-button outline disabled>Standard Disabled Outline Button</rux-button>
        </li>
        <li>
          <rux-button outline disabled icon="settings"
            >Standard Disabled Outline Button with Icon</rux-button
          >
        </li>
      </ul>
      <ul class="button-list">
        <li>
          <rux-button size="large" iconOnly icon="settings">Large Icon-only Button</rux-button>
          <rux-button size="large">Large Button</rux-button>
        </li>
        <li>
          <rux-button size="large" icon="settings">Large Button with Icon</rux-button>
        </li>
        <li>
          <rux-button size="large" iconOnly disabled icon="settings"
            >Large Disabled Icon-only Button</rux-button
          >
          <rux-button size="large" disabled>Large Disabled Button</rux-button>
        </li>
        <li>
          <rux-button size="large" disabled icon="settings"
            >Large Disabled Button with Icon</rux-button
          >
        </li>
        <li>
          <rux-button size="large" iconOnly outline icon="settings"
            >Large Outline Icon-only Button</rux-button
          >
          <rux-button size="large" outline>Large Outline Button</rux-button>
        </li>
        <li>
          <rux-button size="large" outline icon="settings"
            >Large Outline Button with Icon</rux-button
          >
        </li>
        <li>
          <rux-button size="large" iconOnly disabled outline icon="settings"
            >Large Disabled Outline Icon-only Button</rux-button
          >
          <rux-button size="large" outline disabled>Large Disabled Outline Button</rux-button>
        </li>
        <li>
          <rux-button size="large" outline disabled icon="settings"
            >Large Disabled Outline Button with Icon</rux-button
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
  `;

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
};
