export default class {
  async runTest0394(_event, el) {
    const url = "/v3.0.0/tests/0394-get-json-parse-error/intentionally-missing-file.json";
    const response = await this.api.getJSON(url);
    if (response.error.type === "parsing") {
      el.innerHTML = "PASSED";
    }
  }
}