export default class {
  async runTest0430(_event, el) {
    const url = `//tests/0430-get-html-with-regex/payload.html`;
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getHTML(url, subs);
    el.parentNode.replaceChildren(response.value);
  }
}