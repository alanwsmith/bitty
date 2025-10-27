export default class {
  async getElementError(_event, el) {
    const url = "/v3.0.0/payloads/get-element/intentionally-missing-file.html";
    const response = await this.api.getElement(url);
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}
