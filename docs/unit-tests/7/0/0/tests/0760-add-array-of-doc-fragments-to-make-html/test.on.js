export default class {
  runTest0760(_event, el) {
    const t1 =
      `<div data-send="stub0760" class="test">FAILED</div><div>TARGET</div>`;
    const t2 = `<div></div><div class="test">PASSED</div>`;
    const items = [
      this.api.makeHTML(t2),
      this.api.makeHTML(t2),
      this.api.makeHTML(t2),
    ];
    const subs = [
      ["TARGET", items],
    ];
    const newFragment = this.api.makeHTML(t1, subs);
    if (newFragment.firstChild.dataset.bittyid) {
      newFragment.firstChild.innerHTML = "PASSED";
    }
    el.replaceChildren(newFragment);
    el.classList.remove("test");
  }
}