export default class {
  async runTest0420(_event, el) {
    const url = "/[@ file.folder @]/payload.html";
    const subs = [["FAILED", "PASSED"]];
    const response = await this.api.getHTML(url, subs);
    el.parentNode.replaceChildren(response.value);
  }
}
