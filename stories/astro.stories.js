import { html, render } from 'lit-html'
import TemplateReadme from '../src/components/__rux-template/README.md'

export default {
    title: 'Astro UXDS/Welcome',
}

export const StartHere = () => {
    return html`
        <style>
            #root {
                font-weight: 300;
                line-height: 1.6;
                font-size: 17px;
            }
            .light-theme #root {
                background: white;
                font-weight: 400;
            }
            .welcome-wrap {
                padding: 5vh 2vw 0;
                font-size: 19px;
            }
            .content-wrap {
                padding: 2vh 2vw;
            }
            code {
                font-size: 14px;
                line-height: 1.375;
                direction: ltr;
                text-align: left;
                white-space: pre;
                word-spacing: normal;
                word-break: normal;
                tab-size: 4;
                hyphens: none;
                background: #060708;
                color: #ccd5e0;
                padding: 1em;
                margin: 0.5em 0;
                overflow: auto;
                display: block;
            }
        </style>
        <div class="welcome-wrap">
            <h1>Welcome to the Astro Storybook</h1>
            <p>
                This is the Astro UXDS Storybook, a sandbox for demonstrating
                and developing components and patterns built for the Astro Space
                UX Design System ("Astro UXDS"). This demonstration is built
                using the open source tool
                <a href="https://storybook.js.org/" target="_blank"
                    >Storybook</a
                >
                using JavaScript and Node.js. Most Astro UXDS patterns exist as
                HTML Web Components using
                <a
                    href="https://lit-element.polymer-project.org/"
                    target="_blank"
                    >LitElement</a
                >
                and
                <a href="https://lit-html.polymer-project.org/" target="_blank"
                    >LitHTML</a
                >; others are simply HTML and CSS. For more about the Astro UXDS
                purpose and approach to space app experiences, check out
                <a href="https://www.astrouxds.com/" target="_blank"
                    >AstroUXDS.com</a
                >.
            </p>
        </div>
        <div class="content-wrap">
            <p>
                In the Sidebar to the left, you can browse the components and
                patterns within Astro. Each example will be demonstrated in what
                is called a "story" within the Canvas (the area of the window
                you're reading now). Across the top of the Canvas area, you will
                see zoom controls, a color blindness simulator, and a light/dark
                theme toggle.
            </p>
            <p>
                To the right of the Canvas, there is a tabbed Panel which
                displays Knobs, Readme files for each component, as well as an
                Accessibilty audit, and any Actions outputs associated with that
                demonstration.
            </p>
            <ul>
                <li>
                    The <b>Knobs</b> options allow you to change content in the
                    demonstration area by altering the data given to the
                    component via its properties.
                </li>
                <li>
                    The <b>Readme</b> tab shows developer documentation for the
                    patterns or components, whether available as a Web Component
                    or simply HTML and CSS styles.
                </li>
                <li>
                    The <b>Accessibilty</b> tab displays a11y violations of WCAG
                    2.0 Levels A and AA, WCAG 2.1 Level AA, Section 508, and
                    other best practices through the
                    <a
                        href="https://github.com/dequelabs/axe-core"
                        target="_blank"
                        >aXe accessibilty engine</a
                    >.
                </li>
                <li>
                    The <b>Actions</b> tab provides console output where user
                    actions like clicking or selecting should produce event
                    target information.
                </li>
                <li>Note: Not every component uses all three tabs.</li>
            </ul>
            <p>
                Display options and keyboard shortcuts are available via the
                ellipsis menu icon next to the Astro UXDS logo at the top of the
                sidebar.
            </p>
            <p>
                If you would like to download and run the Astro UXDS Components
                Storybook yourself, you may clone
                <a
                    href="https://github.com/RocketCommunicationsInc/astro-components.git"
                    target="_blank"
                    >the repository</a
                >:
            </p>
            <code class="language-sh">
                git clone
                https://github.com/RocketCommunicationsInc/astro-components.git
            </code>
        </div>
    `
}

StartHere.story = {
    parameters: {
        exports: {
            render,
            html,
        },
    },
}

