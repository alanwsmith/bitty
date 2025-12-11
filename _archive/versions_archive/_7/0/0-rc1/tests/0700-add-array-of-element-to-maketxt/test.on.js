export default class {
  runTest0700(_event, el) {
    const initialTXT = `TARGET`;
    const template = `<div>ALFA</div>`;
    const newEls = [
      this.api.makeElement(template),
      this.api.makeElement(template),
      this.api.makeElement(template),
    ];
    const subs = [
      ["TARGET", newEls],
    ];
    const newTXT = this.api.makeTXT(initialTXT, subs);
    if (newTXT.substring(0, 10) === "<div data-") {
      el.innerHTML = "PASSED";
    }
  }
}
