// deno-fmt-ignore-file

export class Widget {
  template() {
    return `
<div>
  <bitty-js
    data-bridge="./nested-child.js"
    data-send="showValue"
    data-name="Counter 1"
  ></bitty-js>
</div>
<div>
  <bitty-js
    data-bridge="./nested-child.js"
    data-send="showValue"
    data-name="Counter 2"
  ></bitty-js>
</div>
`;
  }
}
