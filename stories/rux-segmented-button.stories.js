/* eslint-disable no-unused-vars */
import { storiesOf } from "@storybook/polymer";
import { html, render } from "lit-html";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { decorate } from "@storybook/addon-actions";

import {
  action,
  withActions,
  configureActions
} from "@storybook/addon-actions";

import { RuxSegmentedButton } from "../src/components/rux-segmented-button/rux-segmented-button.js";
import Readme from "../src/components/rux-segmented-button/README.md";
/* eslint-enable no-unused-vars */

storiesOf("Components|Segmented Button", module)
  .addDecorator(
    withActions("RuxSegmentedButtonClick", {
      depth: 100,
      clearOnStoryChange: true
    })
  )
  .addDecorator(withKnobs)
  .add(
    "Segmented Button",
    () => {
      const segmentButtonArray = [
        { label: "First Item" },
        { label: "Second Item", selected: true },
        { label: "Third Item" }
      ];

      return html`
        <div style="padding: 10vh 5vw; display: flex; justify-content: center;">
          <rux-segmented-button
            .data="${segmentButtonArray}"
          ></rux-segmented-button>
        </div>
      `;
    },
    {
      exports: {
        render,
        html
      },
      notes: {
        markdown: Readme
      }
    }
  );
