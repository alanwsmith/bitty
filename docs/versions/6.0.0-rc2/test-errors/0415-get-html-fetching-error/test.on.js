export default class {
  async runTest0415(_event, el) {
    const url = `//tests/0415-get-html-fetching-error/payload/intentionally-missing-file.html`;
    const response = await this.api.getHTML(url);
    if (response.error) {
      el.innerHTML = "PASSED";
    }
  }
}