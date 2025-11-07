export default class {
  async getElementsSubs(_event, el) {
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const response = await this.api.getElements(
      "/[@ json.version.version_dir @]/payloads/get-elements/subs.html",
      subs
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}