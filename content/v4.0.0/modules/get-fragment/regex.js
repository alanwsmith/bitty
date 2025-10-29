export default class {
  async getFragmentRegEx(_event, el) {
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const response = await this.api.getFragment(
      "/[@ json.version.version_dir @]/payloads/get-fragment/regex.html",
      subs
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}
