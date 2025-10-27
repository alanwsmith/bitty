export default class {
  async getElementOptions(_event, el) {
    const url = "/v3.0.0/payloads/get-element/options/index.html";
    const subs = [];
    const options = {
      "method": "GET"
    };
    const response = await this.api.getElement(
      url, subs, options
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}
