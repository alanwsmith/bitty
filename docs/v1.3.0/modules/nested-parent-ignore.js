export default class {
  template() {
    return `
<div>
  <bitty-COMPONENT_VERSION
    data-connect="./nested-child.js"
    data-send="showValue"
    data-name="Counter 1"
  ></bitty-COMPONENT_VERSION>
</div>
<div>
  <bitty-COMPONENT_VERSION
    data-connect="./nested-child.js"
    data-send="showValue"
    data-name="Counter 2"
  ></bitty-COMPONENT_VERSION>
</div>
`;
  }
}