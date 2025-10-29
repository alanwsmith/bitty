export default class {
  async getFragmentSubs(_event, el) {
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const response = await this.api.getFragment(
      "/v4.0.0/payloads/get-fragment/subs.html",
      subs
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}