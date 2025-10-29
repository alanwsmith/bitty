export default class {
  async getElementSubs(_event, el) {
    const url = "/[@ json.version.version_dir @]/payloads/get-element/subs.html";
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
