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
        type: Object
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host{
          outline: 1px solid red;
          padding: 0;

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
          padding: 0;
          margin: 0; 
        
          border-top: 1px solid rgba(255,255,255,.1);
          border-bottom: 1px solid rgba(0,0,0,.1);
        }


        .rux-tree__arrow {
          content: '';
          
          margin: 0.1em 0.25em 0 0;

          width: 0;
          height: 0;
          border-style: solid;
          border-width: 7px 0 7px 7px;
          border-color: transparent transparent transparent #007bff;
          display: inline-block;
                  
          cursor: pointer;
        }


        /* Child Elements */
        .rux-tree__children {
          display: none;
          height: 0;
        }

        

        /* Expanded */
        .expanded .rux-tree__arrow {
          -webkit-transform: rotate(90deg);
          -moz-transform: rotate(90deg);
          -ms-transform: rotate(90deg);
          transform: rotate(90deg);
        }

        .expanded .rux-tree__children {
          display: block;
          height: auto;
        }

        .selected .rux-tree__parent-item{
          background-color: red;
        }

        .rux-tree__child.selected  {
          background-color: blue;
        }
      </style>


      <menu class="rux-tree">
        <ul class="rux-tree__parent-elements">
        <template is="dom-repeat" id="test" items=[[data]]>
          <li class$="rux-tree__parent {{_getExpanded(item.expanded)}} {{_getSelected(item.selected)}} {{_hasChildren(item.children)}}">
            <div class="rux-tree__parent-item">
              <i class="rux-tree__arrow" on-click="_expand" title="Expand"></i>
              <a class="rux-tree__parent-label" href on-click="_select">[[item.label]]</a>
            </div>
            <menu class="rux-tree__children" hidden=[[!item.children.length]]>
              <ul>
                <template is="dom-repeat" id="rux-tree__children-data" items=[[item.children]]>
                  <li class$="rux-tree__child {{_getSelected(item.selected) }}">
                    <a href on-click="_select">[[item.label]]</a>
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

    this.data = [
      {
        _id: "i1",
        label: "Item 1",
        children: [
          { _id: "i1-1", label: "Child 1" },
          { _id: "i1-2", label: "Child 2" }
        ]
      },
      {
        _id: "i2",
        label: "Item 2",
        children: [
          { _id: "i2-1", label: "Child 1.1" },
          { _id: "i2-2", label: "Child 1.2" },
          { _id: "i2-3", label: "Child 1.3" }
        ]
      }
    ];
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
    return item.length ? "has-children" : "";
  }

  _select(event) {
    event.preventDefault();

    /* if (this._currentSelection) {
      var e = event.model.get("item._id", this.selected);

      console.log("old item", event.model.item);
      this._currentSelection.selected = false;
      this.notifyPath("data.1.children.0.selected", false);
      console.log(this._currentSelection);
    }
    ; */

    /*

    index:(...)
    item:(...)
    itemsIndex:(...)
    parentModel:(...)
    */

    console.log(event.model);

    // const {
    //   item: { children }
    // } = event.model;
    // console.log(children);

    // var children = event.model.item.children;

    // console.log(children);
    console.log(parent);
    console.log(index);

    if (this._me) {
      this._me.item.selected = false;
      if (this._me.parentIndex != undefined) {
        this.notifyPath(
          `data.${this._me.parentIndex}.children.${
            this._me.selfIndex
          }.selected`,
          false
        );
      } else if (this._me.selfIndex) {
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

    /* 
      Destructure the event.model 

      // get children
      // get parentModel

    */

    console.log(event.model);
    // console.log(event.model.index);
    // console.log(event.model.item);
    event.model.set("item.selected", event.model.item.selected ? false : true);
  }

  _expand(event) {
    event.model.set("item.expanded", event.model.item.expanded ? false : true);
  }
}
customElements.define("rux-tree", RuxTree);
