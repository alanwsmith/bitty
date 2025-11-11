export default class {
  async getElementsSubs(_event, el) {
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const response = await this.api.getElements(
      "/v5.1.0/payloads/get-elements/subs.html",
      subs
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}