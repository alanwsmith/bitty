export default class {
  async runTest0420(_event, el) {
    const replacements = [["FAILED", "PASSED"]];
    const newEl = await this.api.getHTML(
      `/v2.0.0/tests/0420-fetch-html-with-replacements/payload/index.html`,
      replacements,
    );
    el.parentNode.replaceChildren(newEl);
  }
}