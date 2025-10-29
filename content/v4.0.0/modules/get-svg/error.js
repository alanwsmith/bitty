export default class {
  async getSVGError(_event, el) {
    const url = "/v3.0.0/payloads/get-svg/intentionally-missing-file.svg";
    const response = await this.api.getSVG(url);
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}

