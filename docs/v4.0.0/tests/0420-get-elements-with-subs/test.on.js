export default class {
  async runTest0420(_event, el) {
    const url = `/v5.0.0/tests/0420-get-elements-with-subs/payload.html`;
    const subs = [["FAILED", "PASSED"]];
    const response = await this.api.getElements(url, subs);
    el.parentNode.replaceChildren(response.ok);
  }
}