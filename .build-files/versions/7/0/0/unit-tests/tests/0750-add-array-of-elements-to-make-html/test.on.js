export default class {
  runTest0750(_event, el) {
    const t1 = `<div></div><div>TARGET</div>`;
    const t2 = `<div class="test">PASSED</div>`;
    const items = [
      this.api.makeElement(t2),
      this.api.makeElement(t2),
      this.api.makeElement(t2),
    ];
    const subs = [
      ["TARGET", items],
    ];
    const newFragment = this.api.makeHTML(t1, subs);
    el.replaceChildren(newFragment);
    el.classList.remove("test");
  }
}