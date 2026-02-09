export default class {
  bittyReady() {
    this.api.localTrigger("runTest0420");
  }

  async runTest0420(_event, el) {
    const url = "/[@ file.folder @]/payload/";
    const subs = [["FAILED", "PASSED"]];
    const response = await this.api.getHTML(url, subs);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}
