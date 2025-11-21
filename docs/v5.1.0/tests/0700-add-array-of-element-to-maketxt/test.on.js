export default class {
  runTest0700(_event, el) {
    const initialTXT = `<div>TARGET</div>`;
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
    // console.log(`700: ${newTXT}`);
    const targetTXT = `<div><div>ALFA</div><div>ALFA</div><div>ALFA</div></div>`;
    if (newTXT === targetTXT) {
      el.innerHTML = "PASSED";
    }
  }
}