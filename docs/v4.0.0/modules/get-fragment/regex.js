export default class {
  async getFragmentRegEx(_event, el) {
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const response = await this.api.getFragment(
      "/v4.0.0/payloads/get-fragment/regex/index.html",
      subs
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}
