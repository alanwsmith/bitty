const template1 =
  `FAILED (this won't be green)<br /><div class="test">FAILED</div>`;
const template2 = `<div>STATUS</div>`;

export default class {
  runTest0900(_, el) {
    const content = this.api.makeHTML(template1, [
      ["FAILED", "PASSED"],
    ]);
    const post = this.api.makeHTML(template2, [
      ["STATUS", content],
    ]);
    el.classList.remove("test");
    el.replaceChildren(post);
  }
}
