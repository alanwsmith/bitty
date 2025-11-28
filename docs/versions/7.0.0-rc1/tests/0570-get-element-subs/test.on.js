export default class {
  async runTest0570(_event, el) {
    const url = "/versions/7.0.0-rc1/tests/0570-get-element-subs/payload/";
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getElement(url, subs);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}