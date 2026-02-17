export default class {
  bittyReady() {
    this.api.localTrigger("runTest0770");
  }

  runTest0770(_event, el) {
    const t1 = `<div></div><div class="test">TARGET</div>`;
    const items = [
      "PA",
      "SS",
      "ED",
    ];
    const subs = [
      ["TARGET", items],
    ];
    const newFragment = this.api.makeHTML(t1, subs);
    el.replaceChildren(newFragment);
    el.classList.remove("test");
  }
}
