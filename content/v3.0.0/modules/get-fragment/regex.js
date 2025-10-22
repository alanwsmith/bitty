export default class {
  async getFragmentRegEx(_event, el) {
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const content = await this.api.getFragment(
      "/v3.0.0/payloads/get-fragment/subs/index.html",
      subs
    );
    el.replaceChildren(content);
  }
}
