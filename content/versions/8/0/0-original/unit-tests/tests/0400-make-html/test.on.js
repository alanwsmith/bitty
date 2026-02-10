export default class {
  bittyReady() {
    this.api.localTrigger("runTest0400");
  }

  runTest0400(_event, el) {
    el.classList.remove("test");
    const template = `<div class="test">FAILED</div>`;
    const subs = [[/FAILED/g, "PASSED"]];
    el.replaceChildren(this.api.makeHTML(
      template,
      subs,
    ));
  }
}
