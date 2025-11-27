export default class {
  async runTest0410(_event, el) {
    const url = "/versions/6.0.0-rc3/tests/0410-get-html/payload.html";
    const response = await this.api.getHTML(url);
    el.parentNode.replaceChildren(response.value);
  }
}