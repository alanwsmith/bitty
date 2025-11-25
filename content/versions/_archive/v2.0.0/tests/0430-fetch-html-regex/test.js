export default class {
  async runTest0430(_event, el) {
    const replacements = [[/FAILED/g, "PASSED"]];
    const newEl = await this.api.getHTML(
      `/v2.0.0/tests/0430-fetch-html-regex/payload/index.html`,
      replacements,
    );
    el.parentNode.replaceChildren(newEl);
  }
}
