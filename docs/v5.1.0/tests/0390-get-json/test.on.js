export default class {
  async runTest0390(_event, el) {
    const url = "/v5.1.0/tests/0390-get-json/payload.json";
    const response = await this.api.getJSON(url);
    if (response.value) {
      el.innerHTML = response.value.status;
    }
  }
}