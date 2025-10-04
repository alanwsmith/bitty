export default class {
  showValue(_event, element) {
    const counters = this.bridge.querySelectorAll("bitty-1-0");
    let count = 0;
    counters.forEach((counter) => {
      if (counter.widget !== undefined) {
        count += counter.widget.value;
      }
    });
    element.innerHTML = count;
  }

  template() {
    return `
<div>
  <div>Counter 1</div>
  <bitty-1-0
    data-connect="./nested-child-calc.js"
    data-send="showValue"
  ></bitty-1-0>

  <div>Counter 2</div>
  <bitty-1-0
    data-connect="./nested-child-calc.js"
    data-send="showValue"
  ></bitty-1-0>
</div>

<div>
  Calculated Total: <span data-receive="showValue"></span>
</div>
`;
  }
}
