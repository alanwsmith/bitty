const template = `<div class="test">FAILED</div>`;

export default class {
  runTest0540(_event, el) {
    const newChild = this.api.useHTML(template);
    newChild.innerHTML = "PASSED";
    el.replaceChildren(newChild);
  }
}