export const Contributing = () => {
    return html`
  <style>
      #root {
        font-weight: 300;
        line-height: 1.6;
        font-size: 17px;
      }
      .light-theme #root {
        background: white;
        font-weight: 400;
      }
      .welcome-wrap {
        padding: 5vh 2vw 0;
        font-size: 19px;
      }
      .content-wrap {
        padding: 2vh 2vw;
      }
      ul, li {
        margin-bottom: 1.25rem;
      }
      blockquote {
        margin: 1rem 0;
        background: var(--accordionContentBackground);
        padding: 1rem;
      }
      h3 {
        font-weight: 400;
      }

    </style>
    <div class="welcome-wrap">
      <h1>Contributing & Style Guide</h1>
      <p>The first purpose of this storybook is to standardize the way in which the Astro UXDS maintainers build, document and test components. This storybook may also be of use to developers utilizing the Astro UXDS in their space app experiences. To help facilitate both uses, we will maintain a level of consistency and quality in our documentation and component structure by adhering to best practices using <a href="https://eslint.org/" target="_blank">ESLint</a>, <a href="https://semver.org/" target="_blank">Semantic Versioning</a>, code review, and conventions as follows:</p>
    </div>
    <div class="content-wrap">
      <h3>When creating or updating Astro UXDS components:</h3>
      <ol>
        <li>Adhere to the ESLint rules in the .eslintrc file. Astro makes use of <a href="https://github.com/google/eslint-config-google" target="_blank">Google’s ESLint</a> rules and <a href="https://github.com/43081j/eslint-plugin-wc" target="_blank">ESLint's Web Component</a> rules. </li>
        <li>Prefer <code>e</code> over <code>event</code> when handling event methods.</li>
        <li>Ensure a default value is set within the constructor for each property, even if none is provided by the user during component instantiation.</li>
        <li>If a property or attribute exists, it must be documented and demonstrated.</li>
        <ul>
          <li>For Web Components with properties set via attributes, build dynamic demos using <a href="https://github.com/storybookjs/storybook/tree/master/addons/knobs#readme" target="_blank">Storybook Knobs</a> bound to the attributes (e.g., <a href="/?path=/story/components-button--primary-button">Astro Button demo</a>)</a>.</li>
          <li>For HTML patterns and in situations where Web Components with multiple properties, build static demos showing all possible combinations (e.g., <a href="/?path=/story/components-buttons--all-button-variants">all Astro Button Variants demo</a>). Do not add undocumented or undemonstrated properties or attributes with the intent to document later — demonstrate and document them at the time of authoring. Document the property's Type and default value.</li>
        </ul>
      </ol>
      <h3>When editing documentation or writing about the Astro UXDS:</h3>
      <ol>
        <li>Format attribute, properties, values, and element names in code blocks whenever used, whether in tables or in text. Wrap Strings in single quotes within the code block.
          <blockquote>Set a unique <code>id</code> on the <code>&#x3C;rux-tabs&#x3E;</code> element to a String such as <code>'tabs-set-1'</code>.</blockquote>
        </li>
        <li>Do not wrap JS Types in code blocks, but capitalize them.
          <blockquote>Use a String passed to the <code>label</code> attribute to set the label message.</blockquote>
        </li>
        <li>When describing the properties available on an Astro UXDS Web Component, explicitly answer the question "What does this property do?". The answer should have a verb, like "displays", "defines" or "hides".
          <blockquote>When present or set to true, opens this accordion item on mount or update.</blockquote>
          is better than
          <blockquote>Use to toggle accordion state</blockquote>
        </li>
        <li>Clarify the differences between Web Component properties and custom element attributes used to set those properties.</li>
        <ul>
          <li>
          Properties with a Boolean type are passed via attributes on custom or native HTML elements. Omitting the attribute on the element sets the property to <code>false</code>, while including it sets the property to <code>true</code>. Do not explicitly set a Boolean attribute to a <code>true</code> or <code>false</code>  value. Instead, bind the attribute’s value to a variable, such as a Storybook Knob. Follow native HTML patterns for attributes such as <code>disabled</code> and <code>hidden</code>.
          </li>
        </ul>
        <li>Be aware of the differences between the component as a UX pattern, the component as a Web Component, the component as an HTML Custom Element, and the component as a Node Package. Describe it as precisely as possible according to its context.
          <blockquote>The Astro UXDS Buttons NPM package includes the Web Component for a button Custom Element. You can import the Web Component to use that custom element via JavaScript, or use HTML and CSS to build an Astro UXDS Button component.</blockquote>
          <ul>
            <li>It can be difficult for the reader to distinguish between what we describe as Astro UXDS components (the individual patterns or elements within the Astro UXDS, like a button or checkbox), and proper <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components</a> (which are related HTML, CSS, and JS that form an <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements" target="_blank">HTML Custom Element</a>). Only capitalize "component" when explicitly referencing Web Components with Custom Elements.</li>
          </ul>
        </li>
        <li>Overall, avoid telling the user what <i>not</i> to do, as too much of this sounds like scolding. Instead, clearly define actions the user should take and proactively describe ways to use elements, attributes, values, methods, etc appropriately.
          <blockquote>Set the <code>value</code> attribute to a number between 1 and 100, inclusive.</blockquote>
          is better than
          <blockquote>The <code>value</code> attribute must not be set to 0, a number larger than 100, or a negative number.</blockquote>
        </li>
        <li>Avoid the passive voice in favor of direct sentences. Choose language that is instructive, rather than descriptive.
          <blockquote>Install the packages via command line.</blockquote>
          is better than
          <blockquote>The packages may be installed via command line.</blockquote>
        </li>
        <li>In situations where the user has multiple options to choose from, designate a preferred method. Explain any trade-offs, advantages, or use cases which should guide the user toward a decision.</li>

        <li>Whenever encountering concepts that may be unfamiliar to developers who haven't worked extensively with HTML, JavaScript, LitElement, Polymer, Node.JS, a11y, or similar technologies, provide a link to helpful article from first-party sources like MDN or the Lit/Polymer docs. Always link out when describing an element, implementation, or technology by name.
        </li>
        <li>Refer to the Astro Space UX Design System as "Astro UXDS" or "Astro" after the first mention. While the "rux" prefix helps prevent namespace collisions in code, the Astro UXDS Components are not "Rux Components".</li>


      </ol>

    </div>
  `
}

Contributing.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: TemplateReadme,
        },
    },
}
