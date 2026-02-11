export default class {
  bittyReady() {
    this.api.localTrigger("runTest0570");
  }

  async runTest0570(_event, el) {
    const url = "/versions/8/0/0-original/unit-tests/tests/0570-get-element-subs/payload/";
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getElement(url, subs);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}