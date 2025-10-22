export default class {
  async getFragmentSubs(_event, el) {
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const content = await this.api.getFragment(
      "/v3.0.0/payloads/get-fragment/subs/index.html",
      subs
    );
    el.replaceChildren(content);
  }
}