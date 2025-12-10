export default class {
  async runTest0410(_event, el) {
    const url = "/versions/7/0/0/tests/0410-get-html/payload/";
    const response = await this.api.getHTML(url);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}