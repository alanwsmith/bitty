export class Wrapper {
  $showValue(el, _) {
    const counters = this.bridge.querySelectorAll("bitty-js");
    let count = 0;
    counters.forEach((counter) => {
      if (counter.wrapper !== undefined) {
        count += counter.wrapper.value;
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
    data-wrapper="./examples/nested-child-calc.js"
    data-init="showValue"
  ></bitty-js>

  <div>Counter 2</div>
  <bitty-js
    data-wrapper="./examples/nested-child-calc.js"
    data-init="showValue"
  ></bitty-js>
</div>
`;
  }
}
