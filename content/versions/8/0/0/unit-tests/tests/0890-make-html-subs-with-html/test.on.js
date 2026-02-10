const template1 = `FAILED`;
const template2 = `<div class="test">STATUS</div>`;

export default class {
  bittyReady() {
    this.api.localTrigger("runTest0890");
  }

  runTest0890(_, el) {
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
