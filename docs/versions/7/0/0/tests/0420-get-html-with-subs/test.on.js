export default class {
  async runTest0420(_event, el) {
    const url = "/versions/7/0/0/tests/0420-get-html-with-subs/payload/";
    const subs = [["FAILED", "PASSED"]];
    const response = await this.api.getHTML(url, subs);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}