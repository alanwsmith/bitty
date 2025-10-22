export default class {
  async runTest0430(_event, el) {
    const replacements = [[/FAILED/g, "PASSED"]];
    const newEl = await this.api.getFragment(
      `/v3.0.0/tests/0430-get-fragment-regex/payload/index.html`,
      replacements,
    );
    el.parentNode.replaceChildren(newEl);
  }
}
