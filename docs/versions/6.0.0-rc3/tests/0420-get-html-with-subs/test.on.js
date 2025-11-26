export default class {
  async runTest0420(_event, el) {
    const url = `/versions/6.0.0-rc3/tests/0420-get-html-with-subs/payload.html`;
    const subs = [["FAILED", "PASSED"]];
    const response = await this.api.getHTML(url, subs);
    el.parentNode.replaceChildren(response.value);
  }
}