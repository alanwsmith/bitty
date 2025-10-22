export default class {
  async getSubsJSON(_event, el) {
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const data = await this.api.getJSON(
      "/v3.0.0/payloads/get-json/subs.json",
      subs
    );
    el.innerHTML = data.text;
  }
}