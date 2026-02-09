export default class {
  bittyReady() {
    this.api.localTrigger("runTest0430");
  }

  async runTest0430(_event, el) {
    const url = "/[@ file.folder @]/payload/";
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getHTML(url, subs);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}
