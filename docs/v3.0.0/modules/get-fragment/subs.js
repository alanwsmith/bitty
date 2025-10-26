export default class {
  async getFragmentSubs(_event, el) {
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const response = await this.api.getFragment(
      "/v3.0.0/payloads/get-fragment/subs/index.html",
      subs
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}