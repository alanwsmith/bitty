export default class {
  async getSVGSubs(_event, el) {
    const url = "/[@ json.version.version_dir @]/payloads/get-svg/subs.svg";
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const response = await this.api.getSVG(
      url, subs
    );
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}

