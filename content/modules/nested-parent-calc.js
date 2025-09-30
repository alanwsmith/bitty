export default class {
  showValue(_event, element) {
    const counters = this.bridge.querySelectorAll("bitty-COMPONENT_VERSION");
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
  <bitty-COMPONENT_VERSION
    data-connect="./nested-child-calc.js"
    data-send="showValue"
  ></bitty-COMPONENT_VERSION>

  <div>Counter 2</div>
  <bitty-COMPONENT_VERSION
    data-connect="./nested-child-calc.js"
    data-send="showValue"
  ></bitty-COMPONENT_VERSION>
</div>

<div>
  Calculated Total: <span data-receive="showValue"></span>
</div>
`;
  }
}
