export default class {
  async getOptionsJSON(_event, el) {
    const subs = [];
    const options = {
      method: "POST",
    };
    const data = await this.api.getJSON(
      "/v3.0.0/payloads/get-json/options.json",
      subs,
      options
    );
    el.innerHTML = data.text;
  }
}