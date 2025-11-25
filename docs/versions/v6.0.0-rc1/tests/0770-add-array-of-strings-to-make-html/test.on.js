export default class {
  runTest0770(_event, el) {
    const t1 = `<div></div><div class="test">TARGET</div>`;
    const items = [
      "PA", "SS", "ED"
    ];
    const subs = [
      ["TARGET", items],
    ];
    const newFragment = this.api.makeHTML(t1, subs);
    el.replaceChildren(newFragment);
  }
}