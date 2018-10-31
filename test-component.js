import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class TestCompopnent extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }
    </style>
    <h2>Test component</h2>
`;
  }
}

customElements.define('test-component', TestCompopnent);
