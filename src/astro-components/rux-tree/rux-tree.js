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
      },
      _isExpanded: {
        type: String,
        value: ""
      },
      _isSelected: {
        type: String,
        value: ""
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

        .expanded .rux-tree__arrow {
          -webkit-transform: rotate(90deg);
          -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
          	transform: rotate(90deg);
        }
      </style>


      <menu class="rux-tree">
        <ul class="rux-tree__parent-elements">
        <template is="dom-repeat" id="rux-tree__parents" items=[[data]]>
          <li class$="rux-tree__parent {{item.expanded}} [[_isSelected]] [[_isExpanded]] [[_hasChildren]]">
            <div class="rux-tree__parent-item">
              <i class="rux-tree__arrow" on-click="_expand" title="Expand"></i>
              <a class="rux-tree__parent-label">[[item.label]]
            </div>
            <menu hidden=[[!item.children.length]]>
              <ul>
                <template is="dom-repeat" id="rux-tree__children" items=[[item.children]]>
                  <li class="rux-tree__child-item [[_isSelected]]">
                    <a href="">[[item.label]]</a>
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
        label: "Item 1",
        action: { action: "doSomethign", payload: "asdf" },
        children: [{ label: "Child 1" }, { label: "Child 2" }]
      },
      {
        label: "Item 2",
        action: { action: "doSomethign", payload: "asdf" },
        children: [
          { label: "Child 1.1" },
          { label: "Child 1.2" },
          { label: "Child 1.3" }
        ]
      }
    ];
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _isExpanded() {
    console.log("_isExpanded");
  }

  _expand(event) {
    console.log("expand", event.currentTarget.parentElement);
    console.log(event.model.item);
    if (event.model.item.expanded) {
      delete event.model.item.expanded;
    } else {
      event.model.item.expanded = true;
    }

    event.model.set("item.expanded", "expanded");

    // this.notifyPath("this.data", this.data);
    // event.model.item.expanded = ~event.model.item.expanded;
    // console.log(event.model.item);
    // this.notifyPath("data.expanded", event.model.item.expanded);
    // this.notifyPath("ecent.model.item", event.model.item.expanded);
    // event.model.set("event.model.item", "expanded");
    // event.model.notifyPath("event.model.item", "event.model.item");
  }
}
customElements.define("rux-tree", RuxTree);
