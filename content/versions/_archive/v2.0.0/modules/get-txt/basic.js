export default class {
  async getBasicTXT(_event, el) {
    const text = await this.api.getTXT(
      "/v2.0.0/payloads/get-txt/basic.txt"
    );
    el.innerHTML = text;
  }
}
