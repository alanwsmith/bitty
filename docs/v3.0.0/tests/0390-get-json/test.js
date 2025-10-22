export default class {
  async runTest0390(_event, el) {
    const url = "/v3.0.0/tests/0390-get-json/payload.json";
    const response = await this.api.getJSON(url);
    if (response.ok) {
      el.innerHTML = response.ok.status;
    }
  }
}