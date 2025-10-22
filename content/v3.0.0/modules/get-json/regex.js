export default class {
  async getRegExJSON(_event, el) {
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "atctic"]
    ];
    const data = await this.api.getJSON(
      "/v3.0.0/payloads/get-json/subs.json",
      subs
    );
    el.innerHTML = data.text;
  }
}