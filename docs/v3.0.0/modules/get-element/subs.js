export default class {
  async getElementSubs(_event, el) {
    const url = "/v3.0.0/payloads/get-element/subs/index.html";
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
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