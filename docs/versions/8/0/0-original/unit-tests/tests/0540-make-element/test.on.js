const template = `<div class="test">FAILED</div>`;

export default class {
  bittyReady() {
    this.api.localTrigger("runTest0540");
  }

  runTest0540(_event, el) {
    const newChild = this.api.makeElement(template);
    newChild.innerHTML = "PASSED";
    el.replaceChildren(newChild);
  }
}