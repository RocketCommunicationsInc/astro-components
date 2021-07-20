import { LitElement, html, css } from 'lit-element'
/* eslint-disable no-unused-vars */
import { RuxStatus } from '../rux-status/rux-status'
import ruxData from '../rux-utils/data.js'
/* eslint-enable no-unused-vars */

export class RuxTree extends LitElement {
    static get properties() {
        return {
            data: {
                type: Array,
            },
            selected: {
                type: Object,
                attribute: false,
            },
            _hasStatus: {
                type: Boolean,
                attribute: false,
            },
            _activeElement: {
                type: Object,
                attribute: false,
            },
        }
    }

    constructor() {
        super()

        this.data = []
        this._handleKeyPress = this.handleKeyPress.bind(this)
        this._handleClick = this.handleClick.bind(this)
        this._activeElement = null
    }

    connectedCallback() {
        super.connectedCallback()

        this.removeMultiples(this.data)

        // check to see if any of the elements have status and set the _hasStatus property
        this._hasStatus = this.data.flat(2).find((element) => element.status)
        this.addEventListener('keydown', this._handleKeyPress)
        this.shadowRoot.addEventListener('click', this._handleClick)
    }

    disconnectedCallback() {
        this.removeEventListener('keydown', this._handleKeyPress)
        this.shadowRoot.removeEventListener('click', this._handleClick)

        super.disconnectedCallback()
    }

    /*
     **
     */
    handleClick(event) {
        this._activeElement = event.target.closest('[role="treeitem"]')

        // if the click happens on an arrow toggle the tree element
        if (event.target.classList.contains('rux-tree__arrow')) {
            this.toggle()
            // otherwise select it
        } else {
            // find the nearest parent. handles clicks on tree and status
            this.select()
        }
    }

    /*
     **
     */
    handleKeyPress(e) {
        switch (e.code) {
            case 'ArrowLeft':
                this.collapse()
                break
            case 'ArrowUp':
                this.back()
                break
            case 'ArrowRight':
                this.expand()
                break
            case 'ArrowDown':
                this.next()
                break
            case 'Enter':
                this.select()
                break
            case 'Space':
                this.toggle()
                break
            case 'Home':
                this.first()
                break
            case 'End':
                this.last()
                break
            case 'NumpadMultiply': {
                this.expandAll()
                break
            }
            default:
                break
        }
    }

    /*
     ** Removes duplicate selections on initial load
     */
    removeMultiples(data, selected = false) {
        data.forEach((a) => {
            if (a.selected && !selected) {
                selected = true
            } else {
                delete a.selected
            }
            if (a.children) {
                selected = this.removeMultiples(a.children, selected)
            }
        })
        return selected
    }

    /*
     ** Toggles expand/collapse state of a tree element with children
     */
    toggle() {
        this._activeElement.getAttribute('aria-expanded') === 'true'
            ? this.collapse()
            : this.expand()
    }

    /*
     ** Collapses a tree element with children
     */
    collapse() {
        this._activeElement.setAttribute('aria-expanded', false)
    }

    /*
     ** Expands a tree element with children
     */
    expand() {
        this._activeElement.setAttribute('aria-expanded', true)
    }

    /*
     ** Expands all children of the selected tree element
     */
    expandAll() {
        this.shadowRoot.querySelectorAll('[aria-expanded]').forEach((item) => {
            item.setAttribute('aria-expanded', 'true')
        })
    }

    /*
     ** Selects the next logical tree node
     ** E.g., is a tree with children is open the next logical node is the first child
     */
    next() {
        this._activeElement =
            this._activeElement.getAttribute('aria-expanded') === 'true'
                ? this._activeElement.querySelector('[role="treeitem"]')
                : this.findNextSibling(
                      this._activeElement.closest('[role="treeitem"]')
                  )
    }

    /*
     ** Selects the previous logical node
     ** E.g., if the previous sibling has an expanded set children, this selects the
     ** last element of the expanded children
     */
    back() {
        this._activeElement = !this._activeElement.previousElementSibling
            ? this._activeElement.parentElement.closest('[role="treeitem"]')
            : this._activeElement.previousElementSibling.getAttribute(
                  'aria-expanded'
              ) === 'false'
            ? this._activeElement.previousElementSibling
            : this.findPreviousSibling(
                  this._activeElement.previousElementSibling.closest(
                      '[role="treeitem"]'
                  )
              ) || this._activeElement
    }

