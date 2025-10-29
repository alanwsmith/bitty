export default class {
  async getSubsJSON(_event, el) {
    const url = "/[@ version_dir @]/payloads/get-json/subs.json";
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const response = await this.api.getJSON(
      url, subs
    );
    if (response.ok) {
      el.innerHTML = response.ok.text;
    } else {
      el.innerHTML = response.error;
    }
  }
}