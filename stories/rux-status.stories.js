/* eslint-disable no-unused-vars */
import { storiesOf } from "@storybook/polymer";
import { html, render } from "lit-html";
import { RuxStatus } from "../src/components/rux-status/rux-status.js";
import Readme from "../src/components/rux-status/README.md";
/* eslint-enable no-unused-vars */

storiesOf("Components|Status", module)
  .add(
    "Status",
    () => {
      return html`
        <style>
          ul {
            display: flex;
            list-style: none;
            margin: 1rem;
            padding: 0;
            width: 50%;
            justify-content: center;
            align-items: center;
          }

          ul:last-child {
            flex-direction: column;
          }

          ul > li {
            margin: 0.25rem;
          }
        </style>
        <div style="margin: 3rem auto; display: flex; min-width: 50%;">
          <ul>
            <li><rux-status status="off"></rux-status></li>
            <li><rux-status status="standby"></rux-status></li>
            <li><rux-status status="normal"></rux-status></li>
            <li><rux-status status="caution"></rux-status></li>
            <li><rux-status status="serious"></rux-status></li>
            <li><rux-status status="critical"></rux-status></li>
          </ul>

          <ul>
            <li><rux-status status="off"></rux-status></li>
            <li><rux-status status="standby"></rux-status></li>
            <li><rux-status status="normal"></rux-status></li>
            <li><rux-status status="caution"></rux-status></li>
            <li><rux-status status="serious"></rux-status></li>
            <li><rux-status status="critical"></rux-status></li>
          </ul>
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
  )
  .add(
    "Status (HTML)",
    () => {
      return html`
        <style>
          ul {
            display: flex;
            list-style: none;
            margin: 1rem;
            padding: 0;
            width: 50%;
            justify-content: center;
            align-items: center;
          }

          ul:last-child {
            flex-direction: column;
          }

          ul > li {
            margin: 0.25rem;
          }
        </style>
        <div style="margin: 3rem auto; display: flex; min-width: 50%;">
          <ul>
            <li><div class="rux-status rux-status--off"></div></li>
            <li><div class="rux-status rux-status--standby"></div></li>
            <li><div class="rux-status rux-status--normal"></div></li>
            <li><div class="rux-status rux-status--caution"></div></li>
            <li><div class="rux-status rux-status--serious"></div></li>
            <li><div class="rux-status rux-status--critical"></div></li>
          </ul>

          <ul>
            <li><div class="rux-status rux-status--off"></div></li>
            <li><div class="rux-status rux-status--standby"></div></li>
            <li><div class="rux-status rux-status--normal"></div></li>
            <li><div class="rux-status rux-status--caution"></div></li>
            <li><div class="rux-status rux-status--serious"></div></li>
            <li><div class="rux-status rux-status--critical"></div></li>
          </ul>
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