    /*
     ** Selects the first element of the currently selected node
     */
    first() {
        this._activeElement = this._activeElement
            .closest('[role="treeitem"]')
            .parentElement.querySelector('[role="treeitem"]')
    }

    /*
     ** Selects the last element of the currently selected node
     */
    last() {
        this._activeElement = this._activeElement.closest(
            '[role="treeitem"]'
        ).parentElement.lastElementChild
    }

    /*
     ** Recursive helper for finding the next logical element
     */
    findNextSibling(element) {
        return element.nextElementSibling
            ? element.nextElementSibling
            : element.parentElement
            ? this.findNextSibling(element.parentElement.parentElement)
            : this._activeElement
    }

    /*
     ** Recursive helper for finding the previous logical element
     */
    findPreviousSibling(element) {
        const lastChild = element.querySelector('[role="group"]')
            .lastElementChild

        return lastChild.getAttribute('aria-expanded') === 'false'
            ? lastChild
            : this.findPreviousSibling(lastChild)
    }

    /*
     ** Finds the selected DOM element's associated JSON node
     */
    findInObject(arr, key) {
        arr.forEach((a) => {
            if (a.key === key) {
                a.selected = true
                this.found = a
            } else {
                delete a.selected
                if (a.children) {
                    this.findInObject(a.children, key)
                }
            }
        })

        return this.found
    }

    /*
     ** Selects an element
     */
    select() {
        this.selected = this.findInObject(
            this.data,
            this._activeElement.dataset.key
        )

        // dispatches an event to parent elements
        this.dispatchEvent(
            new CustomEvent('tree-updated', {
                detail: {
                    data: this.data,
                    selected: this.selected,
                },
                bubbles: true,
                composed: true,
            })
        )
    }

    /*
     ** Handles de-focusing elements when a new element is selected
     */
    updated(changedProperties) {
        if (changedProperties && changedProperties.get('_activeElement')) {
            const _previousActiveElement = changedProperties.get(
                '_activeElement'
            )
            if (!this._activeElement) {
                this._activeElement = _previousActiveElement
            } else {
                _previousActiveElement.blur()
                this._activeElement.focus()
            }
        }
    }

    /*
     **
     */
    // prettier-ignore
    render() {
    const treeItem = (item, index, level) => {
      item.key = item.id || ruxData.id();

      return html`
        <li
          class="rux-tree__tree-item"
          role="treeitem"
          aria-expanded="${item.expanded || false}"
          aria-selected="${item.selected}"
          aria-posinset="${index + 1}"
          aria-level="${level}"
          aria-setsize="${(item.children && item.children.length) || 0}"
          data-key="${item.key}"
          tabindex="-1"
        >
          <div class="rux-tree__parent">
            <i class="rux-tree__arrow" ?hidden="${!item.children}"></i>
            ${this._hasStatus &&
              html`
                <rux-status status="${item.status || 'null'}"></rux-status>
              `}
            <div title="${item.label}, status ${item.status}" class="rux-tree__label">
              ${item.label}
            </div>
          </div>
          ${item.children &&
            item.children.length &&
            html`
              <ul class="rux-tree__children" role="group">
                ${item.children.map((child, index) => html`
                  ${treeItem(child, index, level + 1)}`)}
              </ul>
            `}
        </li>
      `;
    };

    // prettier-ignore
    return html`
      <nav class="rux-tree">
        <ul role="tree">
          ${this.data.map((parent, index) => html`
            ${treeItem(parent, index, 1)}`)}
        </ul>
      </nav>
    `;
  }

