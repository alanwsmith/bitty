export default class {
  async getOptionsTXT(_event, el) {
    const subs = [];
    const options = {
      method: "POST",
    };
    const text = await this.api.getTXT(
      "/v3.0.0/payloads/get-txt/options.txt",
      subs,
      options
    );
    el.innerHTML = text;
  }
}