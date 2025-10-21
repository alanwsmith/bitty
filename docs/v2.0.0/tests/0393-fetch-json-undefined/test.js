export default class {
  async runTest0393(_event, el) {
    const url = "/v2.0.0/tests/0393-fetch-json-undefined/intentionally-missing-file.json";
    const data = await this.api.getJSON(url);
    if (data === undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
