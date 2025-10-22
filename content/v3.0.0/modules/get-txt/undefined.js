export default class {
  async getUndefinedTXT(_event, el) {
    const text = await this.api.getTXT(
      "/v2.0.0/payloads/get-txt/intentionally-missing-file.txt"
    );
    el.innerHTML = text;
  }
}
