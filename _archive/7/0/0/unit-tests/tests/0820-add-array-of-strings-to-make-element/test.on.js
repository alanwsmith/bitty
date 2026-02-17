export default class {
  runTest0820(_event, el) {
    const t1 = `<div class="test">TARGET</div>`;
    const items = [
      "PA",
      "SS",
      "ED",
    ];
    const subs = [
      ["TARGET", items],
    ];
    const newFragment = this.api.makeElement(t1, subs);
    el.replaceChildren(newFragment);
    el.classList.remove("test");
  }
}
