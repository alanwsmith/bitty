export default class {
  showValue(_event, element) {
    const counters = this.bridge.querySelectorAll("bitty-v1-rc4");
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
  <bitty-v1-rc4
    data-connect="./nested-child-calc.js"
    data-send="showValue"
  ></bitty-v1-rc4>

  <div>Counter 2</div>
  <bitty-v1-rc4
    data-connect="./nested-child-calc.js"
    data-send="showValue"
  ></bitty-v1-rc4>
</div>

<div>
  Calculated Total: <span data-receive="showValue"></span>
</div>
`;
  }
}
