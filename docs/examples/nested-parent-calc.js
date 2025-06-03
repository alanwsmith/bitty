export class Wires {
  $showValue(el, _) {
    const counters = this.bridge.querySelectorAll("bitty-js");
    let count = 0;
    counters.forEach((counter) => {
      if (counter.wires !== undefined) {
        count += counter.wires.value;
      }
    });
    el.innerHTML = count;
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
<div>
  Calculated Total: <span data-r="showValue"></span>
</div>
<div>
  <div>Counter 1</div>
  <bitty-js
    data-wires="./examples/nested-child-calc.js"
    data-send="showValue"
  ></bitty-js>

  <div>Counter 2</div>
  <bitty-js
    data-wires="./examples/nested-child-calc.js"
    data-send="showValue"
  ></bitty-js>
</div>
`;
  }
}
