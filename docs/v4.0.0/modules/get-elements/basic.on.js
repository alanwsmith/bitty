export default class {
  async getElementsBasic(_event, el) {
    const response = await this.api.getElements(
      "/v6.0.0/payloads/get-elements/basic.html"
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}