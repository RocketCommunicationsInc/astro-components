import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxTree } from "../rux-tree.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTreeSample extends PolymerElement {
  static get template() {
    return html`
      <style>
        rux-tree {
          width: 300px;
        }
      </style>
      <rux-tree data={{treeData}}></rux-tree>
      
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Tree Component"
      }
    };
  }

  constructor() {
    super();

    /* TREE DATA */
    this.treeData = [
      {
        _id: "i1",
        label: "Item 1",
        payload: { action: "this could be anything …" },
        children: [
          { _id: "i1-1", label: "Child 1", payload: { action: "… an id" } },
          {
            _id: "i1-2",
            label: "Child 2",
            payload: { action: "… a method call to be interpreted" }
          }
        ]
      },
      {
        _id: "i4",
        label: "Item 4",
        payload: { action: "Works on items with no children" }
      },
      {
        _id: "i2",
        label: "Item 3",
        payload: { action: "Just use the paylod property …" },
        children: [
          {
            _id: "i2-1",
            label: "Child 1.1",
            payload: { action: "… then use whatever key/value pairs you want" }
          },
          {
            _id: "i2-2",
            label: "Child 1.2",
            payload: { action: "… it’s just an Object" }
          }
        ]
      }
    ];
  }

  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  ready() {
    super.ready();
  }
}
customElements.define("rux-tree-sample", RuxTreeSample);
