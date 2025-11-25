export default class {
  runTest0790(_event, el) {
    const t1 = `<div>TARGET</div>`;
    const t2 = `<div></div><div class="test">PASSED</div>`;
    const subs = [
      ["TARGET", this.api.makeHTML(t2)],
    ];
    const newFragment = this.api.makeElement(t1, subs);
    el.replaceChildren(newFragment);
  }
}
