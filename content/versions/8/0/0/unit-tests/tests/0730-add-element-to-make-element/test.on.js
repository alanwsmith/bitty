export default class {
  runTest0730(_event, el) {
    const t1 = `<div></div><div>TARGET</div>`;
    const t2 = `<div class="test">PASSED</div>`;
    const subs = [
      ["TARGET", this.api.makeElement(t2)],
    ];
    const newFragment = this.api.makeHTML(t1, subs);
    el.replaceChildren(newFragment);
    el.classList.remove("test");
  }
}
