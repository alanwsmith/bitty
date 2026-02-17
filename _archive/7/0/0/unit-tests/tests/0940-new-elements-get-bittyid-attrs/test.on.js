export default class {
  bittyReady() {
    this.api.trigger("runTest0940");
  }

  runTest0940(_event, el) {
    const template = `<div>FAILED</div>`;
    const newEl = this.api.makeElement(template);
    if (newEl.dataset.bittyid) {
      el.innerHTML = "PASSED";
    }
  }
}
