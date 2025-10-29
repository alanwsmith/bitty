export default class {
  async runTest0420(_event, el) {
    const url = `/v4.0.0/tests/0420-get-fragment-with-subs/payload.html`;
    const subs = [["FAILED", "PASSED"]];
    const response = await this.api.getFragment(url, subs);
    el.parentNode.replaceChildren(response.ok);
  }
}