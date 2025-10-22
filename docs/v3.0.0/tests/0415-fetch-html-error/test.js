export default class {
  async runTest0415(_event, el) {
    const html = await this.api.getFragment(
      `/v3.0.0/tests/0415-fetch-html-error/payload/intentionally-missing-file.html`,
    );
    if (html === undefined) {
      el.innerHTML = "PASSED";
    }
  }
}