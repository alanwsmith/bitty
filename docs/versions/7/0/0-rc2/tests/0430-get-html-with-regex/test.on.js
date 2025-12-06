export default class {
  async runTest0430(_event, el) {
    const url = "/versions/7/0/0-rc2/tests/0430-get-html-with-regex/payload/";
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getHTML(url, subs);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}