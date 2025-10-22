export default class {
  async getRegExSVG(_event, el) {
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const svg = await this.api.getSVG(
      "/v3.0.0/payloads/get-svg/regex.svg",
      subs
    );
    el.parentNode.replaceChildren(svg);
  }
}