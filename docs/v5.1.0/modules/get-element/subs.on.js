export default class {
  async getElementSubs(_event, el) {
    const url = "/v5.1.0/payloads/get-element/subs.html";
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
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