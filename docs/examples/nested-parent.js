export class Wires {
  #value = 0;

  _increment(_) {
    this.#value += 1;
  }

  $showValue(el, _) {
    el.innerHTML = this.#value;
  }

  init() {
    this.loadTemplate();
  }

  loadTemplate() {
    const skeleton = document.createElement("template");
    skeleton.innerHTML = this.template();
    this.bridge.append(skeleton.content.cloneNode(true));
    this.bridge.loadReceivers();
  }

  template() {
    return `
<div>Total from internal counter<br><span data-r="showValue"></div>

<div>
  <bitty-js
    data-wires="./examples/nested-child.js"
    data-send="showValue"
    data-name="Counter 1"
  ></bitty-js>
  <bitty-js
    data-wires="./examples/nested-child.js"
    data-send="showValue"
    data-name="Counter 2"
  ></bitty-js>
</div>
`;
  }
}
