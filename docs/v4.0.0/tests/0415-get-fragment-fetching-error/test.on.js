export default class {
  async runTest0415(_event, el) {
    const url = `/v4.0.0/tests/0415-get-fragment-fetching-error/payload/intentionally-missing-file.html`;
    const response = await this.api.getFragment(url);
    if (response.error) {
      el.innerHTML = "PASSED";
    }
  }
}