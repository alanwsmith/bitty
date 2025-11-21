export default class {
  async getElementBasic(_event, el) {
    const url = "/v5.1.0/payloads/get-element/basic.html";
    const response = await this.api.getElement(url);
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}

