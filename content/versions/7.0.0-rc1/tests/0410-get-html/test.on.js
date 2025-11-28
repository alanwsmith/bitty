export default class {
  async runTest0410(_event, el) {
    const url = "/[@ file.folder @]/payload.html";
    const response = await this.api.getHTML(url);
    el.parentNode.replaceChildren(response.value);
  }
}
