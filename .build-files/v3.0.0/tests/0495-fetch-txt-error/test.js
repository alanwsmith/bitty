export default class {
  async runTest0495(_event, el) {
    const url = "/v3.0.0/tests/0495-fetch-txt-error/intentionally-missing-file.txt";
    const response = await this.api.getTXT(url);
    if (response === undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
