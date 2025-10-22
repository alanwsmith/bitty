export default class {
  async runTest0430(_event, el) {
    const url = `/v3.0.0/tests/0430-get-fragment-with-regex/payload/index.html`;
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getFragment(url, subs);
    el.parentNode.replaceChildren(response.ok);
  }
}
