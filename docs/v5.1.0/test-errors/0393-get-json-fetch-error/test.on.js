export default class {
  async runTest0393(_event, el) {
    const url = "/v5.1.0/tests/0393-get-json-fetch-error/intentionally-missing-file.json";
    const response = await this.api.getJSON(url);
    if (response.error.status === 404) {
      el.innerHTML = "PASSED";
    }
  }
}