export default class {
  async runTest0430(_event, el) {
    const url = `/v5.1.0/tests/0430-get-elements-with-regex/payload.html`;
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getElements(url, subs);
    el.parentNode.replaceChildren(response.ok);
  }
}