export class Wrapper {
  _increment() {
    console.log("this is parent");
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
  <bitty-js
    data-wrapper="./examples/nested-child.js"
    data-name="Counter 1"
  ></bitty-js>
</div>
<div>
  <bitty-js
    data-wrapper="./examples/nested-child.js"
    data-name="Counter 2"
  ></bitty-js>
</div>
`;
  }
}
