export default class {
  bittyReady() {
    this.api.trigger("runTest0140");
  }

  prepTest0140(_event, el) {
    const template = document.createElement("template");
    template.innerHTML =
      `<div><div><div class="test" data-receive="runTest0140">FAILED</div></div></div>`;
    const newEl = template.content.cloneNode(true);
    el.replaceChildren(newEl);
  }

  runTest0140(_event, el) {
    el.innerHTML = "PASSED";
  }
}