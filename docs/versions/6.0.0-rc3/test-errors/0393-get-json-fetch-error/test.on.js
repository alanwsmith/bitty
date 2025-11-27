export default class {
  bittyReady() {
    this.api.localTrigger("runTest0393");
  }

  async runTest0393(_event, el) {
    const url = "/versions/6.0.0-rc3/tests/0393-get-json-fetch-error/intentionally-missing-file.json";
    const response = await this.api.getJSON(url);
    if (response.error.status === 404) {
      el.innerHTML = "PASSED";
    }
  }
}