    static get styles() {
        return css`
            :host {
                display: inline-block;
                position: relative;
                box-sizing: border-box;

                width: 100%;
                padding: 0;
                margin: 0;

                font-size: 1rem;

                color: var(--treeTextColor);
                border: solid 1px var(--treeBorderColor);
                background-color: var(--treeBackgroundColor);

                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            menu {
                padding: 0;
                margin: 0;
            }

            *,
            *:before,
            *:after {
                box-sizing: inherit;
            }

            *[hidden] {
                display: none !important;
            }

            ul {
                padding: 0;
                margin: 0;
                list-style: none;
            }

            .rux-tree li {
                font-weight: bold;
            }

            .rux-tree__parent {
                display: flex;
                align-items: center;
                padding: 0 0.5rem;
                height: 2rem;
            }

            .rux-tree__parent:hover {
                color: var(--treeHoverTextColor);
            }

            .rux-tree__parent::after {
                content: '';
                height: 2rem;
                width: 100%;
                left: 0;
                z-index: 0;
                position: absolute;
                transition: background-color 0.0967s ease-in;
            }

            [aria-selected='true'] > .rux-tree__parent {
                color: var(--treeSelectedTextColor);
            }

            [aria-selected='true'] > .rux-tree__parent::after,
            [aria-selected='true'] > .rux-tree__parent:hover::after {
                box-shadow: inset 0.25rem 0 0 var(--treeSelectedAccentColor) !important;
                background-color: var(--treeSelectedBackgroundColor) !important;
            }

            :not([aria-selected='true']) > .rux-tree__parent:hover::after {
                background-color: var(--treeHoverBackgroundColor);
            }

            [aria-selected='true'] > .rux-tree__parent::after {
                border-top: 1px solid var(--treeSelectedBorderColor);
                border-bottom: 1px solid var(--treeSelectedBorderColor);
            }

            :not([aria-selected='true'])
                > .rux-tree__parent:hover
                .rux-tree__arrow::after {
                border-color: transparent transparent transparent
                    var(--treeHoverTextColor);
            }

            .rux-tree__parent:focus,
            .rux-tree__tree-item:focus {
                outline: none !important;
            }

            .rux-tree__label {
                left: 3rem;

                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;

                order: 3;
                z-index: 10;

                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            /* label w/o status */
            .rux-tree__arrow[hidden] + .rux-tree__label {
                margin-left: 1.5rem;
            }

            .rux-tree__parent rux-status {
                margin: 0 0.5rem;
                z-index: 12;
                order: 2;
            }

            .rux-tree__arrow[hidden] + rux-status {
                margin-left: 2rem;
            }

            .rux-tree__arrow {
                order: 1;
                position: relative;
                cursor: pointer;
                width: 0.35rem;
                margin-right: 1rem;
                margin-left: 0.15rem;
                background-color: transparent;
                transition: transform 0.167s ease-in-out;
                z-index: 11;
            }

            .rux-tree__arrow::before {
                content: '';
                display: block;
                height: 1.5rem;
                width: 1.5rem;
                top: -0.15rem;
                left: -0.65rem;
                position: absolute;
            }

            .rux-tree__arrow::after {
                content: '';

                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0.35rem 0 0.35rem 0.35rem;
                border-color: transparent transparent transparent
                    var(--treeAccentColor);
                display: inline-block;
            }

            [aria-expanded='false'] > .rux-tree__children {
                display: none;
            }

            [aria-expanded='true'] > .rux-tree__children {
                display: block;
                background-color: var(--treeChildrenBackgroundColor);
            }

            [aria-expanded='true'] > .rux-tree__children li {
                font-weight: normal;
                border-top: none;
            }

            [aria-expanded='true'] > .rux-tree__parent .rux-tree__arrow {
                transform: rotate(90deg);
            }

            .rux-tree__children {
                padding-left: 1.5rem;
            }

            [aria-expanded='true'][aria-level='1']:not([aria-selected='true'])
                > .rux-tree__parent:after {
                border-bottom: solid 1px var(--treeExpandedBorderColor);
            }

            li[aria-selected='true']
                > .rux-tree__children
                li:not([aria-selected='undefined'])
                .rux-tree__parent:after {
                background: none !important;
                box-shadow: none !important;
                border: none !important;
            }
            li[aria-selected='true']
                > .rux-tree__children
                li:not([aria-selected='undefined'])
                .rux-tree__parent:hover:after {
                box-shadow: inset 0.25rem 0 0 var(--treeSelectedAccentColor) !important;
                background-color: var(--treeHoverBackgroundColor) !important;
            }
            li[aria-selected='true']
                > .rux-tree__children
                li:not([aria-selected='undefined'])
                .rux-tree__parent:hover {
                color: var(--treeHoverTextColor);
            }
            li[aria-selected='true']
                > .rux-tree__children
                li:not([aria-selected='undefined'])
                .rux-tree__parent:hover
                .rux-tree__arrow:after {
                border-color: transparent transparent transparent
                    var(--treeHoverTextColor);
            }
        `
    }
}
customElements.define('rux-tree', RuxTree)
