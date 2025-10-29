export default class {
  async getErrorJSON(_event, el) {
    const url =  "/v4.0.0/payloads/get-json/intentionally-missing-file.json";
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