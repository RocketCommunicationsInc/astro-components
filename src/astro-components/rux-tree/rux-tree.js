import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTree extends PolymerElement {
  static get properties() {
    return {
      data: {
        type: Object,
        notify: true
      },
      selected: {
        type: Object,
        reflectToAttribute: true,
        notify: true
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host,
        .rux-tree {
          
          

          padding: 0;
          margin: 0;

          font-weight: 1.125rem;

          background-color: #1c3143;

          -webkit-user-select: none;
	           -moz-user-select: none;
		          -ms-user-select: none;
			            user-select: none;
        }

        .rux-tree ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .rux-tree a {
          color: #fff;
          text-decoration: none;
        }


        /* Parent Elements */
        .rux-tree__parent {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          align-content: stretch;
          padding: 0;
          margin: 0; 
        
          border-top: 1px solid rgba(255,255,255,.1);
          border-bottom: 1px solid rgba(0,0,0,.1);

          border-left: 5px solid transparent;
	        padding: 0 0.65em;


        }

        .rux-tree__label {
          flex-grow: 1;
          padding: 0.5rem;
        }


        .rux-tree__arrow {
          position: relative;
          cursor: pointer;
          width: 7px;
          visibility: hidden;
        }

        .rux-tree__arrow::after {
          content: '';
          
          /* margin: 0 0.5rem 0 0; */

          width: 0;
          height: 0;
          border-style: solid;
          border-width: 7px 0 7px 7px;
          border-color: transparent transparent transparent #007bff;
          display: inline-block;
        }


        .has-children .rux-tree__arrow {
          visibility: visible;
        }


        /* Child Elements */
        .rux-tree__children {
          width: 100%;
          display: none;
          padding: 0;
          margin: 0;
          height: 0;
        }

        

        /* Expanded */
        .expanded .rux-tree__arrow::after {
          -webkit-transform: rotate(90deg);
          -moz-transform: rotate(90deg);
          -ms-transform: rotate(90deg);
          transform: rotate(90deg);
        }

        .expanded .rux-tree__children {
          display: block;
          height: auto;
        }

        .rux-tree__parent.selected {
          border-left: 5px solid #5CB3FF;
        }

        .rux-tree__child.selected  {
          border-left: 5px solid #5CB3FF;
        }
      </style>


      <menu class="rux-tree">
        <ul class="rux-tree__parent-elements">
        <template is="dom-repeat" id="test" items=[[data]]>
          <li class$="rux-tree__parent {{_getExpanded(item.expanded)}} {{_getSelected(item.selected)}} {{_hasChildren(item.children)}}">
            <i class="rux-tree__arrow" on-click="_expand" title="Expand"></i>  
            <div class="rux-tree__label" on-click="_select">[[item.label]]</div>
            <menu class="rux-tree__children" hidden=[[!item.children]]>
              <ul>
                <template is="dom-repeat" id="rux-tree__children-data" items=[[item.children]]>
                  <li class$="rux-tree__child {{_getSelected(item.selected) }}">
                    <div class="rux-tree__label" on-click="_select">[[item.label]]</div>
                  </li>
                </template>
              </ul>
            </menu>
          </li>
        </template>

      </menu>
      `;
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _getSelected(item) {
    return item ? "selected" : "";
  }

  _getExpanded(item) {
    return item ? "expanded" : "";
  }

  _hasChildren(item) {
    return item && item.length ? "has-children" : "no-children";
  }

  _select(event) {
    event.preventDefault();

    if (this._me) {
      this._me.item.selected = false;
      console.log("\n\n", this._me);

      if (this._me.parentIndex >= 0) {
        console.log("child selected");
        this.notifyPath(
          `data.${this._me.parentIndex}.children.${
            this._me.selfIndex
          }.selected`,
          false
        );
      } else if (this._me.selfIndex >= 0) {
        console.log("parent selected");
        this.notifyPath(`data.${this._me.selfIndex}.selected`, false);
      }
    }

    var index = event.model.index;
    var parent = event.model.parentModel.index;
    this._me = {
      selfIndex: index,
      parentIndex: parent,
      item: event.model.item
    };
    this.data.selected = event.model.item;
    this.notifyPath("data.selected");
    console.log(this.data);
    event.model.set("item.selected", event.model.item.selected ? false : true);
  }

  _expand(event) {
    event.model.set("item.expanded", event.model.item.expanded ? false : true);
  }
}
customElements.define("rux-tree", RuxTree);
