export default class {
  async runTest0420(_event, el) {
    const replacements = [["FAILED", "PASSED"]];
    const newEl = await this.api.getFragment(
      `/v3.0.0/tests/0420-get-fragment-with-replacements/payload/index.html`,
      replacements,
    );
    el.parentNode.replaceChildren(newEl);
  }
}
