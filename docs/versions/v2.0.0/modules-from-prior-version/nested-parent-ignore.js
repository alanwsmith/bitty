export default class {
  template() {
    return `
<div>
  <bitty-2-0
    data-connect="./nested-child.js"
    data-send="showValue"
    data-name="Counter 1"
  ></bitty-2-0>
</div>
<div>
  <bitty-2-0
    data-connect="./nested-child.js"
    data-send="showValue"
    data-name="Counter 2"
  ></bitty-2-0>
</div>
`;
  }
}
