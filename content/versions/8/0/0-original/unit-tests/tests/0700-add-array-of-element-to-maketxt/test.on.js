export default class {
  bittyReady() {
    this.api.localTrigger("runTest0700");
  }

  runTest0700(_event, el) {
    const initialTEXT = `TARGET`;
    const template = `<div>ALFA</div>`;
    const newEls = [
      this.api.makeElement(template),
      this.api.makeElement(template),
      this.api.makeElement(template),
    ];
    const subs = [
      ["TARGET", newEls],
    ];
    const newTEXT = this.api.makeTEXT(initialTEXT, subs);
    if (newTEXT.substring(0, 10) === "<div data-") {
      el.innerHTML = "PASSED";
    }
  }
}
