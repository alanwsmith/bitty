export default class {
  async getElementError(_event, el) {
    const url = "/v6.0.0/payloads/get-element/intentionally-missing-file.html";
    const response = await this.api.getElement(url);
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}