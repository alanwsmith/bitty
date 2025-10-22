export default class {
  async getUndefinedJSON(_event, el) {
    const data = await this.api.getJSON(
      "/v3.0.0/payloads/get-json/intentionally-missing-file.json"
    );
    el.innerHTML = data;
  }
}