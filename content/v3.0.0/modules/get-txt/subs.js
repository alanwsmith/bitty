export default class {
  async getSubsTXT(_event, el) {
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const text = await this.api.getTXT(
      "/v3.0.0/payloads/get-txt/subs.txt",
      subs
    );
    el.innerHTML = text;
  }
}
