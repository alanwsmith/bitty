export default class {
  runTest0810(_event, el) {
    const t1 = `<div>TARGET</div>`;
    const t2 = `<div></div><div class="test">PASSED</div>`;
    const items = [
      this.api.makeHTML(t2),
      this.api.makeHTML(t2),
      this.api.makeHTML(t2),
    ];
    const subs = [
      ["TARGET", items],
    ];
    const newFragment = this.api.makeElement(t1, subs);
    el.replaceChildren(newFragment);
    el.classList.remove("test");
  }
}
