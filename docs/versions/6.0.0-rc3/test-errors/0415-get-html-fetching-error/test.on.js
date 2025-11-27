export default class {
  bittyReady() {
    this.api.localTrigger("runTest0415")
  }

  async runTest0415(_event, el) {
    const url = `/versions/6.0.0-rc3/tests/0415-get-html-fetching-error/payload/intentionally-missing-file.html`;
    const response = await this.api.getHTML(url);
    if (response.error) {
      el.innerHTML = "PASSED";
    }
  }
}