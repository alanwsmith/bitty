export default class {
  async runTest0415(_event, el) {
    const url = `/v5.0.0/tests/0415-get-elements-fetching-error/payload/intentionally-missing-file.html`;
    const response = await this.api.getElements(url);
    if (response.error) {
      el.innerHTML = "PASSED";
    }
  }
}