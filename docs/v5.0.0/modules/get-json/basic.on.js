export default class {
  async getBasicJSON(_event, el) {
    const url = "/v5.0.0/payloads/get-json/basic.on.json";
    const response = await this.api.getJSON(
      url
    );
    if (response.ok) {
      el.innerHTML = response.ok.text;
    } else {
      el.innerHTML = response.error;
    }
  }
}