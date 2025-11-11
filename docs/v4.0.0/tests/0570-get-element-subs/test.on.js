export default class {
  async runTest0570(_event, el) {
    const url = `/v5.1.0/tests/0570-get-element-subs/payload.html`;
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getElement(url, subs);
    el.parentNode.replaceChildren(response.ok);
  }
}