export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest0400(_event, el) {
    el.classList.remove("test");
    const template = `<div class="test">FAILED</div>`;
    const replacements = { "FAILED": "PASSED" };
    el.replaceChildren(this.api.useTemplate(
      template,
      replacements,
    ));
  }
}