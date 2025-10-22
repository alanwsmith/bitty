export default class {
  async getBasicSVG(_event, el) {
    const svg = await this.api.getSVG(
      "/v3.0.0/payloads/get-svg/basic.svg"
    );
    el.parentNode.replaceChildren(svg);
  }
}
