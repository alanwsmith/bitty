export default class {
  async getBasicJSON(_event, el) {
    const data = await this.api.getJSON(
      "/v2.0.0/payloads/get-json/basic.json"
    );
    el.innerHTML = data.text;
  }
}