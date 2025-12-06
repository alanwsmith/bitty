export default class {
  async getElementOptions(_event, el) {
    const url = "//payloads/get-element/options.html";
    const subs = [];
    const options = {
      "method": "GET"
    };
    const response = await this.api.getElement(
      url, subs, options
    );
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}
