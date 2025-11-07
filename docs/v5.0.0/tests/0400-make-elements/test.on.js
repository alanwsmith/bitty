export default class {
  runTest0400(_event, el) {
    el.classList.remove("test");
    const template = `<div class="test">FAILED</div>`;
    const subs = [[/FAILED/g, "PASSED"]];
    el.replaceChildren(this.api.makeElements(
      template,
      subs,
    ));
  }
}