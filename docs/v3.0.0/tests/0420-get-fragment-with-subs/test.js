export default class {
  async runTest0420(_event, el) {
    const url = `/v3.0.0/tests/0420-get-fragment-with-subs/payload/index.html`;
    const subs = [["FAILED", "PASSED"]];
    const response = await this.api.getFragment(url, subs);
    el.parentNode.replaceChildren(response.ok);
  }
}