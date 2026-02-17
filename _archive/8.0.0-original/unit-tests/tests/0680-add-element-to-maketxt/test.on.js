const template = `<div>TARGET</div>`;
const finalTarget = `<div><div>RESULT</div></div>`;

export default class {
  bittyReady() {
    this.api.localTrigger("runTest0680");
  }

  runTest0680(_event, el) {
    const newEl = document.createElement("div");
    newEl.innerHTML = "RESULT";
    const subs = [
      ["TARGET", newEl],
    ];
    const txt = this.api.makeTEXT(template, subs);
    if (txt === finalTarget) {
      el.innerHTML = "PASSED";
    }
  }
}
