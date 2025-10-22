export default class {
  async getSubsSVG(_event, el) {
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const svg = await this.api.getSVG(
      "/v3.0.0/payloads/get-svg/subs.svg",
      subs
    );
    el.parentNode.replaceChildren(svg);
  }
}
