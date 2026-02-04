export default class {
  async runTest0410(_event, el) {
    const url = "/[@ file.folder @]/payload/";
    const response = await this.api.getHTML(url);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}
