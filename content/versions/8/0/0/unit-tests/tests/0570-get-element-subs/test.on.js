export default class {
  bittyReady() {
    this.api.localTrigger("runTest0570");
  }

  async runTest0570(_event, el) {
    const url = "/[@ file.folder @]/payload/";
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getElement(url, subs);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}
