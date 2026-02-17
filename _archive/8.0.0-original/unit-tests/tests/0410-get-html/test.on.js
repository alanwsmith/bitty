export default class {
  bittyReady() {
    this.api.localTrigger("runTest0410");
  }

  async runTest0410(_event, el) {
    const url = "/[@ file.folder @]/payload/";
    const response = await this.api.getHTML(url);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}
