export default class {
  async getElementBasic(_event, el) {
    const url = "/v5.0.0/payloads/get-element/basic.html";
    const response = await this.api.getElement(url);
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}

