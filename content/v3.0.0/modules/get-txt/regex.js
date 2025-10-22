export default class {
  async getRegExTXT(_event, el) {
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const text = await this.api.getTXT(
      "/v3.0.0/payloads/get-txt/regex.txt",
      subs
    );
    el.innerHTML = text;
  }
}
