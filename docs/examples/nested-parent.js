export class Wrapper {
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
    data-wrapper="./examples/nested-child.js"
    data-init="showValue"
    data-name="Counter 1"
  ></bitty-js>
  <bitty-js
    data-wrapper="./examples/nested-child.js"
    data-init="showValue"
    data-name="Counter 2"
  ></bitty-js>
</div>
`;
  }
}
