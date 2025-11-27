export default class {
  async runTest0570(_event, el) {
    const url = "/versions/6.0.0-rc3/tests/0570-get-element-subs/payload.html";
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getElement(url, subs);
    el.parentNode.replaceChildren(response.value);
  }
}