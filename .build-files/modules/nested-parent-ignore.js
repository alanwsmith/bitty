export default class {
  template() {
    return `
<div>
  <bitty-1-1
    data-connect="./nested-child.js"
    data-send="showValue"
    data-name="Counter 1"
  ></bitty-1-1>
</div>
<div>
  <bitty-1-1
    data-connect="./nested-child.js"
    data-send="showValue"
    data-name="Counter 2"
  ></bitty-1-1>
</div>
`;
  }
}
