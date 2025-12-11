export default class {
  runTest0780(_event, el) {
    const t1 = `<div>TARGET</div>`;
    const t2 = `<div class="test">PASSED</div>`;
    const subs = [
      ["TARGET", this.api.makeElement(t2)],
    ];
    const newFragment = this.api.makeElement(t1, subs);
    el.replaceChildren(newFragment);
  }
}
