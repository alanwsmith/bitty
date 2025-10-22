export default class {
  async getOptionsSVG(_event, el) {
    const subs = [];
    const options = {
      method: "POST",
    };
    const data = await this.api.getSVG(
      "/v2.0.0/payloads/get-svg/options.svg",
      subs,
      options
    );
    el.innerHTML = data.text;
  }
}