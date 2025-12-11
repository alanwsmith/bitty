export default class {
  async getTXTSubs(_event, el) {
    const url = "/[@ json.version.version_dir @]/payloads/get-txt/subs.txt";
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const options = {};
    const response = await this.api.getTXT(
      url, subs, options
    );
    if (response.ok) {
      el.innerHTML = response.ok;
    } else {
      el.innerHTML = response.error;
    }
  }
}
