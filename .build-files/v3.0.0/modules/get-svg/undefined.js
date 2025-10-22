export default class {
  async getUndefinedSVG(_event, el) {
    const svg = await this.api.getSVG(
      "/v3.0.0/payloads/get-svg/intentionally-missing-file.svg"
    );
    el.innerHTML = svg;
  }
}