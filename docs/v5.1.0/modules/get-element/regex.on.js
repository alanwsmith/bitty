export default class {
  async getElementRegex(_event, el) {
    const url = "/v5.1.0/payloads/get-element/regex.html";
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const response = await this.api.getElement(
      url, subs
    );
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}