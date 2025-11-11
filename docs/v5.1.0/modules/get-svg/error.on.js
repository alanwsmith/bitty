export default class {
  async getSVGError(_event, el) {
    const url = "/v5.1.0/payloads/get-svg/intentionally-missing-file.svg";
    const response = await this.api.getSVG(url);
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}