export default class {
  async getErrorJSON(_event, el) {
    const url =  "/v6.0.0/payloads/get-json/intentionally-missing-file.on.json";
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