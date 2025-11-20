export default class {
  runTest0700(_event, el) {
    const initialTXT = `<div>TARGET</div>`;
    const template = `<div>ALFA</div>`;
    const newEls = [
      this.api.makeElement(template),
      this.api.makeElement(template),
      this.api.makeElement(template),
    ];
    console.log(Object.prototype.toString.call(newEls));
    console.log(newEls.toString());
    const subs = [
      ["TARGET", newEls],
    ];
    const newTXT = this.api.makeTXT(initialTXT, subs);
    console.log(newTXT);
    el.innerHTML = "PASSED";
  }
}