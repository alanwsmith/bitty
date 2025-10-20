export default class {
  async runTest0390(_event, el) {
    const url = "/v2.0.0/tests/0390-fetch-json/payload.json";
    const data = await this.api.getJSON(url);
    el.innerHTML = data.status;
  }
}
