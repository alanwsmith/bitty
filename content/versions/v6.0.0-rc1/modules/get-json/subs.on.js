export default class {
  async getSubsJSON(_event, el) {
    const url = "/[@ version_dir @]/payloads/get-json/subs.on.json";
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const response = await this.api.getJSON(
      url, subs
    );
    if (response.value) {
      el.innerHTML = response.value.text;
    } else {
      el.innerHTML = response.error;
    }
  }
}