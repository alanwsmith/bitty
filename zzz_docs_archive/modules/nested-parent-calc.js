// deno-fmt-ignore-file

export default class {
  showValue(el, _event) {
    const counters = this.bridge.querySelectorAll("bitty-js");
    let count = 0;
    counters.forEach((counter) => {
      if (counter.widget !== undefined) {
        count += counter.widget.value;
      }
    });
    el.innerHTML = count;
  }

  template() {
    return `
<div>
  <div>Counter 1</div>
  <bitty-js
    data-connect="./nested-child-calc.js"
    data-send="showValue"
  ></bitty-js>

  <div>Counter 2</div>
  <bitty-js
    data-connect="./nested-child-calc.js"
    data-send="showValue"
  ></bitty-js>
</div>

<div>
  Calculated Total: <span data-receive="showValue"></span>
</div>
`;
  }
}
