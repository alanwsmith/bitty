export default class {
  async getElementRegex(_event, el) {
    const url = "/v4.0.0/payloads/get-element/regex/index.html";
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const response = await this.api.getElement(
      url, subs
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}

