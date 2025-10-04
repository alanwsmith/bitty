export default class {
  template() {
    return `
<div>
  <bitty-v1-rc5
    data-connect="./nested-child.js"
    data-send="showValue"
    data-name="Counter 1"
  ></bitty-v1-rc5>
</div>
<div>
  <bitty-v1-rc5
    data-connect="./nested-child.js"
    data-send="showValue"
    data-name="Counter 2"
  ></bitty-v1-rc5>
</div>
`;
  }
}
